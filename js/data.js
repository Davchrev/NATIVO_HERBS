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
    epoca:"Mayo – Setiembre", altitud:"3,399 msnm"
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
    epoca:"Setiembre – Diciembre", altitud:"34 msnm"
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
    epoca:"Diciembre – Abril", altitud:"154 msnm"
  },
  "LORETO": {
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
    epoca:"Junio – Octubre (vaciante)", altitud:"106 msnm"
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
