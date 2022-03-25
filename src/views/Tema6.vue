<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Evaluación del servicio
    
    p.mb-5(data-aos="fade-up") <b>La evaluación de la calidad del servicio cada día es más importante para las empresas, debido a que permiten conocer la opinión de los clientes sobre los diferentes atributos del servicio o producto que contribuyen a su satisfacción</b>. Se considera de suma importancia porque de esta dependerá el poder identificar aspectos positivos y negativos en la atención al cliente y la imagen corporativa. Una buena evaluación permitirá aumentar la satisfacción de los clientes y la fidelización, poder identificar puntos fuertes, críticos y de mejora que necesite la empresa. 
      br
      br
      | A continuación, se mencionan algunas características claves de una evaluación del servicio, lo que se espera que se cumpla en función de su objetivo: 

    ImagenInfografica.color-secundario.mt-5.col-md-7.m-auto
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema6/6.png', alt='')
      .tarjeta.color-acento-botones.p-3(x="65%" y="41%" numero="01" style="background-color:#F6F6F6;border-radius:0px;")
        p.mb-0 La perspectiva del cliente es fundamental para conocer la calidad del servicio.
      .tarjeta.color-acento-botones.p-3(x="1%" y="61%" numero="02" style="background-color:#F6F6F6;border-radius:0px;")
        p.mb-0 Se debe identificar los puntos fuertes, críticos y de mejora.
      .tarjeta.color-acento-botones.p-3(x="97%" y="40%" numero="03" style="background-color:#F6F6F6;border-radius:0px;")
        p.mb-0 Formar entre el cliente y la empresa un canal de comunicación directa.
      .tarjeta.color-acento-botones.p-3(x="80%" y="10%" numero="04" style="background-color:#F6F6F6;border-radius:0px;")
        p.mb-0 Se deben mejorar los procesos internos de calidad.
      .tarjeta.color-acento-botones.p-3(x="96%" y="79%" numero="05" style="background-color:#F6F6F6;border-radius:0px;")
        p.mb-0 Los procesos de venta y postventa se deben evaluar.
      .tarjeta.color-acento-botones.p-3(x="31%" y="7%" numero="06" style="background-color:#F6F6F6;border-radius:0px;")
        p.mb-0 Se debe marcar la diferencia respecto a los competidores.
      .tarjeta.color-acento-botones.p-3(x="1%" y="20%" numero="07" style="background-color:#F6F6F6;border-radius:0px;")
        p.mb-0 Contar con información o datos objetivos al momento de tomar las decisiones.

    p.mt-5(data-aos="fade-up") Para realizar una evaluación del servicio es importante tener presente las siguientes pautas:

    .row.mb-4.justify-content-center.mt-5
      .col-sm-6.col-xl-3.mb-4.mb-xl-0(data-aos="zoom-in")
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

      .col-sm-6.col-xl-3.mb-4.mb-xl-0(data-aos="zoom-in")
        .tarjeta.tarjeta-slide.arriba.color-primario
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.px-xl-3.py-xl-4
              p(style="min-height: 288px").mb-0 <b>Estudio Mistery Shopper</b><br>
                | Consiste en contratar a alguien que visite los puntos de venta y experimente la función del cliente, con el objetivo evaluar el servicio y aspectos de cordialidad como amabilidad, saludo, tiempo de respuesta o solución de problemas, etc. Esto permite evaluar el desempeño de los trabajadores o encargados del servicio al cliente.
            .tarjeta-slide__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/2.svg')})`}"
              style="background-size: auto; background-repeat: no-repeat;"
            )

      .col-sm-6.col-xl-3.mb-4.mb-xl-0(data-aos="zoom-in")
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
      .col-sm-6.col-xl-3.mb-4.mb-xl-0(data-aos="zoom-in")
        .tarjeta.tarjeta-slide.arriba.color-primario
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.px-xl-3.py-xl-4
              p(style="min-height: 288px").mb-0 <b>Análisis financiero</b><br>
                | Aquí se analizan las ventas, visitas de clientes, quejas, número de consultas, entre otros. Que puedan ayudar a obtener una imagen de rendimiento general. 
            .tarjeta-slide__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/4.svg')})`}"
              style="background-size: auto; background-repeat: no-repeat;"
            )

      .col-sm-6.col-xl-3.mb-4.mb-xl-0(data-aos="zoom-in")
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
          p.mb-0.fw-bold.py-3(data-aos="zoom-in") Buzón de sugerencias
        div
          img(src="@/assets/curso/temas/tema6/7.png" data-aos="zoom-in").w-100
        div
          p.mb-0.p-5(data-aos="zoom-in") Las empresas colocan en un logar estratégico un buzón con formularios donde los clientes puedan escribir sus comentarios, peticiones, reclamos, sugerencias, quejas, denuncia o felicitaciones. Este método es de bajo costo y rápido, por otra parte; su desventaja radica en la baja tasa de participación, sin embargo, hay muchas empresas que han adoptado este buzón de sugerencias para dar seguimiento a la satisfacción de sus clientes.  
      .col-12.col-md-6(style="background-color: #A4A3FF")
        .d-flex.flex-wrap.justify-content-center.align-items-center
          p.mb-0.fw-bold.py-3(data-aos="zoom-in") Encuestas
        div
          img(src="@/assets/curso/temas/tema6/8.png" data-aos="zoom-in").w-100
        div
          p.mb-0.p-5(data-aos="zoom-in") Consisten en obtener información entrevistando a un grupo representativo de clientes, este instrumento permite hacer preguntas concretas sobre las expectativas de compra de un producto específico y el beneficio que percibieron luego de la compra. Su ventaja permite obtener una vista más completa y confiable acerca de lo que piensan y sienten los clientes. Por otra parte, su desventaja recae en el tiempo requerido para la recolección de información y tabulación de datos, y por último, este puede incurrir en un elevado costo.

    
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
.img-infografica__item__numero, .img-infografica-b__item__numero
  left: 125%
.img-infografica__item__dot, .img-infografica-b__item__dot
  padding: 1.4rem 1.5rem 1.4rem 1.5rem
.img-infografica__item__numero, .img-infografica-b__item__numero
  font-size: 1.5rem
.img-infografica.color-secundario .img-infografica__item__dot:before, .img-infografica.color-secundario .img-infografica__item__dot:after, .img-infografica.color-secundario .img-infografica-b__item__dot:before, .img-infografica.color-secundario .img-infografica-b__item__dot:after, .img-infografica-b.color-secundario .img-infografica__item__dot:before, .img-infografica-b.color-secundario .img-infografica__item__dot:after, .img-infografica-b.color-secundario .img-infografica-b__item__dot:before, .img-infografica-b.color-secundario .img-infografica-b__item__dot:after
  background-color: #fcb315
</style>
