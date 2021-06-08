export default {
  global: {
    componenteFormativo: 'Activos Intangibles',
    descripcionCurso:
      'Hallar valor en un panorama empresarial tan cambiante donde tradicionalmente los recursos de la empresa eran cosas que se podían palpar como un edificio, una máquina, un vehículo, un terreno sobre lo que las empresas centran su atención; pero con el paso del tiempo, los procesos, las relaciones y los modelos comerciales han evolucionado; y es así como, las empresas invierten cada vez más en activos intangibles no solamente en una computadora, un software, sino también en la investigación, innovación, la marca, el diseño organizacional, el conocimiento, las relaciones, entre otros. Por lo anterior, en el presente componente se analiza el tratamiento contable de los activos intangibles y diferidos, de acuerdo con los criterios establecidos en las Normas Internacionales de Información Financiera.',
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
        titulo: 'Intangibles y Diferidos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Marco normativo',
            hash: 'Marco',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Importancia de los intangibles dentro de las organizaciones',
            hash: 'intangibles',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Clasificación de Activos Intangibles',
            hash: 'Activos',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Reconocimiento y medición de Intangibles',
            hash: 'Medición',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo:
              'Generalidades de intangibles: vida útil, periodo, método de amortización y valor razonable',
            hash: 'vida útil',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Política contable de intangibles',
            hash: 'Política',
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
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Claudia Briceida Coy Coy',
        cargo: 'Instructor',
        centro: 'Centro de Contabilidad',
        regional: '',
      },
      {
        nombre: 'Angy Fernanda Salazar',
        cargo: 'Instructor',
        centro: 'Centro de Contabilidad',
        regional: '',
      },
      {
        nombre: 'Maryuri Agudelo Franco',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Diseño y Metrología',
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
        cargo: 'Integración de recursos y pruebas',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: ['Luis Arévalo'],
        cargo: 'Diseño web y Producción Audiovisual',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Gusatvo Adolfo Marún Suárez',
        cargo: 'Desarrollo Front-End',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Brayan Stiven Pinto Diaz',
        cargo: ['Desarrollo front-end', 'Validación de recursos'],
        centro: 'Centro de comercio y servicios',
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
        'Burgos Alarcón, H. (2007). Normas Internacionales de Contabilidad. Panorama. Universidad Politécnico Grancolombiano, 1(3), 65-70.: ',
      link: '',
    },
    {
      referencia:
        'Harpersbazaar. (2019). La ropa que eliges afecta a tu estado de ánimo y cerebro, según expertos. En arpersbazaar.mx.',
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
        'SUIN Juriscoop. (2020, 10 de diciembre).Decreto 2784 de diciembre 2012.',
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
      link:
        'https://www.pwc.com/. https://www.pwc.com/cl/es/ifrs/assets/grifrs_2008.pdf',
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
      termino: 'Activo Monetario',
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
  ],
  complementario: [
    {
      texto: 'NIC 38 Activos Intangibles',
      tipo: 'Página Web',
      link:
        'https://www2.deloitte.com/content/dam/Deloitte/cr/Documents/audit/documentos/niif-2019/NIC%2038%20-%20Activos%20Intangibles.pdf',
    },
    {
      texto: 'Observatorio de NIIF / XBRL',
      tipo: 'Página Web',
      link: 'http://www.ctcp.gov.co/conceptos/2019/',
    },
    {
      texto: 'NIIF 14 Cuentas de Diferimientos de Actividades Reguladas',
      tipo: 'Página Web',
      link:
        'https://ccpp.org.ec/wp-content/uploads/2019/09/2-NIIF-14-Cuentas-de-Diferimientos-de-Actividades-Reguladas.pdf',
    },
  ],
}
