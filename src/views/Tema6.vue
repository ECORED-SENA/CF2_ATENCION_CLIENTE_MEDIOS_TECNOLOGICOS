<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Clientes
    
    p.mb-5 <b>La evaluación de la calidad del servicio cada día es más importante para las empresas, debido a que permiten conocer la opinión de los clientes sobre los diferentes atributos del servicio o producto que contribuyen a su satisfacción</b>. Se considera de suma importancia porque de esta dependerá el poder identificar aspectos positivos y negativos en la atención al cliente y la imagen corporativa. Una buena evaluación permitirá aumentar la satisfacción de los clientes y la fidelización, poder identificar puntos fuertes, críticos y de mejora que necesite la empresa. 
      br
      br
      | A continuación, se mencionan algunas características claves de una evaluación del servicio, lo que se espera que se cumpla en función de su objetivo: 

    .d-flex.flex-wrap.flex-md-nowrap.align-items-center.mb-5
      p.container-text-1 Contar con información o datos objetivos al momento de tomar las decisiones.
      img(src="@/assets/curso/temas/tema6/6.png" style="max-width: 610px").my-4.my-md-0
      p.container-text-2 Los procesos de venta y postventa se deben evaluar. 

    p.mb-5 Para realizar una evaluación del servicio es importante tener presente las siguientes pautas:

    .row.mb-4.justify-content-center
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-4
              p(style="min-height: 288px").mb-0 <b>La observación</b> <br>
                | Una de las técnicas más sencillas , esta permite monitorear el servicio y la participación del consumidor, después se puede hacer una retroalimentación que permita observar los aspectos a mejorar. 
            .tarjeta-slide__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/1.svg')})`}"
              style="background-size: auto; background-repeat: no-repeat;"
            )

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.px-xl-3.py-xl-4
              p(style="min-height: 288px").mb-0 <b>Estudio Mistery Shopper</b><br>
                | Consiste en contratar a alguien que visite los puntos de venta y experimente la función del cliente, con el objetivo evaluar el servicio y aspectos de cordialidad como amabilidad, saludo, tiempo de respuesta o solución de problemas, etc. Esto permite evaluar el desempeño de los trabajadores o encargados del servicio al cliente.
            .tarjeta-slide__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/2.svg')})`}"
              style="background-size: auto; background-repeat: no-repeat;"
            )

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.px-xl-3.py-xl-4
              p(style="min-height: 288px").mb-0 <b>Monitorear canales de comunicación</b><br>
                | Aquí es importante monitorear la evaluación del servicio desde que el cliente realiza el primer contacto y hasta la post venta. Estos canales de comunicación pueden ser, correos electrónicos, comentarios de redes sociales, llamadas, buzón de mensajería, etc.
            .tarjeta-slide__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/3.svg')})`}"
              style="background-size: auto; background-repeat: no-repeat;"
            )
    .row.mb-4.justify-content-center
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.px-xl-3.py-xl-4
              p(style="min-height: 288px").mb-0 <b>Análisis financiero</b><br>
                | Aquí se analizan las ventas, visitas de clientes, quejas, número de consultas, entre otros. Que puedan ayudar a obtener una imagen de rendimiento general. 
            .tarjeta-slide__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/4.svg')})`}"
              style="background-size: auto; background-repeat: no-repeat;"
            )

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-4
              p(style="min-height: 288px").mb-0 <b>Comentarios de clientes</b> <br>
                | La recolección de estos datos permite identificar de manera efectiva, las áreas problemáticas y los problemas individuales de los clientes. Aquí se puede recolectar información por medio de diferentes instrumentos como la encuesta, llamadas, buzón de sugerencias, entre otros. 
            .tarjeta-slide__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/5.svg')})`}"
              style="background-size: auto; background-repeat: no-repeat;"
            )
    .d-flex.flex-wrap
      .col-12.col-md-6(style="background-color: #FFDE96")
        .d-flex.flex-wrap.justify-content-center.align-items-center
          p.mb-0.fw-bold.py-3 Buzón de sugerencias
        div
          img(src="@/assets/curso/temas/tema6/7.png").w-100
        div
          p.mb-0.p-5 Las empresas colocan en un logar estratégico un buzón con formularios donde los clientes puedan escribir sus comentarios, peticiones, reclamos, sugerencias, quejas, denuncia o felicitaciones. Este método es de bajo costo y rápido, por otra parte; su desventaja radica en la baja tasa de participación, sin embargo, hay muchas empresas que han adoptado este buzón de sugerencias para dar seguimiento a la satisfacción de sus clientes.  
      .col-12.col-md-6(style="background-color: #A4A3FF")
        .d-flex.flex-wrap.justify-content-center.align-items-center
          p.mb-0.fw-bold.py-3 Encuestas
        div
          img(src="@/assets/curso/temas/tema6/8.png").w-100
        div
          p.mb-0.p-5 Consisten en obtener información entrevistando a un grupo representativo de clientes, este instrumento permite hacer preguntas concretas sobre las expectativas de compra de un producto específico y el beneficio que percibieron luego de la compra. Su ventaja permite obtener una vista más completa y confiable acerca de lo que piensan y sienten los clientes. Por otra parte, su desventaja recae en el tiempo requerido para la recolección de información y tabulación de datos, y por último, este puede incurrir en un elevado costo.

    
</template>

<script>
export default {
  name: 'Tema6',
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
.container-text-1
  padding: 1.5rem 2rem
  background-color: #F8F8F8
  min-width: 368px
  margin-right: -3rem
  z-index: 1
  margin-bottom: 6rem
.container-text-2
  padding: 1.5rem 2rem
  background-color: #F8F8F8
  min-width: 368px
  margin-left: -3rem
  margin-top: 6rem
  z-index: 1
@media (max-width: 768px)
  .container-text-1
    margin: 0
  .container-text-2
    margin: 0
</style>
