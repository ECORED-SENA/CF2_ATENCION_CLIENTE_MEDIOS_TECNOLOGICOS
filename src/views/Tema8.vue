<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Trazabilidad del servicio
    
    p.mb-5(data-aos="fade-up") La trazabilidad de servicio al cliente son aquellos procedimientos preestablecidos y autosuficientes que permiten conocer el histórico, la ubicación y la trayectoria de un producto o lote de productos a lo largo de la cadena de suministros en un momento dado, a través de herramientas determinadas.

    h3.text-center.mt-5(data-aos="fade-up") Tipos de trazabilidad

    .col-12.col-md-10.d-flex.flex-wrap.mx-auto.mb-5.mt-4
      .col-12.col-md-4.px-0.px-md-4
        div(style="background-color: #A4A3FF").p-4.h-100
          img(src="@/assets/curso/temas/tema8/1.svg" style="max-width: 91px" data-aos="zoom-in").mx-auto.mb-4
          p(data-aos="fade-up") <b class="h5">Trazabilidad hacia atrás</b><br>
            | Cuando se identifica de quien se reciben los productos y lo que se ha recibido exactamente.
      .col-12.col-md-4.px-0.px-md-4
        div(style="background-color: #FADE9F").p-4.h-100
          img(src="@/assets/curso/temas/tema8/2.svg" style="max-width: 91px" data-aos="zoom-in").mx-auto.mb-4
          p(data-aos="fade-up") <b class="h5">Trazabilidad de proceso (interno)</b><br>
            | Como todo proceso se tiene en cuenta cuando los productos se mezclan, dividen o cambian; se busca contestar: ¿Qué es lo que se crea?, ¿A partir de que se crea?, ¿Cómo se crea?, ¿Cuándo? Identificación del producto final.
      .col-12.col-md-4.px-0.px-md-4
        div(style="background-color: #A4A3FF").p-4.h-100
          img(src="@/assets/curso/temas/tema8/3.png" style="max-width: 91px" data-aos="zoom-in").mx-auto.mb-4
          p(data-aos="fade-up") <b class="h5">Trazabilidad hacia adelante</b><br>
            | aquí se identifica a quiénes se entrega y lo que se ha vendido exactamente.

    p.mb-5(data-aos="fade-up") <b class="h3">Proceso de mejora continua</b><br><br>
      | Es la mejora de los productos, servicios y procesos. Buscan la forma más práctica de mejora de la calidad y la eficiencia en las empresas. Un ejemplo, son: los sistemas de gestión de calidad, normas ISO y sistemas de evaluación ambiental, son utilizados para tener una calidad total. 
      br
      br
      | <b class="h4">Fundamentos</b>
    
    .col-sm.mb-5.mb-sm-0.d-flex.flex-wrap.pb-5
      ol.lista-ol--cuadro.lista-ol--separador.col-12.pe-0.pe-md-5
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span 1
          | Mejorar el desempeño, calidad de los productos y servicios que satisfagan las necesidades y expectativas del cliente final.
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span 2
          | Se deben comprender y cumplir con los requisitos.
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span 3
          | Se busca la mejora continua de los procesos a partir de mediciones objetivas. 
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span 4
          | Considerar procesos en términos que aporten valor. 
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span 5
          | Resultados de desempeño y eficacia de los procesos.

    p.mb-5(data-aos="fade-up") Por otra parte, se encuentran los estándares del servicio, estos son utilizados para superar las expectativas de los clientes y convertir las expectativas en atributos percibidos del servicio; entre estos se encuentran: 

    ImagenInfografica.color-secundario.mb-5.mx-auto(style="max-width: 505px")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema8/3.svg', alt='Texto que describa la imagen')

      .tarjeta.color-acento-botones.p-3(x="44%" y="10.5%" numero="1" style="background-color:#F6F6F6;border-radius:0px;")
        .h5.mb-2 Cortesía
        p Se considera el uso práctico de las buenas costumbres del comportamiento humano.
      .tarjeta.color-acento-botones.p-3(x="46%" y="51.5%" numero="2" style="background-color:#F6F6F6;border-radius:0px;")
        .h5.mb-2 Conocimiento
        p Se adquieren a través de la experiencia o educación, su comprensión y practica de un objeto se da por hechos o información adquiridos por el tiempo.
      .tarjeta.color-acento-botones.p-3(x="86%" y="35.5%" numero="3" style="background-color:#F6F6F6;border-radius:0px;")
        .h5.mb-2 Seguimiento
        p Se realiza una observación minuciosa de la evaluación y el desarrollo de un proceso.
      .tarjeta.color-acento-botones.p-3(x="66%" y="86.5%" numero="4" style="background-color:#F6F6F6;border-radius:0px;")
        .h5.mb-2 Sorprender
        p Para mantener el negocio en la mente de los clientes se debe ofrecer un buen servicio. 

    p.mb-5(data-aos="fade-up") Uno de los elementos para la trazabilidad del servicio al cliente, es: 
      br
      br
      | <b class="h4">La libreta de calificaciones</b><br><br>
      | Se utiliza para identificar y conocer los conceptos de los clientes en cuanto a su percepción sobre los bienes y servicios que adquieren. Su principal objetivo es la recolección y análisis de la información y de esta forma aplicar correctivos y mejoras en la calidad de sus servicios, metodologías, procesos, productos y estrategias que puedan satisfacer las necesidades del consumidor.
    
    ImagenInfografica.color-secundario.mb-5.mx-auto(style="max-width: 624px")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema8/4.svg', alt='Texto que describa la imagen')

      .tarjeta.color-acento-botones.p-3(x="65%" y="28%" numero="01" style="background-color:#F6F6F6;border-radius:0px;")
        p.mb-0 Producto, procedimiento
      .tarjeta.color-acento-botones.p-3(x="74%" y="40%" numero="02" style="background-color:#F6F6F6;border-radius:0px;")
        p.mb-0 Instalaciones
      .tarjeta.color-acento-botones.p-3(x="65%" y="50.5%" numero="03" style="background-color:#F6F6F6;border-radius:0px;")
        p.mb-0 Tecnología disponible
      .tarjeta.color-acento-botones.p-3(x="73%" y="60.5%" numero="04" style="background-color:#F6F6F6;border-radius:0px;")
        p.mb-0 Información
      .tarjeta.color-acento-botones.p-3(x="65%" y="72%" numero="05" style="background-color:#F6F6F6;border-radius:0px;")
        p.mb-0 Agente prestador del servicio

</template>

<script>
export default {
  name: 'Tema8',
  data: () => ({
    indicadorTarjetaSlide: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.img-infografica__item__numero, .img-infografica-b__item__numero
  left: 125%
.img-infografica__item__dot, .img-infografica-b__item__dot
  padding: 1.4rem 1.5rem 1.4rem 1.5rem
.img-infografica__item__numero, .img-infografica-b__item__numero
  font-size: 1.5rem
.img-infografica.color-secundario .img-infografica__item__dot:before, .img-infografica.color-secundario .img-infografica__item__dot:after, .img-infografica.color-secundario .img-infografica-b__item__dot:before, .img-infografica.color-secundario .img-infografica-b__item__dot:after, .img-infografica-b.color-secundario .img-infografica__item__dot:before, .img-infografica-b.color-secundario .img-infografica__item__dot:after, .img-infografica-b.color-secundario .img-infografica-b__item__dot:before, .img-infografica-b.color-secundario .img-infografica-b__item__dot:after
  background-color: #fcb315
</style>
