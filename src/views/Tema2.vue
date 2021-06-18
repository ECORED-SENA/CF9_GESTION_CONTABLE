<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Diferidos 
    
    p.mb-5 Los cargos diferidos se pueden dividir en dos partes: diferidos propiamente dicho y los gastos pagados por anticipado.  
    .row.justify-content-center.align-items-center.mb-5
        .col-auto
            img(src="@/assets/curso/images/tema2/img_9.svg" alt="", style="width:700px; display:inline-block; margin: 0 auto;")

    #t_2_1.titulo-segundo
      h2  2.1 Concepto de cargos diferidos

    p.mb-5 Los diferidos dependen de su materialidad y normalmente se llevan a una cuenta de gastos, pero esto no impide que en algunas ocasiones se deba hacer cierto análisis porque puede ser que el cargo diferido cumpla la definición de activo, y si en algún momento cumple con la definición de activo, es decir que sea un recurso controlado por la empresa, proveniente de sucesos pasados, de los cuales se espera recibir beneficios futuros.

    #t_2_2.titulo-segundo
      h2  2.2 Concepto de gastos pagados por anticipado

    p.mb-3  Son un anticipo que se entrega (en dinero) y que van a cubrir un determinado tiempo de acuerdo con el uso. Por ejemplo, una póliza de seguro (prepagada), intereses pagados por anticipado, arrendamientos, entre otros, en los que incurre el ente económico en la ejecución de su actividad.  Lo importante, en determinado momento es saber si cumple con la definición de activo estos gastos que normalmente se ubican en una cuenta por cobrar u otras cuentas por cobrar.

    p.mb-5 El párrafo 70 de la NIC 38, sostiene:
      
    .row.justify-content-center.align-items-center.mb-5
          .col-8
            .bloque-texto-d.color-secundario.p-5
              .bloque-texto-d__texto.mb-1
                i.fas.fa-quote-left
                span.h5 (…) el párrafo 68 no impide que ésta reconozca el pago anticipado como un activo, cuando dicho pago por servicios se haya realizado antes de que la entidad reciba estos servicios
                i.fas.fa-quote-right
              .bloque-texto-d__autor 
                
    #t_2_3.titulo-segundo
      h2  2.3 Reconocimiento y medición

    h3.titulo-tercero.mt-5 Reconocimiento

    p.mb-3 El párrafo 68 NIC 38: activos intangibles (Grupo 1) no impide que la entidad reconozca un pago anticipado como activo, cuando el pago por los bienes se haya realizado antes de que la entidad obtenga el derecho de acceso a esos bienes.
    p.mb-5 Los desembolsos sobre un activo intangible, reconocidos inicialmente como gastos del período, no se reconocerán posteriormente como parte del costo de un activo intangible.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-8.col-lg-6.col-xl-6
        img.img-a.my-3(src="@/assets/curso/images/tema2/img_10.svg" alt="", style="width:500px; display:block; margin:0 auto;")
      .col-12.col-md-8.col-lg-6.col-xl-6
        h3.titulo-tercero Ejemplos:
        p.mb-3 Párrafo 28 NIC 38 Activos Intangibles: a) los costos de introducción de un nuevo producto o servicio (incluyendo los costos de actividades publicitarias y promocionales); b) los costos de apertura del negocio en una nueva localización o dirigirlo a un nuevo segmento de clientela (incluyendo los costos de formación del personal); y (c) los costos de administración y otros costos indirectos generales.

    h3.titulo-tercero Medición inicial

    p La entidad elegirá política contable, entre el modelo del costo del párrafo 74 o el modelo de revaluación del párrafo 75 de la NIC 38.
    p.mb-5 En este sentido, si un activo intangible se contabiliza según el modelo de revaluación, todos los demás activos pertenecientes a la misma clase también se contabilizarán utilizando el mismo modelo, a menos que no exista un mercado activo para esa clase de activos.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/images/tema2/ico_3.svg' alt='AvatarTop')
          .tarjeta.color-secundario
            .p-4
              .h2 Medición posterior al modelo del costo
              p La medición posterior de un activo intangible se contabilizará por su costo menos el valor de la amortización acumulada y las pérdidas por deterioro del activo contempladas en el párrafo 74 de la NIC 38.
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/images/tema2/ico_4.svg' alt='AvatarTop')
          .tarjeta.color-secundario
            .p-4
              .h2 Medición posterior al modelo de revaluación
              p Un activo intangible se registrará por el valor revaluado (valor razonable), menos la amortización y las pérdidas acumuladas por deterioro que haya sufrido el activo.
    
    p.mb-5 Por otro lado, los desembolsos sobre una partida intangible deberán reconocerse como un gasto cuando se incurra en ellos (NIC 38 Párrafo 68)

    h3.titulo-tercero Ejemplos:

    p.mb-5 El 1 de junio del año 20X1, la empresa ABC, adquiere un contrato de arrendamiento.  Paga por anticipado tres meses de arrendamiento por valor de $3.000.000, más IVA tarifa general.

    .row.justify-content-center.align-items-center
      .col-11
        .bloque-texto-a.color-custom.p-4.p-md-5.mb-5 
          .row.m-4.align-items-center.justify-content-between
              .col-lg-5.mb-4.mb-lg-0
                  img(src="@/assets/curso/images/tema2/img_11.svg")
              .col-lg-7
                .bloque-texto-a__texto.p-5
                 
                  p Valor Anticipo........... $ 3.000.000
                  p Más IVA..................$ 570 .000
                  p  Valor Total.............$ 3.570.000
                  
    SlyderC.slyder-color(:datos="datosSlyderl")

    p.mt-5.mb-5 Estos pagos por anticipado se deben ir amortizando hasta finalizar el tiempo establecido.

    #t_2_4.titulo-segundo
      h2 2.4 Retiros, enajenaciones y revelación

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/images/tema2/ico_5.svg' alt='AvatarTop')
          .tarjeta.color-secundario
            .p-4
              .h2 Retiros y enajenaciones
              p Un activo intangible es dado de baja cuando es enajenado, también cuando no se esperan retribuciones o beneficios económicos en el futuro. 
              p Cuando se da de baja un activo, debe ser reconocido en el estado de resultados, medido por la diferencia entre el valor en libros del activo y/o por cualquier flujo por efecto de la enajenación (si existen).

        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/images/tema2/ico_6.svg' alt='AvatarTop')
          .tarjeta.color-secundario
            .p-4
              .h2 Revelación
              p La revelación de los activos intangibles debe incluir: las bases de medición, el método de amortización, las vidas útiles o las tasas de amortización utilizadas, conciliación de los movimientos del período para cada clase de activo intangible, método de medición (costo/revaluación), desembolsos por investigación y desarrollo, entre otros.






















</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    datosSlyderl: [
      {
        titulo: '',
        texto:
          'Nota: vale la pena aclarar que, aunque la norma internacional indica que todos los desembolsos deben reconocerse como gasto, queda a criterio de la entidad si, esta debe ser registrada como gastos o clasificarse como gastos pagados por anticipado.',
        imagen: require('@/assets/curso/images/tema2/t_1_2.svg'),
        leyendaImagen: '',
      },
      {
        titulo: 'Manejo de anticipos',
        texto:
          'El 1 de enero de 20xx la empresa SABACO Ltda., adquirió una póliza de seguros contra incendios por 1 año, por valor de $4.000.000 mediante cheque girado del banco Davivienda.',
        imagen: require('@/assets/curso/images/tema2/t_2_2.svg'),
        leyendaImagen: '',
      },
      {
        titulo: 'Enero 31 del año 20xx',
        texto:
          'La empresa mensualmente debe hacer un asiento de ajuste para reconocer en el estado de resultados el gasto por póliza de seguros de cada periodo así:',
        imagen: require('@/assets/curso/images/tema2/t_3_2.svg'),
        leyendaImagen: '',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
