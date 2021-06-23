export default {
  global: {
    componenteFormativo: 'Activos intangibles',
    descripcionCurso:
      'En el presente componente se analiza el tratamiento contable de los activos intangibles y diferidos, de acuerdo con los criterios establecidos en las Normas Internacionales de Información Financiera; dejando ver la importancia, de como el paso del tiempo, ha establecido procesos,  relaciones y modelos comerciales que han permitido a las empresas, invertir en activos intangibles, sino también en la investigación, innovación, la marca, el diseño organizacional, el conocimiento, entre otros.',
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.png'),
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
        titulo: 'Intangibles y diferidos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Marco normativo',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Importancia de los intangibles dentro de las organizaciones',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Clasificación de activos intangibles',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Reconocimiento y medición de intangibles',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo:
              'Generalidades de intangibles: vida útil, período, método de amortización y valor razonable',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Política contable de intangibles',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Diferidos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Concepto de cargos diferidos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Concepto de gastos pagados por anticipado',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Reconocimiento y medición',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Retiros, enajenaciones y revelación',
            hash: 't_2_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
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
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
      regional: 'Dirección General',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: ['Angy Fernanda Salazar', 'Claudia Briceida Coy Coy'],
        cargo: 'Instructoras',
        centro: 'Centro de Contabilidad',
        regional: 'Regional Distrito Capital',
      },

      {
        nombre: 'Maryuri Agudelo Franco',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología',
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
      {
        nombre: ['Luis Zenen Arévalo Mantilla'],
        cargo: 'Diseño web',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: [
          'Adriana Marcela Suárez Eljure',
          'Adriana Ariza',
          'Gilberto Junior Rodriguez',
          'José Jaime',
          'Luis Tang Pinzón',
          'Nelson Vera ',
        ],
        cargo: 'Producción audiovisual',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo front-end',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: ['Validación de diseño y contenido'],
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: ['Validación y vinculación en plataforma LMS'],
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Blanco, S. (2013). Estándares/normas internacionales de información financiera (IFRS7NIIF). ECOE Ediciones. ',
      link: '',
    },
    {
      referencia:
        'Burgos Alarcón, H. (2007). Normas Internacionales de Contabilidad. Panorama. Universidad Politécnico Grancolombiano, 1(3), 65-70. ',
      link: '',
    },
    {
      referencia:
        'Godoy Ramírez, E. (2014). NIIF Presentación de Estados Financieros, aplicación y desarrollo, ejemplos, ejercicios prácticos, adopción por primera vez. Grupo Editorial Nueva Legislación. IFRS Fundación. ',
      link: '',
    },
    {
      referencia:
        'Ley 1349 (2020, 10 de diciembre). Diario oficial 47.751, Bogotá, D.C., Colombia.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1349_2009.html',
    },
    {
      referencia:
        'SUIN Juriscoop. (2020, 10 de diciembre). Decreto 2784 de diciembre 2012.',
      link: 'http://suin.gov.co/viewDocument.asp?id=1776952',
    },
    {
      referencia: 'CTCP (2020, 10 de diciembre). NIC 16',
      link:
        'https://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-organismos-internacionales/compilacion-marcos-tecnicos-de-informacion-financi/1534369767-2310',
    },
    {
      referencia:
        'NIIF PARA LAS PYMES – JULIO 2009- sección 18 Activos Intangibles Distintos de la Plusvalía.Normas Internacionales de Información Financiera (NIIF) (2008). Guía rápida IFRS 2008.',
      link: 'https://www.pwc.com/cl/es/ifrs/assets/grifrs_2008.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Activo',
      significado:
        'Es la distribución sistemática del importe depreciable del activo intangible durante la vida útil; el activo útil es un recurso controlado por la entidad como resultado de sucesos pasados y del que la entidad espera obtener beneficios económicos futuros. (IFRS, 2008, pág. 3)',
    },
    {
      termino: 'Activo intangible',
      significado:
        'Activo identificable, de carácter no monetario y sin apariencia física. (IFRS, 2013, pág. 1)',
    },
    {
      termino: 'Activo monetario',
      significado:
        'Es dinero en efectivo u otro activo, por el que se va a recibir una cantidad fija de dinero. (IFRS, 2008, pág. 3)',
    },
    {
      termino: 'Costo',
      significado:
        'Importe de efectivo que equivale al pago efectuado o al valor razonable de lo entregado para adquirir ese activo, en el momento de su construcción o adquisición. (IFRS, 2008, pág. 11)',
    },
    {
      termino: 'Gasto',
      significado:
        'Son los decrementos en los beneficios económicos, producidos a lo largo del periodo contable, en forma de salidas o disminuciones del valor de los activos, o bien por la generación o aumento de los pasivos que dan como resultado decrementos en el patrimonio, y no están relacionados con las distribuciones realizadas a los propietarios de este patrimonio.',
    },
    {
      termino: 'Gastos pagados por anticipado',
      significado:
        'Representan una erogación efectuada por servicios que se van a recibir o por bienes que se van a consumir en el uso exclusivo del negocio y cuyo propósito no es el de venderlos ni utilizarlos en el proceso productivo.',
    },
    {
      termino: 'NIC',
      significado:
        'Las Normas Internacionales de Contabilidad (NIC), son un conjunto de normas que reglamenta la información que debe presentarse en los estados financieros de las empresas, así como la forma como esa información debe registrarse para su análisis. (Burgos Alarcón, 2007)',
    },
    {
      termino: 'Pérdida por deterioro',
      significado:
        'El exceso del importe en libros sobre el importe recuperable de un activo. (NIIF, 2008, pág. 29)',
    },
    {
      termino: 'Valor residual',
      significado:
        'Es el importe estimado que la entidad podría obtener de un activo por su disposición, después de haber deducido los costos estimados para su disposición, si el activo tuviera ya la edad y condición esperadas al término de su vida útil. (CTCP, 2020, 11 de diciembre)',
    },
    {
      termino: 'Vida útil',
      significado:
        'El periodo durante el cual se espera que la entidad utilice el activo; o el número de unidades de producción o similares que se espera obtener del mismo por parte de una entidad. (CTCP, 2020, 11 de diciembre)',
    },
    {
      termino: 'Amortización',
      significado:
        'Distribución sistemática del importe depreciable de un activo intangible a lo largo de su vida útil. En el caso de activos intangibles, el término “amortización” se utiliza en vez de “depreciación”. (IFRS, 2008, pág. 4)',
    },
    {
      termino: 'NIIF',
      significado:
        'Sigla en español de las IFRS - Normas expedidas por IASB. Este término trae incluidas las NIC (Normas Internacionales de Contabilidad), NIIF (Normas Internacionales de Información Financiera, así como las interpretaciones CINIIF y SIC.',
    },
    {
      termino: 'Valor depreciable',
      significado:
        'Es el costo de un activo u otro que lo sustituye menos su valor residual. (NIIF, 2008)',
    },
  ],
  complementario: [
    {
      texto:
        'Estándares/normas internacionales de información financiera (IFRS7NIIF). (pp. 387-395). (3a edición ed.). Bogotá: ECOE Ediciones',
      tipo: 'Página Web',
      link:
        'https://ebookcentraroquestcom.bdigital.sena.edu.co/lib/senavirtualsp/detail.action?docID=3161303',
    },
  ],
}
