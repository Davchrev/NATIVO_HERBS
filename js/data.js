/* ==========================================================================
   Datos de las 25 regiones del Perú.
   Cada ficha incluye: capital, código, símbolo (emoji), lugar representativo,
   descripción, actividades ("qué hacer"), un imperdible, plato típico,
   etiquetas, mejor época y altitud.
   ========================================================================== */

const DATA = {
  "AMAZONAS": {
    capital:"Chachapoyas", codigo:"01",
    simbolo:"🏰", landmark:"Fortaleza de Kuélap",
    desc:"Tierra de la cultura Chachapoyas, con la fortaleza de Kuélap encaramada sobre la ceja de selva y cataratas que se pierden entre la neblina.",
    actividades:[
      {ico:"🏰", txt:"Subir en teleférico a la fortaleza de Kuélap"},
      {ico:"💧", txt:"Caminar hasta la catarata de Gocta (771 m)"},
      {ico:"⚰️", txt:"Ver los sarcófagos de Karajía en el acantilado"},
      {ico:"🦜", txt:"Recorrer el valle de los Chilchos entre orquídeas"}
    ],
    imperdible:"La fortaleza de <b>Kuélap</b>, la 'Machu Picchu del norte', anterior al imperio inca.",
    plato:"Juane de yuca", tags:["Arqueología","Naturaleza","Aventura"],
    epoca:"Mayo – Setiembre", altitud:"2,335 msnm"
  },
  "ANCASH": {
    capital:"Huaraz", codigo:"02",
    simbolo:"🗿", landmark:"Cabeza Clava de Chavín",
    desc:"La Cordillera Blanca y el Callejón de Huaylas concentran algunas de las mejores rutas de trekking y montañismo de Sudamérica.",
    actividades:[
      {ico:"🥾", txt:"Trek a la Laguna 69, de un turquesa imposible"},
      {ico:"🏔️", txt:"Escalar o mirar el nevado Huascarán (6,768 m)"},
      {ico:"🌄", txt:"Visitar la laguna Parón y los Nevados Huandoy"},
      {ico:"🗿", txt:"Explorar las ruinas de Chavín de Huántar"}
    ],
    imperdible:"La <b>Cabeza Clava</b> de Chavín de Huántar y la <b>Laguna 69</b> en el Parque Huascarán.",
    plato:"Picante de cuy", tags:["Montaña","Trekking","Lagunas"],
    epoca:"Mayo – Setiembre", altitud:"3,052 msnm"
  },
  "APURIMAC": {
    capital:"Abancay", codigo:"03",
    simbolo:"🌉", landmark:"Puente Q'eswachaka",
    desc:"Cañones profundos y pueblos andinos poco visitados; punto de partida para caminatas alternativas hacia santuarios de altura.",
    actividades:[
      {ico:"🧗", txt:"Cruzar el puente colgante Q'eswachaka de fibra vegetal"},
      {ico:"⛰️", txt:"Ascender al santuario del Ampay entre bosques de intimpa"},
      {ico:"🚣", txt:"Rafting en el cañón del río Apurímac"},
      {ico:"🐎", txt:"Cabalgar por los andenes de Saywite"}
    ],
    imperdible:"El monolito de <b>Saywite</b>, una maqueta pétrea del mundo inca.",
    plato:"Tallarín de casa", tags:["Andes","Aventura","Poco turístico"],
    epoca:"Abril – Octubre", altitud:"2,378 msnm"
  },
  "AREQUIPA": {
    capital:"Arequipa", codigo:"04",
    simbolo:"🌋", landmark:"Cañón del Colca y el Misti",
    desc:"La 'Ciudad Blanca' de sillar, vigilada por el volcán Misti, es la puerta al Cañón del Colca y hogar del cóndor andino.",
    actividades:[
      {ico:"🦅", txt:"Ver al cóndor volar en la Cruz del Cóndor (Colca)"},
      {ico:"⛪", txt:"Perderse en el Monasterio de Santa Catalina"},
      {ico:"🌋", txt:"Trekking al volcán Misti o al Chachani"},
      {ico:"🍽️", txt:"Almorzar en una picantería tradicional"}
    ],
    imperdible:"El <b>Cañón del Colca</b>, dos veces más profundo que el Gran Cañón.",
    plato:"Rocoto relleno", tags:["Ciudad colonial","Cañón","Gastronomía"],
    epoca:"Todo el año", altitud:"2,335 msnm"
  },
  "AYACUCHO": {
    capital:"Ayacucho", codigo:"05",
    simbolo:"⛪", landmark:"33 iglesias coloniales",
    desc:"Cuna de 33 iglesias coloniales y de la Semana Santa más celebrada del país, con talleres de retablos y textiles.",
    actividades:[
      {ico:"⛪", txt:"Recorrer las 33 iglesias del centro histórico"},
      {ico:"🎭", txt:"Vivir la Semana Santa, la más famosa del Perú"},
      {ico:"🖼️", txt:"Comprar retablos y cerámica en el barrio Santa Ana"},
      {ico:"🏛️", txt:"Visitar el complejo Wari, antigua capital imperial"}
    ],
    imperdible:"La <b>Semana Santa ayacuchana</b>, diez días de procesiones y fervor.",
    plato:"Puca picante", tags:["Historia","Artesanía","Fiestas"],
    epoca:"Marzo – Abril (Semana Santa)", altitud:"2,761 msnm"
  },
  "CAJAMARCA": {
    capital:"Cajamarca", codigo:"06",
    simbolo:"♨️", landmark:"Baños del Inca",
    desc:"Valles verdes, baños termales incas y el escenario donde Atahualpa fue capturado; su Carnaval es de los más animados del Perú.",
    actividades:[
      {ico:"♨️", txt:"Relajarse en los Baños del Inca termales"},
      {ico:"🎊", txt:"Bailar en el Carnaval de Cajamarca"},
      {ico:"🪟", txt:"Descubrir las ventanillas de Otuzco (necrópolis)"},
      {ico:"🧀", txt:"Probar quesos y manjar en la ruta láctea"}
    ],
    imperdible:"El <b>Cuarto del Rescate</b>, donde Atahualpa negoció su libertad.",
    plato:"Humitas y chicharrón", tags:["Termas","Historia","Carnaval"],
    epoca:"Junio – Setiembre", altitud:"2,750 msnm"
  },
  "CALLAO": {
    capital:"Callao", codigo:"07",
    simbolo:"🏰", landmark:"Fortaleza del Real Felipe",
    desc:"El puerto principal del Perú, con la fortaleza colonial del Real Felipe y el barrio bohemio de Chucuito lleno de murales.",
    actividades:[
      {ico:"🏰", txt:"Visitar la Fortaleza del Real Felipe"},
      {ico:"🎨", txt:"Recorrer los murales del Callao Monumental"},
      {ico:"🐧", txt:"Navegar a las islas Palomino y nadar con lobos marinos"},
      {ico:"🦭", txt:"Ver leones marinos y aves guaneras"}
    ],
    imperdible:"Nadar junto a los <b>lobos marinos</b> de las islas Palomino.",
    plato:"Ceviche de pescado", tags:["Puerto","Arte urbano","Historia naval"],
    epoca:"Diciembre – Abril", altitud:"0 msnm"
  },
  "CUSCO": {
    blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAgACDQIVAAD/4gJASUNDX1BST0ZJTEUAAQEAAAIwQURCRQIQAABtbnRyUkdCIFhZWiAHzwAGAAMAAAAAAABhY3NwQVBQTAAAAABub25lAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLUFEQkUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApjcHJ0AAAA/AAAADJkZXNjAAABMAAAAGt3dHB0AAABnAAAABRia3B0AAABsAAAABRyVFJDAAABxAAAAA5nVFJDAAAB1AAAAA5iVFJDAAAB5AAAAA5yWFlaAAAB9AAAABRnWFlaAAACCAAAABRiWFlaAAACHAAAABR0ZXh0AAAAAENvcHlyaWdodCAxOTk5IEFkb2JlIFN5c3RlbXMgSW5jb3Jwb3JhdGVkAAAAZGVzYwAAAAAAAAARQWRvYmUgUkdCICgxOTk4KQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWFlaIAAAAAAAAPNRAAEAAAABFsxYWVogAAAAAAAAAAAAAAAAAAAAAGN1cnYAAAAAAAAAAQIzAABjdXJ2AAAAAAAAAAECMwAAY3VydgAAAAAAAAABAjMAAFhZWiAAAAAAAACcGAAAT6UAAAT8WFlaIAAAAAAAADSNAACgLAAAD5VYWVogAAAAAAAAJjEAABAvAAC+nP/+ABBMYXZjNjIuMjguMTAyAP/bAEMACAwMDgwOEBAQEBAQExITFBQUExMTExQUFBUVFRkZGRUVFRQUFRUYGBkZGxwbGhoZGhwcHh4eJCQiIioqKzMzPv/EAHQAAAMBAQAAAAAAAAAAAAAAAAQFBwIGAQEBAQEAAAAAAAAAAAAAAAADAQAEEAACAQMDAwMBCQEAAAAAAAABAgMREgAhMXFBBAUTUTOyocFhFJGBMtEVJBEAAwABBQEBAAAAAAAAAAAAAQIAA6EhQUIiETH/wAARCAAVACADASIAAhEAAxEA/9oADAMBAAIRAxEAPwDt/wDGSImyW3rRSQP0H9YaVTsVJaSGMshuZmCtTeupG2SGHykcSlh61VpZ/wBDCnsBprh6zN3kS+tGiitZXkdiJNdhqSKfgd98Ziex0jX51GtRIvI+P7daLIjXCt2rV5IqMFfyHZsTbMo61ZX+9deMlLyskpCMsUV53FwVeK1PAOY7me02rKkg6Mp0I4Oo4yjGjcmxyMvAg4kX07mUNZ0I3PvjH84ygoVUoAtFI6EVptgMfwyc5h924j+nOQ+jvvMoAWavKAi2oq/aASdSM5me13ttpSuo64+f+C/tiCT5TycbH+wvf//Z",
    capital:"Cusco", codigo:"08",
    simbolo:"🏔️", landmark:"Machu Picchu",
    desc:"Capital histórica del imperio inca y puerta de entrada a Machu Picchu, el Valle Sagrado y decenas de caminos de altura.",
    actividades:[
      {ico:"🏔️", txt:"Llegar a Machu Picchu por tren o Camino Inca"},
      {ico:"🌈", txt:"Subir a la Montaña de 7 Colores (Vinicunca)"},
      {ico:"🧂", txt:"Recorrer las salineras de Maras y Moray"},
      {ico:"🏘️", txt:"Explorar Ollantaytambo y el Valle Sagrado"}
    ],
    imperdible:"<b>Machu Picchu</b> al amanecer, una de las 7 maravillas del mundo.",
    plato:"Chiri uchu", tags:["Machu Picchu","Trekking","Historia"],
    epoca:"Mayo – Setiembre", altitud:"3,399 msnm",
    intro:"Ombligo del mundo para los incas, Cusco mezcla templos de piedra, calles coloniales y montañas de otro planeta. Cada camino aquí lleva a una maravilla.",
    fotos:[
      {src:"img/cusco/1.webp", width:1600, alt:"Machu Picchu entre montañas"},
      {src:"img/cusco/2.webp", width:1600, alt:"Montaña de 7 Colores (Vinicunca)"},
      {src:"img/cusco/3.webp", width:1200, alt:"Callejón del barrio de San Blas", pos:"50% 40%"},
      {src:"img/cusco/5.webp", width:1600, alt:"Machu Picchu desde una ventana inca"},
      {src:"img/cusco/4.webp", width:1600, alt:"Niños andinos con una llama"}
    ],
    lugares:[
      {badge:"01 · Maravilla del mundo", kicker:"Ciudad perdida de los incas", nombre:"Machu Picchu", img:"img/cusco/1.webp",
       desc:"La ciudadela inca del siglo XV, colgada entre picos y neblina a 2,430 m. Se llega en tren hasta Aguas Calientes o caminando el Camino Inca. Ir al amanecer, cuando las nubes se abren sobre las terrazas, es inolvidable.",
       meta:["🚆 Tren o Camino Inca","🎟️ Entrada con horario","🌄 Ideal al amanecer"]},
      {badge:"02 · Vinicunca", kicker:"A más de 5,000 m", nombre:"Montaña de 7 Colores", img:"img/cusco/2.webp",
       desc:"Franjas minerales de rojo, turquesa y dorado pintan esta montaña de la cordillera del Vilcanota. La caminata es corta pero exigente por la altura: conviene aclimatarse antes en Cusco.",
       meta:["🥾 Caminata de altura","🧥 Frío intenso","📷 Paisaje único"]},
      {badge:"03 · San Blas", kicker:"El barrio de los artesanos", nombre:"San Blas y el casco histórico", img:"img/cusco/3.webp", pos:"50% 45%",
       desc:"Callejuelas empedradas, casonas coloniales sobre muros incas y talleres de arte. Desde sus miradores se ve toda la ciudad con sus tejados rojos; a pasos están la Plaza de Armas, la Catedral y el Qorikancha.",
       meta:["🎨 Arte y talleres","⛪ Iglesias coloniales","📸 Miradores"]},
      {badge:"04 · Valle Sagrado", kicker:"Cultura viva", nombre:"Valle Sagrado de los Incas", img:"img/cusco/4.webp",
       desc:"Pisac, Ollantaytambo y Chinchero guardan la tradición textil y agrícola que sigue viva en las comunidades quechuas. Un valle de terrazas incas, llamas y trajes de colores camino a Machu Picchu.",
       meta:["🧶 Textiles","🏘️ Pueblos incas","🦙 Comunidades"]}
    ],
    spots:[
      {ico:"🪨", nombre:"Sacsayhuamán", desc:"Fortaleza ceremonial de enormes piedras encajadas, sobre la ciudad."},
      {ico:"🏛️", nombre:"Qorikancha", desc:"El templo del Sol inca, base del convento de Santo Domingo."},
      {ico:"🧂", nombre:"Maras y Moray", desc:"Salineras milenarias y los andenes circulares de laboratorio agrícola inca."},
      {ico:"💦", nombre:"Laguna Humantay", desc:"Laguna turquesa al pie de un glaciar; caminata de medio día."}
    ]
  },
  "HUANCAVELICA": {
    capital:"Huancavelica", codigo:"09",
    simbolo:"🚂", landmark:"Tren Macho",
    desc:"Región andina poco transitada, con aguas termales, minas coloniales y paisajes de puna casi sin turistas.",
    actividades:[
      {ico:"♨️", txt:"Bañarse en las termas de San Cristóbal"},
      {ico:"🚂", txt:"Viajar en el histórico Tren Macho desde Huancayo"},
      {ico:"🏞️", txt:"Contemplar la laguna de Choclococha en la puna"},
      {ico:"🧶", txt:"Comprar tejidos de lana de las comunidades"}
    ],
    imperdible:"El <b>Tren Macho</b>, ferrocarril andino de más de un siglo.",
    plato:"Patachi", tags:["Andes","Termas","Poco turístico"],
    epoca:"Abril – Octubre", altitud:"3,676 msnm"
  },
  "HUANUCO": {
    capital:"Huánuco", codigo:"10",
    simbolo:"🤲", landmark:"Templo de Kotosh",
    desc:"Clima templado todo el año y cercanía al templo de Kotosh, uno de los santuarios más antiguos de América.",
    actividades:[
      {ico:"🤲", txt:"Visitar el Templo de las Manos Cruzadas (Kotosh)"},
      {ico:"🌤️", txt:"Disfrutar del clima primaveral todo el año"},
      {ico:"🏞️", txt:"Explorar la bella durmiente y sus miradores"},
      {ico:"🎉", txt:"Ver la danza de los Negritos en enero"}
    ],
    imperdible:"El <b>Templo de las Manos Cruzadas</b>, de más de 4,000 años.",
    plato:"Pachamanca", tags:["Arqueología","Clima templado"],
    epoca:"Todo el año", altitud:"1,894 msnm"
  },
  "ICA": {
    capital:"Ica", codigo:"11",
    simbolo:"🛩️", landmark:"Líneas de Nazca (Colibrí)",
    desc:"Desierto costero con el oasis de Huacachina, dunas para sandboarding, bodegas de pisco y las líneas de Nazca.",
    actividades:[
      {ico:"🛩️", txt:"Sobrevolar las Líneas de Nazca y el Colibrí"},
      {ico:"🏄", txt:"Sandboarding y buggies en las dunas de Huacachina"},
      {ico:"🍇", txt:"Catar pisco en bodegas tradicionales"},
      {ico:"🐧", txt:"Navegar a las Islas Ballestas en Paracas"}
    ],
    imperdible:"El <b>Colibrí</b> de las Líneas de Nazca y el oasis de <b>Huacachina</b>.",
    plato:"Carapulcra con sopa seca", tags:["Desierto","Pisco","Aventura"],
    epoca:"Todo el año", altitud:"406 msnm"
  },
  "JUNIN": {
    capital:"Huancayo", codigo:"12",
    simbolo:"🏞️", landmark:"Valle del Mantaro",
    desc:"El Valle del Mantaro combina ferias artesanales, el Tren Macho y paisajes de puna junto al lago Junín.",
    actividades:[
      {ico:"🛍️", txt:"Recorrer la feria dominical de Huancayo"},
      {ico:"🪨", txt:"Visitar el Torre Torre, formaciones de arcilla"},
      {ico:"🦆", txt:"Avistar aves en la Reserva Nacional de Junín"},
      {ico:"🥃", txt:"Probar la trucha y el ponche en el valle"}
    ],
    imperdible:"El <b>Valle del Mantaro</b> y su convento de Ocopa.",
    plato:"Papa a la huancaína", tags:["Valle andino","Ferias","Naturaleza"],
    epoca:"Abril – Octubre", altitud:"3,259 msnm"
  },
  "LA LIBERTAD": {
    blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAQTGF2YzYyLjI4LjEwMgD/2wBDAAgMDA4MDhAQEBAQEBMSExQUFBMTExMUFBQVFRUZGRkVFRUUFBUVGBgZGRscGxoaGRocHB4eHiQkIiIqKiszMz7/xAB1AAEBAQEBAQAAAAAAAAAAAAAGBQcDAgQBAQEAAAAAAAAAAAAAAAAAAAUEEAACAQIEBQQDAQEAAAAAAAABAgMRABIEIXFBgTEyBSLBYROxYlEUQhEAAQMDBAMBAQAAAAAAAAAAAQIDACERMVFxEkETBAVh8f/AABEIABgAIAMBIgACEQADEQD/2gAMAwEAAhEDEQA/AD58aZMLKaClalamvItp83RiyBjMaYkxSOSRoRhUVZulRwHOy656D7vQrCOqgGnqpUYtj3UthDmIpvIkYkEceXwKeGuEnnw5XC/7KkVHLBUaadbxVpkHQ1tPUnjoFDNiV366qAK/r0W5qQVRyQqmupGpPxrp7XpC/wCUw1MkZ31sjm1yTKQJkUHWgI99bHa+mVqI4LAvoSZT4ArGR+WExmKSm9bu5PNKuYxSNQNUE72ZTuG9/SvW23Eg32k7KiLTWfvRcuSs6ua9tSrUH84GzE+cgcENiU/OL8+q+MfYNva4OY/6slhsXVU0Of5EHFkDqs//2Q==",
    capital:"Trujillo", codigo:"13",
    simbolo:"🏛️", landmark:"Ciudadela de Chan Chan",
    desc:"Hogar de Chan Chan, la mayor ciudadela de adobe de América, y de las olas de Huanchaco con sus caballitos de totora.",
    actividades:[
      {ico:"🏛️", txt:"Recorrer la ciudadela de barro de Chan Chan"},
      {ico:"🌊", txt:"Aprender a surfear en Huanchaco"},
      {ico:"🎨", txt:"Ver los relieves de la Huaca de la Luna"},
      {ico:"💃", txt:"Disfrutar la Marinera, baile nacional"}
    ],
    imperdible:"<b>Chan Chan</b>, la mayor ciudad de adobe del mundo precolombino.",
    plato:"Cabrito con frejoles", tags:["Arqueología","Surf","Cultura"],
    epoca:"Setiembre – Diciembre", altitud:"34 msnm",
    intro:"Cuna de grandes culturas preincas y de la marinera, Trujillo combina ciudadelas de barro, playas de surfistas y el sol eterno de la 'Ciudad de la Primavera'.",
    fotos:[
      {src:"img/la-libertad/1.webp", width:1080, alt:"Atardecer en Huanchaco con caballitos de totora"},
      {src:"img/la-libertad/2.webp", width:678, alt:"Caballitos de totora en la playa de Huanchaco"}
    ],
    lugares:[
      {badge:"01 · Huanchaco", kicker:"Surf y tradición", nombre:"Playa de Huanchaco", img:"img/la-libertad/1.webp",
       desc:"Balneario de pescadores y surfistas donde aún se navega en 'caballitos de totora', embarcaciones de junco con más de 3,000 años de historia. Su muelle y sus atardeceres dorados son una postal del norte peruano.",
       meta:["🏄 Surf","🌅 Atardeceres","🎣 Pesca artesanal"]},
      {badge:"02 · Patrimonio vivo", kicker:"Herencia milenaria", nombre:"Caballitos de totora", img:"img/la-libertad/2.webp",
       desc:"Los pescadores tejen y montan estas balsas de junco igual que hace milenios. Puedes verlos salir al mar al amanecer o subir a una para navegar la orilla: un oficio declarado Patrimonio Cultural de la Nación.",
       meta:["🛶 Paseo en balsa","📜 Patrimonio","🐟 Oficio ancestral"]}
    ],
    spots:[
      {ico:"🏛️", nombre:"Chan Chan", desc:"La mayor ciudadela de adobe de América, capital del reino chimú (UNESCO)."},
      {ico:"🎨", nombre:"Huacas del Sol y de la Luna", desc:"Templos moche con murales y relieves policromados milenarios."},
      {ico:"🏘️", nombre:"Centro histórico de Trujillo", desc:"Casonas coloniales de colores y balcones alrededor de su Plaza de Armas."},
      {ico:"💃", nombre:"La Marinera", desc:"El elegante baile nacional, con su gran concurso cada enero en Trujillo."}
    ]
  },
  "LAMBAYEQUE": {
    capital:"Chiclayo", codigo:"14",
    simbolo:"👑", landmark:"Tumi de Oro / Señor de Sipán",
    desc:"El Museo Tumbas Reales de Sipán resguarda uno de los mayores hallazgos arqueológicos del continente, con el legendario Tumi de Oro.",
    actividades:[
      {ico:"👑", txt:"Conocer el tesoro del Señor de Sipán y el Tumi de Oro"},
      {ico:"🏺", txt:"Visitar las pirámides de Túcume"},
      {ico:"🌿", txt:"Recorrer el mercado de brujos de Chiclayo"},
      {ico:"🏖️", txt:"Descansar en las playas de Pimentel"}
    ],
    imperdible:"El <b>Tumi de Oro</b> y el <b>Señor de Sipán</b>, el 'Tutankamón de América'.",
    plato:"Arroz con pato", tags:["Museos","Arqueología","Playa"],
    epoca:"Todo el año", altitud:"29 msnm"
  },
  "LIMA": {
    blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAEGgQrAAD/4gJASUNDX1BST0ZJTEUAAQEAAAIwQURCRQIQAABtbnRyUkdCIFhZWiAHzwAGAAMAAAAAAABhY3NwQVBQTAAAAABub25lAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLUFEQkUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApjcHJ0AAAA/AAAADJkZXNjAAABMAAAAGt3dHB0AAABnAAAABRia3B0AAABsAAAABRyVFJDAAABxAAAAA5nVFJDAAAB1AAAAA5iVFJDAAAB5AAAAA5yWFlaAAAB9AAAABRnWFlaAAACCAAAABRiWFlaAAACHAAAABR0ZXh0AAAAAENvcHlyaWdodCAxOTk5IEFkb2JlIFN5c3RlbXMgSW5jb3Jwb3JhdGVkAAAAZGVzYwAAAAAAAAARQWRvYmUgUkdCICgxOTk4KQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWFlaIAAAAAAAAPNRAAEAAAABFsxYWVogAAAAAAAAAAAAAAAAAAAAAGN1cnYAAAAAAAAAAQIzAABjdXJ2AAAAAAAAAAECMwAAY3VydgAAAAAAAAABAjMAAFhZWiAAAAAAAACcGAAAT6UAAAT8WFlaIAAAAAAAADSNAACgLAAAD5VYWVogAAAAAAAAJjEAABAvAAC+nP/+ABBMYXZjNjIuMjguMTAyAP/bAEMACAwMDgwOEBAQEBAQExITFBQUExMTExQUFBUVFRkZGRUVFRQUFRUYGBkZGxwbGhoZGhwcHh4eJCQiIioqKzMzPv/EAHgAAAIDAQEAAAAAAAAAAAAAAAQGAgUHAQMBAQEBAQAAAAAAAAAAAAAAAAQFAgMQAAEDAwMCBQUBAQAAAAAAAAECAxEAIRJBMQRxE4GxMmEiBTRiwSMzUREAAgEDAwUBAAAAAAAAAAAAAgEAIQMRFJExsaEE0RJB/8AAEQgAFQAgAwEiAAIRAAMRAP/aAAwDAQACEQMRAD8Abk8WpnjUutu8lQ/0V0JI8kmj3FchoCVgrIMJyVv7ylNPK8x5Ie8niAnQUT29z1dQ01AWtKZ2yIE1RuP8W/yn+nb21iZ6RrVI+66FZcjFw39U76W0x3EUD3Giy3CcnFxivYOGLmEk/Eam3/K4axxGnFTTQoMtB1KRJyj8SNb7+NKz31VSjj29clSokqN7m3vTI79q31c8qzp31monk3CXzhxVtIRpSc5LocUVFAOlydlXtER+6CL5SIxSNLWtU3NfDyoBe3jRBJk8tvfHSb/Z/9k=",
    capital:"Lima", codigo:"15",
    simbolo:"🍽️", landmark:"Centro histórico y gastronomía",
    desc:"Capital gastronómica de Sudamérica, con un centro histórico Patrimonio de la Humanidad y un litoral con acantilados.",
    actividades:[
      {ico:"🍽️", txt:"Comer en restaurantes top del mundo (Miraflores)"},
      {ico:"🏛️", txt:"Pasear por el centro colonial y sus balcones"},
      {ico:"🪂", txt:"Volar en parapente sobre el malecón de Miraflores"},
      {ico:"🌃", txt:"Recorrer Barranco, el barrio bohemio y sus murales"}
    ],
    imperdible:"La <b>escena gastronómica</b> limeña, mejor de Latinoamérica.",
    plato:"Ceviche y lomo saltado", tags:["Gastronomía","Historia","Ciudad"],
    epoca:"Diciembre – Abril", altitud:"154 msnm",
    intro:"Entre neblina, huacas milenarias y la mejor cocina del continente, Lima mezcla como ninguna otra el pasado colonial con un presente frente al mar.",
    fotos:[
      {src:"img/lima/1.webp", width:1600, alt:"Costa Verde y Malecón de Miraflores"},
      {src:"img/lima/3.webp", width:1600, alt:"Palacio de Gobierno, Centro Histórico"},
      {src:"img/lima/4.webp", width:1193, alt:"Faro de la Marina, Miraflores"},
      {src:"img/lima/2.webp", width:1600, alt:"Acantilados de Miraflores al atardecer", pos:"50% 35%"}
    ],
    lugares:[
      {badge:"01 · Miraflores", kicker:"Frente al Pacífico", nombre:"Malecón de Miraflores y la Costa Verde", img:"img/lima/1.webp",
       desc:"Kilómetros de parques sobre acantilados con vista al mar. Aquí despegan los parapentes, corren los surfistas y se camina hasta el Parque del Amor y el centro comercial Larcomar, colgado sobre la playa.",
       meta:["🕐 Todo el día","🎟️ Acceso libre","🪂 Parapente"]},
      {badge:"02 · Cercado", kicker:"Patrimonio de la Humanidad", nombre:"Centro Histórico de Lima", img:"img/lima/3.webp",
       desc:"La Plaza Mayor, el Palacio de Gobierno, la Catedral y los balcones coloniales de madera cuentan la historia de la ciudad fundada en 1535. Imperdible el cambio de guardia y las catacumbas del Convento de San Francisco.",
       meta:["🕐 9:00 – 17:00","⛪ Iglesias coloniales","🏛️ UNESCO"]},
      {badge:"03 · Malecón", kicker:"Postal limeña", nombre:"Faro de la Marina", img:"img/lima/4.webp",
       desc:"Rodeado de palmeras y jardines, este faro de 1900 es uno de los rincones más fotografiados del malecón. Al atardecer, el cielo sobre el Pacífico se tiñe de naranja y la ciudad baja el ritmo.",
       meta:["🌅 Ideal al atardecer","🎟️ Gratis","📷 Mirador"]},
      {badge:"04 · Costa Verde", kicker:"Skyline sobre el mar", nombre:"Miradores de la Costa Verde", img:"img/lima/2.webp", pos:"50% 40%",
       desc:"La bahía de Lima se extiende bajo los acantilados con la ciudad asomada al borde. Un circuito de miradores conecta Miraflores con Barranco y Chorrillos, perfecto para pedalear o correr junto al océano.",
       meta:["🚴 Ciclovía","🌊 Playas","🌇 Atardeceres"]}
    ],
    spots:[
      {ico:"🎨", nombre:"Barranco", desc:"El barrio bohemio: murales, el Puente de los Suspiros, bares y galerías."},
      {ico:"🏺", nombre:"Huaca Pucllana", desc:"Pirámide de adobe preinca en plena Miraflores, con recorridos nocturnos."},
      {ico:"⛲", nombre:"Circuito Mágico del Agua", desc:"El mayor complejo de fuentes ornamentales del mundo, con luces y música."},
      {ico:"🏛️", nombre:"Museo Larco", desc:"Arte precolombino en una casona del s. XVIII rodeada de jardines."}
    ]
  },
  "LORETO": {
    blur:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYYXBwbAQAAABtbnRyUkdCIFhZWiAH5gABAAEAAAAAAABhY3NwQVBQTAAAAABBUFBMAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWFwcGwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApkZXNjAAAA/AAAADBjcHJ0AAABLAAAAFB3dHB0AAABfAAAABRyWFlaAAABkAAAABRnWFlaAAABpAAAABRiWFlaAAABuAAAABRyVFJDAAABzAAAACBjaGFkAAAB7AAAACxiVFJDAAABzAAAACBnVFJDAAABzAAAACBtbHVjAAAAAAAAAAEAAAAMZW5VUwAAABQAAAAcAEQAaQBzAHAAbABhAHkAIABQADNtbHVjAAAAAAAAAAEAAAAMZW5VUwAAADQAAAAcAEMAbwBwAHkAcgBpAGcAaAB0ACAAQQBwAHAAbABlACAASQBuAGMALgAsACAAMgAwADIAMlhZWiAAAAAAAAD21QABAAAAANMsWFlaIAAAAAAAAIPfAAA9v////7tYWVogAAAAAAAASr8AALE3AAAKuVhZWiAAAAAAAAAoOAAAEQsAAMi5cGFyYQAAAAAAAwAAAAJmZgAA8qcAAA1ZAAAT0AAACltzZjMyAAAAAAABDEIAAAXe///zJgAAB5MAAP2Q///7ov///aMAAAPcAADAbv/+ABBMYXZjNjIuMjguMTAyAP/bAEMACAwMDgwOEBAQEBAQExITFBQUExMTExQUFBUVFRkZGRUVFRQUFRUYGBkZGxwbGhoZGhwcHh4eJCQiIioqKzMzPv/EAH0AAAMBAQEAAAAAAAAAAAAAAAUDAgEEAAEAAgMBAAAAAAAAAAAAAAAAAwECAAUEEAACAQMCAwUFCQEAAAAAAAABAhESAyEAMUEiBDNRcgUjcWGxkYOys0IUczQ10RMyEQABBAIDAQEAAAAAAAAAAAABABECAyFBEjFhMlH/wAARCAAYACADASIAAhEAAxEA/9oADAMBAAIRAxEAPwAKFH+akBrHPAqLEBf+qozgn3wdaG9Fy5ANZGRRS0TSFLT/AHrTcNy6AbwKMwqUtKlY2kid/nq3CiCFUBiwHKIgcTPHELxjWLU/KIHbg41n1BQf8uKCyViWBbgpYA4ORIg/PTSpCAAlisEAgFWqmBnAjfTUYvUEJBDmSM4pHDvnSZDq7VGVwUKmJHfGZnY6NcSbJNqSkNK+S1U1xhUpHeJJg0qN/brjs3Rf6g9P6iF2apwMKYnXvMe0+ovwGo6L+Qf9R/uxp1kxrnMfTd/mHwkid0CxZfkPL2eCQ5xMkDc8Z9utsU3FuXFC0iWdVbaROF3n3/i12dd+3TxN8NCPKuy6vwp9nXM5NfLZKq//2Q==",
    capital:"Iquitos", codigo:"16",
    simbolo:"🛶", landmark:"Río Amazonas",
    desc:"La mayor puerta a la Amazonía peruana; solo se llega por río o aire, con lodges selváticos y navegaciones por el Amazonas.",
    actividades:[
      {ico:"🛶", txt:"Navegar la Reserva Nacional Pacaya-Samiria"},
      {ico:"🐬", txt:"Buscar delfines rosados en el río Amazonas"},
      {ico:"🌳", txt:"Dormir en un lodge en plena selva"},
      {ico:"🏚️", txt:"Recorrer el barrio flotante de Belén en Iquitos"}
    ],
    imperdible:"Un crucero por el <b>río Amazonas</b> y sus lagos escondidos.",
    plato:"Juane y tacacho", tags:["Selva","Río Amazonas","Fauna"],
    epoca:"Junio – Octubre (vaciante)", altitud:"106 msnm",
    intro:"Sin carreteras que la conecten, la mayor región del Perú se recorre por río. Iquitos es la puerta a una Amazonía de delfines rosados, lodges y pueblos flotantes.",
    fotos:[
      {src:"img/loreto/1.webp", width:1600, alt:"Río serpenteando en la selva amazónica"},
      {src:"img/loreto/3.webp", width:1079, alt:"Lodge de cabañas con techo de palma en la selva"},
      {src:"img/loreto/2.webp", width:1600, alt:"Dosel de la selva amazónica"}
    ],
    lugares:[
      {badge:"01 · Río Amazonas", kicker:"El río más caudaloso", nombre:"Navegación por el Amazonas", img:"img/loreto/1.webp",
       desc:"Desde Iquitos zarpan cruceros y botes hacia la inmensidad del río más grande del mundo. Entre meandros aparecen delfines rosados, aves y comunidades ribereñas que viven al ritmo de la creciente y la vaciante.",
       meta:["🛶 Cruceros y botes","🐬 Delfines rosados","🌅 Amaneceres en el río"]},
      {badge:"02 · Lodges", kicker:"Dormir en la selva", nombre:"Lodges amazónicos", img:"img/loreto/3.webp",
       desc:"Cabañas de madera y techo de palma en medio de la jungla, con caminatas nocturnas, avistamiento de fauna y visitas a comunidades. La mejor forma de sumergirse en la Amazonía lejos de la ciudad.",
       meta:["🌳 En plena selva","🦜 Fauna","🌙 Caminatas nocturnas"]},
      {badge:"03 · Pacaya-Samiria", kicker:"Selva inundable", nombre:"Reserva Nacional Pacaya-Samiria", img:"img/loreto/2.webp",
       desc:"Más de 2 millones de hectáreas de 'selva de agua': lagos, cochas y bosques inundables llenos de nutrias gigantes, manatíes, caimanes y cientos de aves. Se explora en canoa entre paisajes de espejo.",
       meta:["🚣 En canoa","🐆 Biodiversidad","💧 Selva inundable"]}
    ],
    spots:[
      {ico:"🏚️", nombre:"Belén", desc:"El barrio flotante de Iquitos y su bullicioso mercado sobre el río."},
      {ico:"🏛️", nombre:"Casa de Fierro", desc:"Edificio de hierro de la era del caucho, atribuido al taller de Eiffel."},
      {ico:"🦋", nombre:"Quistococha", desc:"Laguna y parque zoológico con fauna amazónica a las afueras de Iquitos."},
      {ico:"🐒", nombre:"Isla de los Monos", desc:"Refugio de primates rescatados a orillas del Amazonas."}
    ]
  },
  "MADRE DE DIOS": {
    capital:"Puerto Maldonado", codigo:"17",
    simbolo:"🦜", landmark:"Collpa de Tambopata",
    desc:"'Capital de la biodiversidad', con reservas como Tambopata y el Parque Nacional Manu para avistar fauna amazónica.",
    actividades:[
      {ico:"🦜", txt:"Ver guacamayos en la collpa de Tambopata"},
      {ico:"🐊", txt:"Navegar el lago Sandoval al atardecer"},
      {ico:"🦋", txt:"Adentrarse en el Parque Nacional del Manu"},
      {ico:"🌲", txt:"Caminar por doseles en pasarelas elevadas"}
    ],
    imperdible:"La <b>collpa de guacamayos</b>, un estallido de color al alba.",
    plato:"Patarashca", tags:["Biodiversidad","Reservas","Fauna"],
    epoca:"Mayo – Octubre", altitud:"183 msnm"
  },
  "MOQUEGUA": {
    capital:"Moquegua", codigo:"18",
    simbolo:"🍷", landmark:"Ruta del pisco",
    desc:"Valles desérticos productores de pisco y vino, con el volcán Ubinas y rutas poco concurridas hacia la costa sur.",
    actividades:[
      {ico:"🍷", txt:"Catar vinos y piscos en bodegas centenarias"},
      {ico:"🏜️", txt:"Visitar los geoglifos de Chen Chen"},
      {ico:"⛪", txt:"Pasear por la plaza y su iglesia de Santo Domingo"},
      {ico:"🏖️", txt:"Escaparse a las playas tranquilas de Ilo"}
    ],
    imperdible:"La <b>ruta del pisco</b> por bodegas del valle de Moquegua.",
    plato:"Cacharrada moqueguana", tags:["Vino y pisco","Desierto","Playa"],
    epoca:"Todo el año", altitud:"1,412 msnm"
  },
  "PASCO": {
    capital:"Cerro de Pasco", codigo:"19",
    simbolo:"🪨", landmark:"Bosque de Piedras de Huayllay",
    desc:"Una de las ciudades más altas del mundo, con tradición minera y el sorprendente bosque de piedras de Huayllay.",
    actividades:[
      {ico:"🪨", txt:"Explorar el Santuario Bosque de Piedras de Huayllay"},
      {ico:"♨️", txt:"Relajarse en las termas de Calera"},
      {ico:"🦩", txt:"Avistar aves en el lago Punrun"},
      {ico:"🌿", txt:"Descender a la selva de Oxapampa y Pozuzo"}
    ],
    imperdible:"El <b>Bosque de Piedras de Huayllay</b>, esculturas naturales.",
    plato:"Charquicán", tags:["Naturaleza","Altura extrema","Aventura"],
    epoca:"Mayo – Setiembre", altitud:"4,338 msnm"
  },
  "PIURA": {
    capital:"Piura", codigo:"20",
    simbolo:"🏄", landmark:"Playas de Máncora",
    desc:"Playas cálidas todo el año como Máncora, pesca artesanal en Cabo Blanco y un sol seco que contrasta con el resto de la costa.",
    actividades:[
      {ico:"🏄", txt:"Surfear las olas de Máncora y Órganos"},
      {ico:"🐢", txt:"Nadar con tortugas en El Ñuro"},
      {ico:"🐋", txt:"Avistar ballenas jorobadas (jul–oct)"},
      {ico:"🍹", txt:"Ver el atardecer con un ceviche frente al mar"}
    ],
    imperdible:"Las playas de <b>Máncora</b>, sol y surf durante todo el año.",
    plato:"Seco de chabelo", tags:["Playas","Surf","Sol todo el año"],
    epoca:"Diciembre – Abril", altitud:"29 msnm"
  },
  "PUNO": {
    capital:"Puno", codigo:"21",
    simbolo:"🛶", landmark:"Islas de los Uros (Titicaca)",
    desc:"A orillas del Titicaca, el lago navegable más alto del mundo, con las islas flotantes de los Uros y grandes fiestas.",
    actividades:[
      {ico:"🛶", txt:"Visitar las islas flotantes de los Uros"},
      {ico:"🧵", txt:"Dormir con familias en la isla Taquile"},
      {ico:"🎭", txt:"Vivir la fiesta de la Virgen de la Candelaria"},
      {ico:"⚰️", txt:"Conocer las chullpas funerarias de Sillustani"}
    ],
    imperdible:"Las <b>islas de los Uros</b>, hechas de totora sobre el Titicaca.",
    plato:"Trucha del Titicaca", tags:["Lago Titicaca","Fiestas","Cultura"],
    epoca:"Mayo – Setiembre", altitud:"3,827 msnm"
  },
  "SAN MARTIN": {
    capital:"Moyobamba", codigo:"22",
    simbolo:"💧", landmark:"Catarata de Ahuashiyacu",
    desc:"Ceja de selva de clima cálido y orquídeas silvestres, con cataratas accesibles y aguas termales.",
    actividades:[
      {ico:"💧", txt:"Bañarse en la catarata de Ahuashiyacu"},
      {ico:"🌸", txt:"Recorrer los orquidearios de Moyobamba"},
      {ico:"☕", txt:"Visitar fincas de café y cacao en Lamas"},
      {ico:"🛶", txt:"Pasear en la laguna Azul de Sauce"}
    ],
    imperdible:"La <b>catarata de Ahuashiyacu</b> entre selva y neblina.",
    plato:"Juane de gallina", tags:["Ceja de selva","Cataratas","Café"],
    epoca:"Junio – Setiembre", altitud:"860 msnm"
  },
  "TACNA": {
    capital:"Tacna", codigo:"23",
    simbolo:"🚂", landmark:"Campo de la Alianza",
    desc:"Ciudad heroica cercana a la frontera con Chile, con termas de Calientes y una identidad marcada por la historia.",
    actividades:[
      {ico:"🚂", txt:"Recorrer el museo ferroviario y el Alto de la Alianza"},
      {ico:"♨️", txt:"Descansar en las termas de Calientes"},
      {ico:"🍇", txt:"Catar vinos en el valle de Locumba"},
      {ico:"⛲", txt:"Pasear por el Paseo Cívico y la catedral"}
    ],
    imperdible:"El <b>Campo de la Alianza</b>, memoria de la Guerra del Pacífico.",
    plato:"Picante a la tacneña", tags:["Frontera","Historia","Termas"],
    epoca:"Todo el año", altitud:"562 msnm"
  },
  "TUMBES": {
    capital:"Tumbes", codigo:"24",
    simbolo:"🦀", landmark:"Manglares de Tumbes",
    desc:"El extremo norte del Perú, con manglares únicos en el país, playas de aguas cálidas y naturaleza tropical.",
    actividades:[
      {ico:"🦀", txt:"Navegar los manglares de Puerto Pizarro"},
      {ico:"🐊", txt:"Ver cocodrilos en el santuario nacional"},
      {ico:"🏖️", txt:"Relajarse en las playas de Zorritos y Punta Sal"},
      {ico:"🐒", txt:"Explorar el bosque seco y sus monos"}
    ],
    imperdible:"Los <b>manglares de Tumbes</b>, ecosistema único en el país.",
    plato:"Conchas negras", tags:["Manglares","Playas","Naturaleza"],
    epoca:"Todo el año", altitud:"6 msnm"
  },
  "UCAYALI": {
    capital:"Pucallpa", codigo:"25",
    simbolo:"🎨", landmark:"Laguna Yarinacocha / arte shipibo",
    desc:"Selva baja atravesada por el río Ucayali, con comunidades shipibo-conibo reconocidas por su arte textil y cerámico.",
    actividades:[
      {ico:"🎨", txt:"Conocer el arte kené de los shipibo-conibo"},
      {ico:"🛶", txt:"Navegar la laguna de Yarinacocha"},
      {ico:"🌳", txt:"Visitar el jardín botánico y comunidades nativas"},
      {ico:"🐟", txt:"Probar pescados amazónicos frescos del río"}
    ],
    imperdible:"La laguna de <b>Yarinacocha</b> y el arte shipibo.",
    plato:"Tacacho con cecina", tags:["Selva baja","Arte indígena","Río"],
    epoca:"Mayo – Octubre", altitud:"154 msnm"
  }
};
