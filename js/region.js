/* ===== Utilidades ===== */
function titleCase(str){
  return str.toLowerCase().split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}
function slugify(str){
  return str.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().trim().replace(/\s+/g,"-");
}
function esc(s){ return String(s == null ? "" : s); }

const params = new URLSearchParams(window.location.search);
const key = (params.get("region") || "").toUpperCase().trim();
const info = DATA[key];
const app = document.getElementById("app");
const slug = slugify(key);

if(!info){
  document.title = "Región no encontrada — Peruvian Nativo Herbs";
  app.innerHTML = `
    <div class="stripe"></div>
    <div class="brandbar">
      <a href="index.html"><img class="brand-logo" src="Logo.png" alt="Peruvian Nativo Herbs" /></a>
      <span class="spacer"></span>
      <a href="index.html" class="back">← Volver al mapa</a>
    </div>
    <div class="notfound">
      <p style="font-size:46px;margin:0 0 10px">🗺️</p>
      <p>Aún no tenemos la ficha de <b>${titleCase(key || "esta región")}</b>.</p>
      <p><a href="index.html" style="color:var(--clay-deep)">← Volver al mapa</a></p>
    </div>`;
} else {
  /* Detectamos cuántas fotos hay en img/<region>/ y decidimos el diseño. */
  probePhotos(slug, function(res){
    if(res){
      renderRich(res.first, res.ext);
    } else {
      renderNormal(`img/${slug}.png`);
    }
  });
}

/* ===== Detección de fotos por carpeta (probing) ===== */
function testImage(src, cb){
  const img = new Image();
  img.onload = () => cb(true);
  img.onerror = () => cb(false);
  img.src = src;
}
function probePhotos(slug, done){
  const exts = ["jpg","jpeg","png","webp"];
  let settled = false, pending = exts.length;
  // Probamos SOLO la 1ª foto en todas las extensiones EN PARALELO.
  // En cuanto sabemos que la carpeta existe, respondemos con la primera foto;
  // las demás se descubren después (ya con el hero visible), sin bloquear la carga.
  exts.forEach(ext => {
    const first = `img/${slug}/1.${ext}`;
    testImage(first, ok => {
      if(settled) return;
      if(ok){ settled = true; done({ first, ext }); }
      else if(--pending === 0){ settled = true; done(null); }  // no hay carpeta con fotos
    });
  });
}

/* ===== MODO RICO (carrusel) ===== */
function renderRich(firstSrc, ext){
  const nombre = titleCase(key);
  document.title = nombre + " — Peruvian Nativo Herbs";

  const exps = info.actividades.map(a =>
    `<article class="exp-card"><div class="ico">${a.ico}</div><p class="exp-txt">${a.txt}</p></article>`
  ).join("");

  app.innerHTML = `
    <header class="lima-hero">
      <div class="hero-slides" id="heroSlides"></div>
      <div class="hero-scrim"></div>
      <nav class="lima-nav">
        <a href="index.html"><img class="brand-logo" src="Logo.png" alt="Peruvian Nativo Herbs" /></a>
        <span class="spacer"></span>
        <a href="index.html" class="back">← Volver al mapa</a>
      </nav>
      <div class="hero-inner">
        <p class="eyebrow">PE-${info.codigo} · Región del Perú</p>
        <h1>${nombre}</h1>
        <p class="sub">${info.desc}</p>
        <a href="#experiencias" class="cta">Descubre ${nombre} ↓</a>
      </div>
    </header>

    <div class="quick-strip">
      <div class="qi"><span class="k">Capital</span><span class="v">${info.capital}</span></div>
      <div class="qi"><span class="k">Mejor época</span><span class="v">${info.epoca}</span></div>
      <div class="qi"><span class="k">Altitud</span><span class="v">${info.altitud}</span></div>
      <div class="qi"><span class="k">Plato típico</span><span class="v">${info.plato}</span></div>
    </div>

    <main class="lima-wrap">
      <section id="experiencias">
        <div class="sec-head">
          <p class="kicker">¿Qué hacer en ${nombre}?</p>
          <h2>Planes imperdibles</h2>
          <p>Esto es lo que no te puedes perder en ${nombre}.</p>
        </div>
        <div class="exp-grid">${exps}</div>
      </section>

      <section class="feature-band">
        <div class="fb-emoji">${info.simbolo || "⭐"}</div>
        <div class="fb-text">
          <p class="kicker">Imperdible</p>
          <h2>${info.landmark}</h2>
          <p>${info.imperdible}</p>
        </div>
      </section>

      <section>
        <div class="sec-head">
          <p class="kicker">Antes de viajar</p>
          <h2>Datos para tu viaje</h2>
        </div>
        <div class="travel-data">
          <div class="td"><span class="k">Capital</span><span class="v">${info.capital}</span></div>
          <div class="td"><span class="k">Mejor época</span><span class="v">${info.epoca}</span></div>
          <div class="td"><span class="k">Altitud capital</span><span class="v">${info.altitud}</span></div>
          <div class="td"><span class="k">Plato típico</span><span class="v">${info.plato}</span></div>
          <div class="td"><span class="k">Lugar representativo</span><span class="v">${info.landmark}</span></div>
          <div class="td"><span class="k">Código</span><span class="v">PE-${info.codigo}</span></div>
        </div>
      </section>

      <section class="lima-cta">
        <h2>¿Y tú qué planes?</h2>
        <p>Lleva el sabor del Perú contigo con Peruvian Nativo Herbs.</p>
        <div class="btns">
          <a href="sorteo.html" class="primary">🎟️ Participa en el sorteo</a>
          <a href="index.html" class="ghost">← Explorar otras regiones</a>
        </div>
      </section>
    </main>

    <footer>Peruvian Nativo Herbs · Datos con fines ilustrativos</footer>
  `;

  startCarousel(firstSrc, ext);
}

function startCarousel(firstSrc, ext){
  const slidesEl = document.getElementById("heroSlides");
  const slides = [];

  function addSlide(src){
    const d = document.createElement("div");
    d.className = "hero-slide" + (slides.length === 0 ? " active" : "");
    d.style.backgroundImage = `url('${src}')`;
    slidesEl.appendChild(d);
    slides.push(d);
  }

  // 1) Mostramos la primera foto de inmediato (ya está en caché tras el probe).
  addSlide(firstSrc);

  // 2) Descubrimos y añadimos el resto EN SEGUNDO PLANO, ya con el hero visible.
  (function discover(n){
    if(n > 20) return;
    const src = `img/${slug}/${n}.${ext}`;
    testImage(src, ok => { if(ok){ addSlide(src); discover(n + 1); } });
  })(2);

  // 3) Rotación (se activa sola en cuanto hay 2+ fotos cargadas).
  let idx = 0;
  setInterval(() => {
    if(slides.length < 2) return;
    slides[idx].classList.remove("active");
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add("active");
  }, 5000);
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
      <a href="index.html"><img class="brand-logo" src="Logo.png" alt="Peruvian Nativo Herbs" /></a>
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
        <img class="dest-hero-img" src="${imgSrc}" alt="${info.landmark}"
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
