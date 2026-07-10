/* ==========================================================================
   region.js — Una sola plantilla para todas las regiones.
   · Si la región trae contenido rico en DATA (campo "lugares") → MODO RICO:
     rellena la estructura HTML de #rich desde los datos (no arma la página).
   · Si no → MODO NORMAL: ficha clásica.
   ========================================================================== */

/* ===== Utilidades ===== */
function titleCase(str){
  return str.toLowerCase().split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}
function slugify(str){
  return str.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().trim().replace(/\s+/g,"-");
}
function esc(s){ return String(s == null ? "" : s); }
function smallImage(src){ return src.replace(/\.webp$/, "-720.webp"); }
function setResponsiveImage(img, src, width, sizes){
  img.src = src;
  if(width > 720){
    img.srcset = `${smallImage(src)} 720w, ${src} ${width}w`;
    img.sizes = sizes;
  }
}
function deferResponsiveImage(img, src, width, sizes){
  img.dataset.src = src;
  if(width > 720){
    img.dataset.srcset = `${smallImage(src)} 720w, ${src} ${width}w`;
    img.dataset.sizes = sizes;
  }
}
function loadDeferredImage(img){
  if(!img || !img.dataset.src) return;
  if(img.dataset.srcset) img.srcset = img.dataset.srcset;
  if(img.dataset.sizes) img.sizes = img.dataset.sizes;
  img.src = img.dataset.src;
  delete img.dataset.src;
  delete img.dataset.srcset;
  delete img.dataset.sizes;
}

const params = new URLSearchParams(window.location.search);
const key = (params.get("region") || "").toUpperCase().trim();
const info = DATA[key];
const app = document.getElementById("app");
const slug = slugify(key);

/* Preload de la primera imagen del hero: empieza a descargar inmediatamente,
   incluso antes de renderizar, para evitar el parpadeo negro. */
if(info && Array.isArray(info.fotos) && info.fotos.length){
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = info.fotos[0].src;
  if(info.fotos[0].width > 720){
    link.setAttribute('imagesrcset', `${smallImage(info.fotos[0].src)} 720w, ${info.fotos[0].src} ${info.fotos[0].width}w`);
    link.setAttribute('imagesizes', '100vw');
  }
  document.head.appendChild(link);
}

if(!info){
  document.title = "Región no encontrada — Peruvian Nativo Herbs";
  app.innerHTML = `
    <div class="stripe"></div>
    <div class="brandbar">
      <a href="index.html"><img class="brand-logo" src="Logo.webp" width="476" height="409" alt="Peruvian Nativo Herbs" decoding="async" /></a>
      <span class="spacer"></span>
      <a href="index.html" class="back">← Volver al mapa</a>
    </div>
    <div class="notfound">
      <p style="font-size:46px;margin:0 0 10px">🗺️</p>
      <p>Aún no tenemos la ficha de <b>${titleCase(key || "esta región")}</b>.</p>
      <p><a href="index.html" style="color:var(--clay-deep)">← Volver al mapa</a></p>
    </div>`;
} else if(Array.isArray(info.lugares) && info.lugares.length){
  renderRich();
} else {
  renderNormal(`img/${slug}.webp`);
}

/* ===== MODO RICO — rellena la plantilla #rich desde los datos ===== */
function renderRich(){
  const nombre = titleCase(key);
  document.title = nombre + " — Peruvian Nativo Herbs";

  const setText = (id, val) => { const el = document.getElementById(id); if(el) el.textContent = val; };
  const setHTML = (id, val) => { const el = document.getElementById(id); if(el) el.innerHTML = val; };

  /* Hero + cabecera */
  setText("r-eyebrow", `PE-${info.codigo} · Región del Perú`);
  setText("r-nombre", nombre);
  setText("r-desc", info.desc);
  setText("r-cta", `Descubre ${nombre} ↓`);

  /* Datos rápidos */
  setText("r-capital", info.capital);
  setText("r-epoca", info.epoca);
  setText("r-altitud", info.altitud);
  setText("r-plato", info.plato);

  /* Intro (opcional) */
  if(info.intro){
    setText("r-introKicker", `Bienvenido a ${nombre}`);
    setText("r-intro", info.intro);
  } else {
    document.getElementById("r-introSection").hidden = true;
  }

  /* Fotos del hero */
  const slidesEl = document.getElementById("slides");
  const tplSlide = document.getElementById("tpl-slide");

  /* Placeholder difuminado ("blur-up"): mientras la primera foto se descarga,
     mostramos una miniatura diminuta incrustada (info.blur) escalada al hero.
     Así nunca se ve el fondo negro; la foto nítida la reemplaza al llegar. */
  const heroEl = document.querySelector(".lima-hero");
  if(info.blur && heroEl){
    heroEl.style.backgroundImage = `url("${info.blur}")`;
    heroEl.style.backgroundSize = "cover";
    heroEl.style.backgroundPosition = "center";
  }

  info.fotos.forEach((f, i) => {
    const node = tplSlide.content.cloneNode(true);
    const slide = node.querySelector(".hero-slide");
    const img = node.querySelector("img");
    if(i === 0){
      slide.classList.add("active");
      img.setAttribute("fetchpriority", "high");
      setResponsiveImage(img, f.src, f.width || 1600, "100vw");
    } else {
      deferResponsiveImage(img, f.src, f.width || 1600, "100vw");
    }
    img.alt = f.alt || nombre;
    if(f.pos) img.style.objectPosition = f.pos;
    slidesEl.appendChild(node);
  });

  /* Lugares destacados */
  const placesEl = document.getElementById("places");
  const tplPlace = document.getElementById("tpl-place");
  const photoWidths = Object.fromEntries(info.fotos.map(f => [f.src, f.width || 1600]));
  info.lugares.forEach(l => {
    const node = tplPlace.content.cloneNode(true);
    const img = node.querySelector(".place-media img");
    setResponsiveImage(img, l.img, photoWidths[l.img] || 1600, "(max-width: 720px) 100vw, 550px");
    img.alt = l.nombre;
    if(l.pos) img.style.objectPosition = l.pos;
    node.querySelector(".place-badge").textContent = l.badge || "";
    node.querySelector(".place-kicker").textContent = l.kicker || "";
    node.querySelector("h3").textContent = l.nombre;
    node.querySelector(".place-desc").innerHTML = l.desc;
    const meta = node.querySelector(".place-meta");
    (l.meta || []).forEach(m => {
      const s = document.createElement("span");
      s.textContent = m;
      meta.appendChild(s);
    });
    placesEl.appendChild(node);
  });

  /* Otros lugares (opcional) */
  if(Array.isArray(info.spots) && info.spots.length){
    setText("r-spotsTitle", `Otros imperdibles de ${nombre}`);
    setText("r-spotsSub", "Barrios, sitios y rincones para seguir explorando.");
    const spotsEl = document.getElementById("spots");
    const tplSpot = document.getElementById("tpl-spot");
    info.spots.forEach(s => {
      const node = tplSpot.content.cloneNode(true);
      node.querySelector(".ico").textContent = s.ico || "📍";
      node.querySelector("h4").textContent = s.nombre;
      node.querySelector("p").innerHTML = s.desc;
      spotsEl.appendChild(node);
    });
  } else {
    document.getElementById("r-spotsHead").hidden = true;
    document.getElementById("spots").hidden = true;
  }

  /* Banda "Imperdible" (reutiliza campos existentes) */
  setText("r-fbEmoji", info.simbolo || "⭐");
  setText("r-fbTitle", info.landmark);
  setHTML("r-fbText", info.imperdible);

  /* Mostrar la sección rica e iniciar el carrusel */
  document.getElementById("rich").hidden = false;
  startCarousel(slidesEl);
}

/* Rotación del hero cada 5 s */
function startCarousel(slidesEl){
  const slides = Array.from(slidesEl.querySelectorAll(".hero-slide"));
  if(slides.length < 2) return;
  let idx = 0;
  const advance = () => {
    const next = (idx + 1) % slides.length;
    const img = slides[next].querySelector("img");
    loadDeferredImage(img);
    const show = () => {
      slides[idx].classList.remove("active");
      idx = next;
      slides[idx].classList.add("active");
      setTimeout(advance, 5000);
    };
    if(img.complete && img.naturalWidth) show();
    else img.addEventListener("load", show, { once:true });
  };
  setTimeout(advance, 5000);
}

/* ===== MODO NORMAL (ficha clásica) ===== */
function renderNormal(imgSrc){
  const nombre = titleCase(key);
  document.title = nombre + " — Peruvian Nativo Herbs";

  const acts = info.actividades
    .map(a => `<li><span class="ico">${a.ico}</span><span>${a.txt}</span></li>`).join("");
  const tags = info.tags.map(t => `<span class="tag">${t}</span>`).join("");

  app.innerHTML = `
    <div class="stripe"></div>
    <div class="brandbar">
      <a href="index.html"><img class="brand-logo" src="Logo.webp" width="476" height="409" alt="Peruvian Nativo Herbs" decoding="async" /></a>
      <span class="spacer"></span>
      <a href="index.html" class="back">← Volver al mapa</a>
    </div>

    <main class="region-main">
      <section class="region-hero">
        <div class="hero-symbol">${info.simbolo || "📍"}</div>
        <div class="hero-text">
          <p class="code">PE-${info.codigo} · Región del Perú</p>
          <h1>${nombre}</h1>
          <p class="landmark">🏛️ Lugar representativo: ${info.landmark}</p>
          <p class="capital">✈ Capital: ${info.capital}</p>
        </div>
      </section>

      <section class="card full dest-card">
        <h2>Destino más representativo</h2>
        <img class="dest-hero-img" src="${imgSrc}" alt="${info.landmark}" loading="lazy" decoding="async"
             onerror="this.closest('.dest-card').style.display='none'">
        <p class="dest-hero-cap">${info.simbolo || ''} ${info.landmark}</p>
      </section>

      <div class="region-grid">
        <section class="card full">
          <h2>Descripción</h2>
          <p class="desc">${info.desc}</p>
        </section>

        <section class="card">
          <h2>Qué hacer</h2>
          <ul class="acts">${acts}</ul>
        </section>

        <section class="card">
          <h2>Imperdible</h2>
          <div class="must"><span class="star">⭐</span><span>${info.imperdible}</span></div>
          <h2 style="margin-top:20px">Etiquetas</h2>
          <div class="tags">${tags}</div>
        </section>

        <section class="card full">
          <h2>Datos de la región</h2>
          <ul class="datos-list">
            <li><span class="k">Lugar representativo</span><span class="v">${info.landmark}</span></li>
            <li><span class="k">Capital</span><span class="v">${info.capital}</span></li>
            <li><span class="k">Mejor época</span><span class="v">${info.epoca}</span></li>
            <li><span class="k">Altitud capital</span><span class="v">${info.altitud}</span></li>
            <li><span class="k">Plato típico</span><span class="v">${info.plato}</span></li>
            <li><span class="k">Código</span><span class="v">PE-${info.codigo}</span></li>
          </ul>
        </section>
      </div>
    </main>
  `;
}
