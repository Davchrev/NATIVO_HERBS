/* ==========================================================================
   Render del mapa del Perú y de la ficha de viaje (boarding pass).
   Requiere: d3 (CDN) y DATA (js/data.js).
   ========================================================================== */

function normalize(str){
  return str.normalize("NFD").replace(/[̀-ͯ]/g,"").toUpperCase().trim();
}

function titleCase(str){
  return str.toLowerCase().split(" ")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

/* Convierte "MADRE DE DIOS" -> "madre-de-dios" para el nombre del archivo de imagen */
function slugify(str){
  return str.normalize("NFD").replace(/[̀-ͯ]/g,"")
    .toLowerCase().trim().replace(/\s+/g,"-");
}

const svg = d3.select("#map");
const width = 600, height = 800;

/* ¿El dispositivo tiene mouse real (hover)? En móvil/táctil será false. */
const canHover = window.matchMedia("(hover: hover)").matches;

const geoUrl = "https://raw.githubusercontent.com/juaneladio/peru-geojson/master/peru_departamental_simple.geojson";

fetch(geoUrl)
  .then(r => r.json())
  .then(geojson => {
    const projection = d3.geoMercator().fitSize([width - 20, height - 20], geojson);
    projection.translate([projection.translate()[0] + 10, projection.translate()[1] + 10]);
    const pathGen = d3.geoPath(projection);

    const g = svg.append("g");

    const features = g.selectAll("g.feat")
      .data(geojson.features)
      .enter()
      .append("g")
      .attr("class","feat");

    features.append("path")
      .attr("class","province")
      .attr("d", d => pathGen(d))
      .attr("data-name", d => normalize(d.properties.NOMBDEP))
      .on("mouseenter", function(event, d){
        if(canHover) selectRegion(normalize(d.properties.NOMBDEP), this);
      })
      .on("click", function(event, d){
        const key = normalize(d.properties.NOMBDEP);
        // Si la región ya está seleccionada (activa), un nuevo click/tap la abre.
        // Si no, primero solo la selecciona y muestra su info.
        if(this.classList.contains("active")){
          openRegion(key);
        } else {
          selectRegion(key, this);
        }
      });

    features.append("text")
      .attr("class","plabel")
      .attr("x", d => pathGen.centroid(d)[0])
      .attr("y", d => pathGen.centroid(d)[1])
      .attr("text-anchor","middle")
      .text(d => d.properties.NOMBDEP);

    const count = document.getElementById("region-count");
    if(count) count.textContent = geojson.features.length + " regiones";
  })
  .catch(err => {
    document.querySelector(".hint").textContent = "// no se pudo cargar el mapa (revisa tu conexión)";
    console.error(err);
  });

function openRegion(key){
  window.location.href = "region.html?region=" + encodeURIComponent(key);
}

function selectRegion(key, node){
  document.querySelectorAll("path.province").forEach(p => p.classList.remove("active"));
  document.querySelectorAll("text.plabel").forEach(t => t.classList.remove("active"));
  if(node){
    node.classList.add("active");
    if(node.nextSibling && node.nextSibling.classList){
      node.nextSibling.classList.add("active");
    }
  }

  const info = DATA[key];
  const el = document.getElementById("panel-content");

  if(!info){
    el.innerHTML = '<div class="empty-state"><span class="big">' + titleCase(key) +
      '</span>Aún no tengo la ficha de esta región.</div>';
    return;
  }

  const acts = info.actividades
    .map(a => `<li><span class="ico">${a.ico}</span><span>${a.txt}</span></li>`)
    .join("");

  const tags = info.tags
    .map((t,i) => `<span class="tag ${i===1?'alt':i===2?'alt2':i===3?'alt3':''}">${t}</span>`)
    .join("");

  el.innerHTML = `
    <div class="pass">
      <div class="pass-top">
        <div class="pass-code">PE-${info.codigo} <span>/ REGIÓN</span></div>
        <div class="pass-name">${titleCase(key)}</div>
        <div class="pass-capital">✈ Capital: ${info.capital}</div>
      </div>
      <div class="perf"></div>
      <div class="pass-body">
        <p class="pass-desc">${info.desc}</p>

        <p class="section-title">Qué hacer</p>
        <ul class="acts">${acts}</ul>

        <div class="must">
          <span class="star">⭐</span>
          <span class="must-txt"><b>Imperdible.</b> ${info.imperdible}</span>
        </div>

        <p class="section-title">Etiquetas</p>
        <div class="tags">${tags}</div>

        <div class="dest">
          <p class="section-title">Destino representativo</p>
          <img class="dest-img" src="img/${slugify(key)}.webp"
               alt="${info.landmark}"
               loading="lazy" decoding="async"
               onerror="this.closest('.dest').style.display='none';">
          <span class="dest-cap">${info.simbolo || ''} ${info.landmark}</span>
        </div>
      </div>
      <div class="meta-row">
        <div>Mejor época<b>${info.epoca}</b></div>
        <div>Altitud capital<b>${info.altitud}</b></div>
        <div>Plato típico<b>${info.plato}</b></div>
        <div>Código<b>PE-${info.codigo}</b></div>
      </div>
      <div class="barcode"></div>
    </div>
  `;

  // Tematiza el encabezado de la ficha con el color de la foto de la región.
  const pass = el.querySelector(".pass");
  const img = el.querySelector(".dest-img");
  if(pass && img){
    if(img.complete && img.naturalWidth){
      themePassFromImage(img, pass);
    } else {
      img.addEventListener("load", () => themePassFromImage(img, pass), { once:true });
    }
  }
}

/* ==========================================================================
   Extrae un color dominante de la foto y lo aplica al encabezado de la ficha,
   eligiendo texto claro u oscuro según el contraste.
   ========================================================================== */
function themePassFromImage(img, pass){
  try{
    const w = 40, h = 40;
    const cv = document.createElement("canvas");
    cv.width = w; cv.height = h;
    const ctx = cv.getContext("2d", { willReadFrequently:true });
    ctx.drawImage(img, 0, 0, w, h);
    const data = ctx.getImageData(0, 0, w, h).data;

    // Agrupa píxeles en cubos de color y puntúa por población y saturación.
    const bins = {};
    for(let i = 0; i < data.length; i += 4){
      const a = data[i+3];
      if(a < 125) continue;
      const r = data[i], g = data[i+1], b = data[i+2];
      const mx = Math.max(r,g,b), mn = Math.min(r,g,b);
      const sat = mx === 0 ? 0 : (mx - mn) / mx;
      const lum = (0.2126*r + 0.7152*g + 0.0722*b) / 255;
      // Descarta casi-blancos y casi-negros para no "lavar" el color.
      if(lum > 0.93 || lum < 0.06) continue;
      const key = (r >> 4) + "," + (g >> 4) + "," + (b >> 4);
      const bin = bins[key] || (bins[key] = { r:0, g:0, b:0, n:0, score:0 });
      bin.r += r; bin.g += g; bin.b += b; bin.n++;
      bin.score += 1 + sat * 2;
    }

    let best = null;
    for(const k in bins){ if(!best || bins[k].score > best.score) best = bins[k]; }
    if(!best){ pass.style.removeProperty("--pass-c1"); return; }

    let r = Math.round(best.r / best.n);
    let g = Math.round(best.g / best.n);
    let b = Math.round(best.b / best.n);

    const [h1, s, l] = rgbToHsl(r, g, b);
    // Asegura un color con cuerpo para el degradado del encabezado.
    const c1 = hslToRgb(h1, Math.min(0.72, Math.max(0.42, s)), clamp(l, 0.34, 0.5));
    const c2 = hslToRgb((h1 + 18) % 360, Math.min(0.78, Math.max(0.5, s)), clamp(l + 0.1, 0.42, 0.6));

    const fg = contrastText(c1);
    pass.style.setProperty("--pass-c1", rgbCss(c1));
    pass.style.setProperty("--pass-c2", rgbCss(c2));
    pass.style.setProperty("--pass-fg", fg);
  }catch(e){
    // Si la imagen no permite leer píxeles, se mantiene el tema por defecto.
    pass.style.removeProperty("--pass-c1");
  }
}

function clamp(v, lo, hi){ return Math.min(hi, Math.max(lo, v)); }
function rgbCss(c){ return "rgb(" + c[0] + "," + c[1] + "," + c[2] + ")"; }

/* Texto blanco o casi-negro según la luminancia del fondo (contraste WCAG). */
function contrastText(c){
  const lin = c.map(v => { v /= 255; return v <= 0.03928 ? v/12.92 : Math.pow((v+0.055)/1.055, 2.4); });
  const lum = 0.2126*lin[0] + 0.7152*lin[1] + 0.0722*lin[2];
  return lum > 0.42 ? "#1c1409" : "#fff8ef";
}

function rgbToHsl(r, g, b){
  r/=255; g/=255; b/=255;
  const mx = Math.max(r,g,b), mn = Math.min(r,g,b);
  let h, s, l = (mx+mn)/2;
  if(mx === mn){ h = s = 0; }
  else{
    const d = mx - mn;
    s = l > 0.5 ? d/(2-mx-mn) : d/(mx+mn);
    switch(mx){
      case r: h = (g-b)/d + (g<b?6:0); break;
      case g: h = (b-r)/d + 2; break;
      default: h = (r-g)/d + 4;
    }
    h *= 60;
  }
  return [h, s, l];
}

function hslToRgb(h, s, l){
  h/=360;
  const q = l < 0.5 ? l*(1+s) : l+s-l*s;
  const p = 2*l - q;
  const hue = t => {
    if(t < 0) t += 1; if(t > 1) t -= 1;
    if(t < 1/6) return p + (q-p)*6*t;
    if(t < 1/2) return q;
    if(t < 2/3) return p + (q-p)*(2/3 - t)*6;
    return p;
  };
  return [
    Math.round(hue(h + 1/3) * 255),
    Math.round(hue(h) * 255),
    Math.round(hue(h - 1/3) * 255)
  ];
}
