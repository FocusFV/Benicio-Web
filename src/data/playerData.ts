export interface PlayAction {
  id: number;
  timecode: string;
  seconds: number;
  category: 'distribucion' | 'cobertura' | 'aereo' | 'anticipo';
  title: string;
  description: string;
  tag: string;
}

export interface ClubTrajectory {
  club: string;
  period: string;
  role: string;
  location: string;
  description: string;
  badgeText: string;
  yearsCount: string;
}

export const PLAYER_DATA = {
  personal: {
    fullName: "Benicio Ocaña Zahler",
    shortName: "Benicio Ocaña",
    initials: "BOZ",
    birthDate: "20/02/2008",
    age: 18,
    nationality: "Argentina",
    originCity: "Rosario, Santa Fe",
    height: "1.88 m",
    weight: "88 kg",
    primaryPosition: "Marcador Central",
    secondaryPosition: "Zaguero Izquierdo / Derecho",
    preferredFoot: "Zurda (Ambidiestro)",
    currentClub: "A.D.I.U.R.",
    currentClubFullName: "Agrupación Deportiva Infantil Unión Rosario",
    jerseyNumber: "6",
  },
  
  metrics: [
    {
      label: "Velocidad Punta",
      value: "33.0",
      unit: "km/h",
      subtitle: "Registro GPS máximo",
      highlight: true
    },
    {
      label: "Distancia Promedio",
      value: "8,879",
      unit: "m",
      subtitle: "Recorrido por encuentro",
      highlight: false
    },
    {
      label: "Titularidad",
      value: "96.3",
      unit: "%",
      subtitle: "12 partidos disputados",
      highlight: false
    },
    {
      label: "Tiempo de Juego",
      value: "1,040",
      unit: "min",
      subtitle: "Continuidad competitiva",
      highlight: false
    },
    {
      label: "Sprints Promedio",
      value: "23",
      unit: "/partido",
      subtitle: "Aceleraciones de alta intensidad",
      highlight: false
    },
    {
      label: "Disciplina Defensiva",
      value: "1A / 0R",
      unit: "",
      subtitle: "1 amarilla | 0 tarjetas rojas",
      highlight: true
    }
  ],

  attributes: [
    {
      title: "Salida Limpia & Pase Vertical",
      level: 92,
      description: "Capacidad para recibir bajo presión, romper la primera línea contraria con pases filtrados rasos y ejecutar cambios de frente de más de 40 metros con precisión milimétrica."
    },
    {
      title: "Juego Aéreo Dominante (1.88 m)",
      level: 91,
      description: "Impacto constante en duelos aéreos en mitad de cancha y contundencia en ambas áreas, siendo referencia de remate en jugadas de pelota parada ofensiva."
    },
    {
      title: "Velocidad de Repliegue & Coberturas",
      level: 90,
      description: "Pico de velocidad de 33 km/h que permite defender con la línea adelantada, cerrar espacios a espaldas de los laterales y ganar duelos al espacio mano a mano."
    },
    {
      title: "Temporización y Quite al Piso",
      level: 89,
      description: "Lectura defensiva para medir el avance del rival, ganar la posición con el cuerpo (88 kg) sin falta y ejecutar quites al piso limpios con gran timing."
    }
  ],

  // Trayectoria corregida exactamente con el video oficial
  trajectory: [
    {
      club: "Newell's Old Boys",
      period: "2012 — 2020",
      role: "Fútbol Infantil y Juvenil",
      location: "Rosario, Argentina",
      description: "8 temporadas de formación base en una de las canteras más reconocidas del mundo. Fundamentos de control, salida bajo presión y visión de juego.",
      badgeText: "Cantera Formativa",
      yearsCount: "8 años"
    },
    {
      club: "A.D.I.U.R.",
      period: "2020 — 2024",
      role: "Divisiones Formativas / Primera Etapa",
      location: "Rosario, Argentina",
      description: "4 años de desarrollo físico y táctico en la zaga central. Consolidación de perfil zurdo y adaptabilidad a ambos lados de la defensa.",
      badgeText: "Desarrollo",
      yearsCount: "4 años"
    },
    {
      club: "Belgrano de Córdoba",
      period: "2024 — 2025",
      role: "Divisiones Juveniles AFA",
      location: "Córdoba, Argentina",
      description: "1 temporada de alto rigor competitivo en torneos nacionales de AFA. Fricción, ritmo de juego intensivo y experiencia interprovincial.",
      badgeText: "AFA Juvenil (1 Temp.)",
      yearsCount: "1 temporada"
    },
    {
      club: "A.D.I.U.R.",
      period: "2025 — Actualidad",
      role: "Plantel Superior / Zaga Central",
      location: "Rosario, Argentina",
      description: "Retorno a la institución con protagonismo absoluto: 96.3% de titularidad, dorsal #6, 1040 minutos de juego y liderazgo en la zaga.",
      badgeText: "Titular Actual",
      yearsCount: "Actualidad"
    }
  ] as ClubTrajectory[],

  videoActions: [
    {
      id: 1,
      timecode: "00:12",
      seconds: 12,
      category: "distribucion",
      title: "Cambio de Frente Teledirigido",
      description: "Recepción en campo propio como segundo central, conducción de 5 metros y cambio de frente largo y preciso hacia el extremo derecho.",
      tag: "Pase Largo"
    },
    {
      id: 2,
      timecode: "00:30",
      seconds: 30,
      category: "distribucion",
      title: "Salida Limpia Rompiendo Líneas",
      description: "Salida estructurada desde el fondo, traslado con pelota dominada y pase raso vertical entre líneas hacia el volante ofensivo.",
      tag: "Pase Filtrado"
    },
    {
      id: 3,
      timecode: "00:37",
      seconds: 37,
      category: "distribucion",
      title: "Envío Pinchado a la Espalda",
      description: "Apertura por izquierda, cruce de mitad de cancha conduciendo y pase milimétrico pinchado a la espalda de la defensa rival.",
      tag: "Visión de Juego"
    },
    {
      id: 4,
      timecode: "00:54",
      seconds: 54,
      category: "distribucion",
      title: "Pelotazo Frontal Asistidor",
      description: "Control seguro al borde del área propia y lanzamiento frontal milimétrico que deja al delantero en situación de mano a mano.",
      tag: "Transición Ofensiva"
    },
    {
      id: 5,
      timecode: "01:06",
      seconds: 66,
      category: "anticipo",
      title: "Anticipo en Mitad de Cancha",
      description: "Lectura defensiva para anticipar la línea de pase contraria, traslado en diagonal y descarga rápida por banda derecha.",
      tag: "Anticipación"
    },
    {
      id: 6,
      timecode: "01:18",
      seconds: 78,
      category: "aereo",
      title: "Duelo Aéreo Central Ganado",
      description: "Gana un cruce aéreo de cabeza cerca del círculo central orientando el despeje directamente a la posición de un compañero.",
      tag: "Juego Aéreo"
    },
    {
      id: 7,
      timecode: "01:29",
      seconds: 89,
      category: "cobertura",
      title: "Cobertura de Espalda al Lateral",
      description: "Cubre la banda ante el desborde rival en cancha difícil, aguanta con solidez corporal y despeja seguro al lateral.",
      tag: "Cobertura Defensiva"
    },
    {
      id: 8,
      timecode: "01:41",
      seconds: 101,
      category: "cobertura",
      title: "Repliegue y Punteo Oportuno",
      description: "Retroceso rápido temporizando el avance del atacante y corte preciso punteando la pelota justo a tiempo.",
      tag: "Timing Defensivo"
    },
    {
      id: 9,
      timecode: "01:48",
      seconds: 108,
      category: "distribucion",
      title: "Construcción y Pelota en Profundidad",
      description: "Toque corto inicial, descarga hacia adelante y pase largo al espacio para romper la presión alta rival.",
      tag: "Salida de Presión"
    },
    {
      id: 10,
      timecode: "02:10",
      seconds: 130,
      category: "cobertura",
      title: "Quite Limpio al Piso en Transición",
      description: "Cierre sobre el costado frenando la contra rival con un quite limpio al piso enviando la pelota al lateral.",
      tag: "Quite al Piso"
    },
    {
      id: 11,
      timecode: "02:20",
      seconds: 140,
      category: "cobertura",
      title: "Temporización y Despeje al Piso",
      description: "Sostiene el mano a mano contra el atacante sin regalar espacio, se tira al piso a cortar y saca la pelota con limpieza.",
      tag: "Duelo 1v1"
    },
    {
      id: 12,
      timecode: "02:31",
      seconds: 151,
      category: "aereo",
      title: "Anticipo de Cabeza Ofensivo",
      description: "Gana la posición por elevación en tres cuartos de campo, cortando la salida contraria y manteniendo la presión del equipo.",
      tag: "Juego Aéreo"
    },
    {
      id: 13,
      timecode: "02:41",
      seconds: 161,
      category: "distribucion",
      title: "Lanzamiento Cruzado Teledirigido",
      description: "Pase largo teledirigido desde campo propio cruzando la diagonal hacia el extremo de la banda opuesta.",
      tag: "Cambio de Frente"
    },
    {
      id: 14,
      timecode: "02:51",
      seconds: 171,
      category: "anticipo",
      title: "Intercepción y Conexión Rápida",
      description: "Intercepta el pase rival en zona de volantes y resuelve a un solo toque hacia adelante para acelerar el ataque.",
      tag: "Intercepción"
    },
    {
      id: 15,
      timecode: "03:08",
      seconds: 188,
      category: "cobertura",
      title: "Cierre en Velocidad y Uso del Cuerpo",
      description: "Cierre providencial en velocidad mano a mano; impone sus 88 kg ganando la cuerda y sale jugando con serenidad.",
      tag: "Potencia Física"
    },
    {
      id: 16,
      timecode: "03:18",
      seconds: 198,
      category: "cobertura",
      title: "Disputa Férrea en Mitad de Cancha",
      description: "Traba la pelota dividida en el círculo central con firmeza y gana la posesión con convicción.",
      tag: "Duelo Individual"
    },
    {
      id: 17,
      timecode: "03:29",
      seconds: 209,
      category: "cobertura",
      title: "Repliegue y Protección de Área",
      description: "Excelente lectura tras pase en profundidad, achicando el ángulo de tiro y neutralizando el avance atacante.",
      tag: "Cobertura de Área"
    },
    {
      id: 18,
      timecode: "03:50",
      seconds: 230,
      category: "anticipo",
      title: "Presión Alta y Bloqueo de Salida",
      description: "Lectura sobre la salida del arquero/central contrario, cortando la trayectoria de pase en tres cuartos de cancha.",
      tag: "Presión Alta"
    },
    {
      id: 19,
      timecode: "04:01",
      seconds: 241,
      category: "distribucion",
      title: "Amague en Salida y Pase Seguro",
      description: "Frialdad técnica dentro del área: engaña la presión del atacante con un cambio de pie y descarga limpia.",
      tag: "Técnica Individual"
    },
    {
      id: 20,
      timecode: "04:21",
      seconds: 261,
      category: "aereo",
      title: "Salto Imponente en Mediocampo",
      description: "Se suspende en el aire imponiendo su 1.88 m para conectar de cabeza antes de que el rival intente controlar.",
      tag: "Salto y Despeje"
    },
    {
      id: 21,
      timecode: "04:31",
      seconds: 271,
      category: "cobertura",
      title: "Cierre en Banda Izquierda",
      description: "Corte lateral veloz interrumpiendo la aceleración del extremo rival y reiniciando el juego para su equipo.",
      tag: "Velocidad Lateral"
    },
    {
      id: 22,
      timecode: "04:41",
      seconds: 281,
      category: "distribucion",
      title: "Conducción y Ruptura entre Líneas",
      description: "Rompe líneas defensivas conduciendo desde la zaga y clava un pase filtrado frontal para la diagonal del delantero.",
      tag: "Pase Vertical"
    },
    {
      id: 23,
      timecode: "04:56",
      seconds: 296,
      category: "distribucion",
      title: "Orientación del Juego y Pausa",
      description: "Control orientado, cabeza levantada y cambio de ritmo para bascular la jugada hacia la zona desprotegida del rival.",
      tag: "Manejo de Tiempos"
    },
    {
      id: 24,
      timecode: "05:11",
      seconds: 311,
      category: "distribucion",
      title: "Pase Largo a Espaldas de los Centrales",
      description: "Envío aéreo milimétrico a espaldas de la última línea rival para habilitar la carrera del delantero.",
      tag: "Pase Largo"
    },
    {
      id: 25,
      timecode: "05:21",
      seconds: 321,
      category: "cobertura",
      title: "Cierre Raso al Espacio",
      description: "Cobertura al espacio a espaldas del mediocampo cortando el pase en profundidad hacia el lateral.",
      tag: "Corte Raso"
    },
    {
      id: 26,
      timecode: "05:31",
      seconds: 331,
      category: "cobertura",
      title: "Quite Limpio sin Falta",
      description: "Duelo individual ganado en zona de gestación rival con intervención limpia con pierna zurda.",
      tag: "Recuperación Limpia"
    },
    {
      id: 27,
      timecode: "05:44",
      seconds: 344,
      category: "aereo",
      title: "Presencia en Pelota Parada Ofensiva",
      description: "Córner a favor: ataque del espacio en el área rival, ganando por potencia y cabeceando con dirección al arco.",
      tag: "Remate de Cabeza"
    },
    {
      id: 28,
      timecode: "05:53",
      seconds: 353,
      category: "distribucion",
      title: "Pase Filtrado Fuerte entre Líneas",
      description: "Pase tenso por el centro del campo superando dos líneas de presión para poner al equipo en modo de transición rápida.",
      tag: "Pase de Ruptura"
    },
    {
      id: 29,
      timecode: "06:03",
      seconds: 363,
      category: "aereo",
      title: "Salto en el Corazón del Área Chica",
      description: "Elevación imponente en el corazón del área chica ganando a la defensa y al arquero rival en un córner a favor.",
      tag: "Juego Aéreo Ofensivo"
    }
  ] as PlayAction[]
};
