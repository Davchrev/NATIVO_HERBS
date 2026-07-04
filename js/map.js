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
          <img class="dest-img" src="img/${slugify(key)}.png"
               alt="${info.landmark}"
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
}
