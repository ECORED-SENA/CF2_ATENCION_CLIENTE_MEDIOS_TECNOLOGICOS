<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p(data-aos="fade-up") Atender las necesidades y protocolos que deben asumirse para la adecuada atención al cliente, permite ahondar en las políticas que rigen y estipulan su acompañamiento, para ello se debe observar el siguiente video.

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/sy4eV9NbJPg" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
