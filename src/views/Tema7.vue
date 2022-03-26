<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Factores claves

    p.mb-5(data-aos="fade-up") Hoy en día las empresas buscan mantenerse en el mercado y crear esa identidad propia de la marca que genere fidelidad por parte de sus clientes. Es por esta razón, que para que una empresa obtenga éxito en el servicio al cliente debe tener presente los siguientes factores claves: 

    .col-sm.mb-5.mb-sm-0.d-flex.flex-wrap.pb-5
      ol.lista-ol--cuadro.lista-ol--separador.col-12.col-md-6.pe-0.pe-md-5
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span 1
          | Atención inmediata
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span 2
          | Comprensión de lo que quiere el cliente 
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span 3
          | Atención completa y exclusiva
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span 4
          | Trato cortés.
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span 5
          | Expresión de interés por el cliente
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span 6
          | Receptividad de preguntas
      ol.lista-ol--cuadro.lista-ol--separador.col-12.col-md-6.pe-0.pe-md-5
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span 7
          | Prontitud en las respuestas
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span 8
          | Eficacia al prestar un servicio
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span 9
          | Atención a reclamos
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span 10
          | Aceptar la responsabilidad por errores cometidos por el personal de la empresa
        li(data-aos="fade-up")
          .lista-ol--cuadro__vineta
            span 11
          | Hacer saber que el cliente es la persona más importante de la empresa
    .d-flex.flex-wrap.flex-md-nowrap.align-items-center(style="background-color: #A4A3FF").py-4.px-5.mb-5
      img(src="@/assets/curso/temas/tema7/1.svg" style="max-width: 91px" data-aos="fade-left")
      p.mb-0(data-aos="fade-right") Por otra parte, se encuentran los sistemas automatizados de ventas, que reducen la duración de los ciclos de los procesos relacionados con el cliente, el desperdicio, aumento del tiempo y agregar valor a la relación con el cliente. 
    
    p.mb-5(data-aos="fade-up")  Otros factores importantes para el éxito de un buen servicio tienen que ver con la implementación y buen desempeño de diferentes áreas de la empresa, como el capital, los recursos humanos, la publicidad efectiva, el servicio de calidad y estudios de mercado. Estos deben estar coordinados bajo unas claves esenciales de servicio, como: 

    SlyderB.mb-5(:datos="datosSlyder")
</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Escuchar las necesidades del cliente',
        texto:
          'Se deben escuchar realmente lo que las personas dicen. Es importante analizar el lenguaje y las palabras que utilizan los clientes o personas con el objetivo de identificar sus necesidades. Aquí es importante hacer preguntas y prestar atención a lo que están diciendo. ',
        imagen: require('@/assets/curso/temas/tema7/4.png'),
      },
      {
        titulo: 'Conocer el producto',
        texto:
          'Los empleados deben conocer el producto de principio a fin, de esta forma se les facilitará ayudar a los clientes cuando estos presenten algún problema. Con solo saber las funciones del producto es suficiente más allá de conocer cada pieza en específico. ',
        imagen: require('@/assets/curso/temas/tema7/5.png'),
      },
      {
        titulo: 'Gestión del tiempo',
        texto:
          'Aquí es importante conocer la capacidad de organizar el tiempo. De esto depende la capacidad de respuesta para solucionar los problemas o dudas de los clientes.',
        imagen: require('@/assets/curso/temas/tema7/6.png'),
      },
      {
        titulo: 'Anticipar las necesidades del cliente',
        texto:
          'Los clientes siempre buscan solucionar sus problemas o satisfacer sus necesidades por medio de productos o servicios, y muchas de las necesidades son guiadas por las emociones más que por la lógica. Para poder anticipar al cliente se le debe conocer muy bien, mantener la comunicación, comprender los principios básicos de comportamiento y aprender la habilidad de leer su estado emocional. ',
        imagen: require('@/assets/curso/temas/tema7/7.png'),
      },
      {
        titulo: 'Hacer saber a los clientes lo importantes que son',
        texto:
          'Los clientes se deben sentir importantes, aquí la empatía juega un rol muy especial y la capacidad de entender sus sentimientos. Por lo general, el cliente no quiere que le digan lo que desea escuchar, sino que quieren es atención, que se preocupe y comprenda su problema. ',
        imagen: require('@/assets/curso/temas/tema7/8.png'),
      },
      {
        titulo: 'Ofrecer más de lo esperado',
        texto:
          'Es importante darle al cliente más de lo que espera recibir. El futuro de la empresa radica en mantener contentos a los clientes, siempre se debe pensar en ofrecer más que la competencia, darles algo que no puedan conseguir en otro lugar y darle seguimiento después de la compra.',
        imagen: require('@/assets/curso/temas/tema7/4.png'),
      },
    ],
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
<style lang="sass"></style>
