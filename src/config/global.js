export default {
  global: {
    componenteFormativo:
      'Protocolos, políticas y <br> evaluación de la atención y servicio al cliente',
    descripcionCurso:
      'Las actividades diseñadas en este componente formativo permiten identificar y conocer los protocolos, políticas y evaluación de la atención y servicio al cliente. Para su desarrollo y apropiación, se estudiará el manual de funciones y procedimientos, servicio, ciclo del servicio, confidencialidad de la información, PQRSDF, evaluación del servicio, factores claves y trazabilidad del servicio.',
    imagenBannerPrincipal: '',
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Manual de funciones y procedimientos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Servicio',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Ciclo del servicio',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Confidencialidad de la información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'PQRSDF',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Evaluación del servicio',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Factores claves',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Trazabilidad del servicio',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      //{
      //  nombreRuta: 'complementario',
      //  icono: 'far fa-folder-open',
      //  titulo: 'Material complementario',
      //},
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Carrasco Fernández, S. (2019). Atención al cliente en el proceso comercial. Ediciones Paraninfo, SA.',
      link: '',
    },
    {
      referencia:
        "Feldman, L. B., Cunha, I. C. K. O., & D'Innocenzo, M. (2013). La validación de los criterios del proceso de evaluación del servicio de enfermería hospitalario 1. Revista Latino-Americana de Enfermagem, 21, 841-850.",
      link: '',
    },
    {
      referencia:
        'Normas ISO/ FDIS 9000:2000(E). Sistema de gestión de la calidad. fundamentos y vocabulario.',
      link: '',
    },
    {
      referencia:
        'Ochoa Gallo, A. (2018). Métodos para contribuir a la mejora continua del proceso logístico de atención al cliente. Caso empresarial de Yanbal sede Medellín.',
      link: '',
    },
    {
      referencia:
        'Real Academia Española: Diccionario de la lengua española, 23.ª ed., [versión 23.4 en línea]. <https://dle.rae.es> [julio de 2021].',
      link: '',
    },
    {
      referencia:
        'Ruiz-Canela López J. (2004). La gestión por la calidad total en la empresa moderna.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Confidencialidad',
      significado:
        'Acuerdo del cliente con la empresa acerca de cómo se manejará, administrará y difundirá la información privada, ya sea de la compra, datos personales o de identificación, entre otros.',
    },
    {
      termino: 'PQRSDF',
      significado:
        'Herramientas que permiten desarrollar protocolos que ayudan a dar solución de forma ordenada a los inconvenientes que un cliente o persona pueda tener con respecto a los productos o servicios de una empresa e institución.',
    },
    {
      termino: 'Servicio',
      significado:
        'Serie de actividades llevadas a cabo por un proveedor con el propósito de satisfacer una determinada necesidad del cliente, sus características básicas son la intangibilidad, la heterogeneidad, la inseparabilidad y el carácter perecedero.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Procedimientos preestablecidos y autosuficientes que permiten conocer el histórico, la ubicación y la trayectoria de un producto o lote de productos a lo largo de la cadena de suministros en un momento dado, a través de herramientas determinadas.',
    },
  ],
  complementario: [],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Anderson Ferney Archila Calixto',
        cargo: 'Experto Temático',
        centro:
          'Regional Norte de Santander – Centro de la Industria de la Empresa y los Servicios - CIES',
      },
      {
        nombre: 'Leydy Jhuliana Jaramillo Mejia',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro de Gestión Industrial',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Metodóloga para la formación virtual',
        centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Natalia Maldonado Delgado',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Estefani Daniela Gallo Cortés',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Pedro Nel Calao Zabala',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'María Eugenia Mejía López',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
