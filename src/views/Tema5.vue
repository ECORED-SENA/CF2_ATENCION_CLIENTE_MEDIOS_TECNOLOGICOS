<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 PQRSDF

    .row
      .col-md-5
        h5(data-aos="fade-left") Los PQRSDF son una herramienta que permite desarrollar protocolos que ayudan a dar solución de forma ordenada a las necesidades e inconvenientes que un cliente o persona pueda tener con respecto a los productos o servicios de una empresa e institución.
      .col-md-7
        p(data-aos="fade-right") En otras palabras, hace referencia al proceso por el cual una empresa o institución gestiona las peticiones, quejas, reclamos, sugerencias, denuncias o felicitaciones que realizan las personas o clientes. 
        p.mt-4(data-aos="fade-right") Hablando en términos generales, esta actividad hace parte del proceso de servicio al cliente que responden las necesidades más importantes del consumidor:

    ImagenInfografica.color-secundario.mt-5.col-md-9.m-auto
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema5/1.svg', alt='')
      .tarjeta.color-acento-botones.p-3(x="6%" y="31%" numero="01" style="background-color:#F6F6F6;border-radius:0px;")
        .h4 Petición
        p Es una solicitud dirigida a la empresa para que intervenga en un asunto puntual y concreto, esta puede ser de forma escrita o verbal. Por otra parte, puede ser que realice una acción o que solicite una información específica. 
      .tarjeta.color-acento-botones.p-3(x="23%" y="72%" numero="02" style="background-color:#F6F6F6;border-radius:0px;")
        .h4 Queja
        p Es la inconformidad y disgusto que presenta el usuario hacia determinado proceso y también puede ser de forma escrita o verbal.
      .tarjeta.color-acento-botones.p-3(x="40%" y="27%" numero="03" style="background-color:#F6F6F6;border-radius:0px;")
        .h4 Reclamo
        p Se da por la mala prestación de un servicio o fallas en un producto donde el cliente realiza una demanda de forma verbal o escrita ante la insatisfacción o incumplimiento de un derecho que no se le respetó o se sintió amenazado.
      .tarjeta.color-acento-botones.p-3(x="57%" y="72%" numero="04" style="background-color:#F6F6F6;border-radius:0px;")
        .h4 Sugerencia
        p Son recomendaciones que realiza el cliente con el fin de mejorar el servicio, los productos ofrecidos o la gestión de la entidad. Esta puede ser de forma verbal o escrita.
      .tarjeta.color-acento-botones.p-3(x="74%" y="26%" numero="05" style="background-color:#F6F6F6;border-radius:0px;")
        .h4 Denuncia
        p Cuando se coloca en conocimiento a una autoridad competente de una conducta posiblemente irregular, para que se realice la investigación correspondiente, ya sea de tipo penal, disciplinaria, fiscal, administrativa - sancionatoria o ético profesional. Para su denuncia es necesario indicar las circunstancias de tiempo modo y lugar, con el objetivo de generar responsabilidades. Se deberán atender o dar respuesta en un máximo de quince (15) días hábiles.
      .tarjeta.color-acento-botones.p-3(x="91%" y="72%" numero="06" style="background-color:#F6F6F6;border-radius:0px;")
        .h4 Felicitación
        p Manifestación de agradecimiento, satisfacción hacia los productos, servicios, programas o servidores de la entidad.

    p.mt-5(data-aos="fade-up") Desde la parte normativa, en Colombia se parte de la Constitución Política de 1991 con:

    ol.lista-ol--cuadro.lista-ol--separador.mt-5
      li(data-aos="fade-up")
        .lista-ol--cuadro__vineta
          span 1
        p #[strong Artículo 23.] Toda persona tiene derecho a presentar peticiones respetuosas a las autoridades por motivos de interés general o particular y a obtener pronta resolución. El legislador podrá reglamentar su ejercicio ante organizaciones privadas para garantizar los derechos fundamentales.
      li(data-aos="fade-up")
        .lista-ol--cuadro__vineta
          span 2
        p #[strong Ley Estatutaria 1757 de 2015.] Por la cual se dictan disposiciones en materia de promoción y protección del derecho a la participación democrática.
      li(data-aos="fade-up")
        .lista-ol--cuadro__vineta
          span 3
        p #[strong Ley 1755 de 2015.] Por medio de la cual se regula el derecho fundamental de petición y sustituye un título del código de procedimiento administrativo y de lo contencioso administrativo.
      li(data-aos="fade-up")
        .lista-ol--cuadro__vineta
          span 4
        p #[strong Ley 1437 de 2011.] Código de procedimiento administrativo y de lo contencioso administrativo.
      li(data-aos="fade-up")
        .lista-ol--cuadro__vineta
          span 5
        p #[strong Ley 1266 de diciembre de 2008.] Por la cual se dictan las disposiciones generales del Habeas Data y se regula el manejo de la información contenida en bases de datos personales.
      li(data-aos="fade-up")
        .lista-ol--cuadro__vineta
          span 6
        p #[strong Decreto Ley 019 de 2012.] Por el cual se dictan normas para suprimir o reformar regulaciones, procedimientos y trámites innecesarios existentes en la administración pública.
      li(data-aos="fade-up")
        .lista-ol--cuadro__vineta
          span 7
        p #[strong Decreto 2623 del 2009.] Por el cual se crea el Sistema Nacional de Servicio al Ciudadano.
      li(data-aos="fade-up")
        .lista-ol--cuadro__vineta
          span 8
        p #[strong Resolución 6451 del 2018.] Por el cual se reglamenta el trámite interno de peticiones, quejas, reclamos, sugerencias, denuncias y felicitaciones presentadas ante el Ministerio de Relaciones Exteriores y su Fondo Rotatorio y deroga la resolución 2278 de 2013.
      li(data-aos="fade-up")
        .lista-ol--cuadro__vineta
          span 9
        p #[strong Sentencia Corte Constitucional C-951/2014.] M.P. Martha Victoria Sáchica Méndez.

    .row.mt-5.p-2(style="background-color:#FFDE96;")
      .col-md-2.col-sm-3.text-center(style="place-self:center;")
        img(src="@/assets/curso/temas/tema4/6.png" data-aos="fade-left" style="display:inline;max-width:100px;")
      .col-md-7.col-lg-7.col-sm-6(style="place-self:center;")
        p(data-aos="fade-up") Para ampliar un poco más sobre la normativa, se pueden consultar el siguiente documento: #[strong Criterios Normativos para PQRSDF. ¡Pilas con las PQRSDF!]
      .col-md-3.col-lg-3.col-sm-3.text-center(style="place-self:center;")
        a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/CRITERIOS_NORMATIVOS_PARA_PQRSDF_V2.pdf')" target="_blank" type="application/pdf" data-aos="fade-up")
          span Descargar
          i.fas.fa-file-download

  

</template>

<script>
export default {
  name: 'Tema5',
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
  left: 100%
.img-infografica__item__dot, .img-infografica-b__item__dot
  padding: 1.4rem 1.5rem 1.4rem 1.5rem
.img-infografica__item__numero, .img-infografica-b__item__numero
  font-size: 1.5rem
.img-infografica.color-secundario .img-infografica__item__dot:before, .img-infografica.color-secundario .img-infografica__item__dot:after, .img-infografica.color-secundario .img-infografica-b__item__dot:before, .img-infografica.color-secundario .img-infografica-b__item__dot:after, .img-infografica-b.color-secundario .img-infografica__item__dot:before, .img-infografica-b.color-secundario .img-infografica__item__dot:after, .img-infografica-b.color-secundario .img-infografica-b__item__dot:before, .img-infografica-b.color-secundario .img-infografica-b__item__dot:after
  background-color: transparent
.img-infografica__item:nth-child(2) .img-infografica__item__numero,.img-infografica__item:nth-child(6) .img-infografica__item__numero
  color: white
</style>
