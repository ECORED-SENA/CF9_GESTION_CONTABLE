<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/WHnOdzKHWCg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)  
    

    p.mb-3 Durante el presente componente tendrá la oportunidad de fortalecer sus conocimientos frente a la legislación laboral; por ende, es necesario que indague sobre las generalidades de contratos, nómina, beneficios a empleados y reconocimiento de los hechos presentados. Lo anterior se debe realizar teniendo en cuenta la normativa vigente.
    
    p.mb-3 Para la elaboración de este componente, se abordaron varios autores conocidos en contratos de trabajo y liquidación de nómina, de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido que el conocimiento es social y, por lo tanto, es para usarlo por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de gestión contable e información financiera.

    p Nota aclaratoria: las tablas que se toman como referencia en los ejemplos en cada uno de los temas desarrollados, elaboradas mediante el programa Excel, son derivadas de los mismos, por lo tanto, no se numeran y la elaboración es propia del autor del presente componente.

    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
