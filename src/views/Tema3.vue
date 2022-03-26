<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Ciclo del servicio

    .row
      .col-md-6.mb-2(style="place-self:center;")
        h5.mb-0(data-aos="fade-up" style="line-height:22px;") El ciclo de servicio al cliente define los puntos de contacto por los cuales pasa el consumidor, desde el primer momento que hace contacto con el negocio hasta que llega a convertirse en un cliente leal.
        p.mt-3(data-aos="fade-up") El ciclo del servicio al cliente presenta diversos escenarios donde cada uno presenta sus necesidades y un valor percibido totalmente diferente, estos se conocen como: primer contacto, cierre de venta y servicio postventa. 
        p.mt-4(data-aos="fade-up") El ciclo del servicio se puede ejecutar mediante tres pasos:
      .col-md-6
        img(src="@/assets/curso/temas/tema3/1.png" data-aos="fade-right")

    TabsB.color-acento-contenido.mt-5
      .py-4.py-md-5(titulo="Paso I: etapa en la que se encuentra el cliente" :icono="require('@/assets/curso/temas/tema3/2.png')")
        .p-3
          h5 Etapa en la que se encuentra el cliente
          p Aquí se debe segmentar la base de clientes, agruparlos dependiendo de la etapa: de descubrimiento, evaluación, compra, experiencia, vínculo o promoción del servicio. Por otra parte, es importante tomar el tiempo que duran los clientes en cada una de las etapas para tener mayor información e indicadores en el futuro.
      .py-4.py-md-5(titulo="Paso 2: método de influencia" :icono="require('@/assets/curso/temas/tema3/3.png')")
        .p-3
          h5 Método de influencia
          p Dependiendo de la etapa se deben implementar métodos y técnicas con objetivos diferentes. Entre estas estrategias se tienen:

          .col-md-10.m-auto.mt-5
            .row.pb-3(style="border-bottom:2px #AFAFAF solid;")
              .col-md-1.col-lg-1.col-sm-2.mb-2(style="")
                img(src="@/assets/curso/temas/tema3/5.png" data-aos="fade-down" style="max-width:100px;")
              .col-md-11.col-lg-11.col-sm-10
                h5(data-aos="fade-up") Conciencia
                p(data-aos="fade-up") Aquí, el cliente identifica una necesidad y una solución que pueda satisfacer. Se debe tener presente que un cliente puede no estar familiarizado con los productos y servicios de la empresa y puede encontrar el negocio de muchas formas (internet, redes sociales, directorios, etc.). Es por esta razón que la página web y redes sociales de la empresa deben estar actualizadas.
            .row.pb-3.mt-4(style="border-bottom:2px #AFAFAF solid;")
              .col-md-1.col-lg-1.col-sm-2.mb-2(style="")
                img(src="@/assets/curso/temas/tema3/6.png" data-aos="fade-down" style="max-width:100px;")
              .col-md-11.col-lg-11.col-sm-10
                h5(data-aos="fade-up") Consideraciones
                p(data-aos="fade-up") Aquí el cliente decide si comprar en la empresa o en la competencia, para considerar su decisión, puede llegar a tener presente la reseña, calificación, comentarios y opiniones de los productos o servicios prestados por la empresa. Aquí es importante tener un blog de servicios y productos con toda la información relevante.
            .row.pb-3.mt-4(style="border-bottom:2px #AFAFAF solid;")
              .col-md-1.col-lg-1.col-sm-2.mb-2(style="")
                img(src="@/assets/curso/temas/tema3/7.png" data-aos="fade-down" style="max-width:100px;")
              .col-md-11.col-lg-11.col-sm-10
                h5(data-aos="fade-up") Conversión
                p(data-aos="fade-up") Aquí es donde el consumidor toma la decisión final y puede convertirse en el cliente que paga, es importante que el cliente tenga una experiencia de compra agradable y satisfactoria. Esta etapa requiere de ayuda muchas veces, que le permita impulsar al cliente por la decisión de compra. Por ejemplo, un chat en vivo que resuelva algunas dudas al cliente sería crucial para hacer efectiva la compra.
            .row.pb-3.mt-4(style="border-bottom:2px #AFAFAF solid;")
              .col-md-1.col-lg-1.col-sm-2.mb-2(style="")
                img(src="@/assets/curso/temas/tema3/8.png" data-aos="fade-down" style="max-width:100px;")
              .col-md-11.col-lg-11.col-sm-10
                h5(data-aos="fade-up") Experiencia
                p(data-aos="fade-up") Después de que el cliente realice la primera compra, la empresa debe mantener contacto y entablar una continua relación que le permita asegurarse de la completa satisfacción del cliente. Este contacto puede ser por medio de: correo electrónico, agradecer en el momento por la adquisición, realizar una encuesta o pedir comentarios con el objetivo de fortalecer el vínculo.
            .row.pb-3.mt-4(style="border-bottom:2px #AFAFAF solid;")
              .col-md-1.col-lg-1.col-sm-2.mb-2(style="")
                img(src="@/assets/curso/temas/tema3/9.png" data-aos="fade-down" style="max-width:100px;")
              .col-md-11.col-lg-11.col-sm-10
                h5(data-aos="fade-up") Retención
                p(data-aos="fade-up") Esta etapa se debe profundizar con el cliente, donde se busca fomentar una conexión proactiva y crear un vínculo emocional. Para esto se debe brindar seguimiento, recordatorios, mensajes de promoción donde se busca que el cliente regrese y realice otra compra. El objetivo es realizar #[em marketing] dirigido y ofrecer servicios diferenciados. Para eso se puede hacer uso de:
                p.mt-3 #[strong Ventas cruzadas:] cuando se ofrecen a los clientes ofertas que complementan la compra que realizaron (ejemplo: dispositivo móvil y una funda para el mismo). #[br] #[strong Venta extendida:] cuando se ofrece versiones o modelos que pueden satisfacer mejor las necesidades del cliente. Un ejemplo puede ser los servicios de internet que ofrecen televisión y llamadas. #[br] #[strong #[em Software] de gestión de clientes:] cuando se tiene la información de lo que compran los clientes, se pueden generar estrategias para ofrecer a los clientes productos y servicios adecuados según sus necesidades.
            .row.pb-3.mt-4
              .col-md-1.col-lg-1.col-sm-2.mb-2(style="")
                img(src="@/assets/curso/temas/tema3/10.png" data-aos="fade-down" style="max-width:100px;")
              .col-md-11.col-lg-11.col-sm-10
                h5(data-aos="fade-up") Promoción del servicio
                p(data-aos="fade-up") Después de retener al cliente, después de generar una relación con el cliente y los productos o servicios, es aquí donde se vuelven defensores de la marca y empiezan a recomendar. Entonces se deberá clasificar como cliente especial, VIP o habitual. Es preciso mencionar que la empresa aplica estrategias, promociones o descuentos a estos clientes para generar fidelidad con la marca.

      .py-4.py-md-5(titulo="Paso 3: análisis de impacto y conclusiones" :icono="require('@/assets/curso/temas/tema3/4.png')")
        .p-3
          h5 Análisis de impacto y conclusiones
          p El tiempo se convierte en la variable determinante para la evaluación y esto permitirá analizar los indicadores como: aumento de ventas, que grupo de clientes compra más, costos del producto, servicio al cliente, etc. Esto permitirá avanzar y planear acciones futuras. 

    p.mt-5(data-aos="fade-up") A partir de la información anterior, se pueden agrupar y comparar los momentos de verdad en el servicio al cliente. A continuación, se estudiarán cuáles son los momentos y su importancia para la empresa o negocio.

    .row.mt-5
      .col-md-5
        h5(data-aos="fade-left") Un momento de verdad se considera como determinante para la satisfacción del consumidor y la calidad de su experiencia con la marca de la empresa.
      .col-md-7
        p(data-aos="fade-right") Estos momentos son ocasiones importantes que logran impactar de forma directa la experiencia de los clientes o usuarios. En otras palabras, hace referencia a todas las ocasiones en las que el cliente entra en contacto con la empresa y logra formar una opinión sobre la calidad de sus productos o servicios. Es por esta razón que deben tener una gestión sensible y cuidadosa.
        p.mt-4(data-aos="fade-right") A continuación se conocerán estos momentos:

    PasosA.col-md-9.m-auto.color-acento-contenido.mt-5(tipo="n")
      .p-3
        h5(data-aos="zoom-in" style="text-align:left;") Momento cero de la verdad
        p(data-aos="zoom-in" style="text-align:left;") Aquí el cliente reconoce que tiene la necesidad de adquirir un producto o servicio y por medio de internet (otros medios) decide consultar para dar solución y satisfacerla. Los avances tecnológicos y el comercio electrónico permiten que el cliente consulte e interactúe por medio de chat sobre la diferencia de varios productos o servicios en el mercado.
      .p-3
        h5(data-aos="zoom-in" style="text-align:left;") Primer momento de la verdad
        p(data-aos="zoom-in" style="text-align:left;") En este momento el cliente se encuentra frente al producto, ya sea de forma presencial o virtual. Este momento es crucial y dependerá si el producto que recibió se parece o no al de la foto ofrecida (la primera impresión es fundamental y puede darse entre 3 a 7 segundos). Pues de esto dependerá el nivel de satisfacción del cliente y es por esta razón que se debe cuidar cada detalle.
      .p-3
        h5(data-aos="zoom-in" style="text-align:left;") Segundo momento de la verdad
        p(data-aos="zoom-in" style="text-align:left;") Aquí el cliente ya compró el producto y se encuentra usándolo. En este momento se determina si el producto cumplió con las expectativas del cliente, de ser así, es donde se puede entablar una relación con el cliente a largo plazo.  Su objetivo es de encantar y motivar al cliente para que este permanezca en relación, generando así reputación y alcance de la marca. Un dato curioso en este momento, es que puede ocurrir antes de la compra, por ejemplo, las empresas o plataformas que dan unos días o meses gratis de sus productos para generar esa atracción.
      .p-3
        h5(data-aos="zoom-in" style="text-align:left;") Tercer momento de la verdad
        p(data-aos="zoom-in" style="text-align:left;") Los comentarios y la respuesta emocional del cliente hacia sus productos o servicios permitirán la lealtad y fidelidad con la marca, las opiniones pueden influir en las de los familiares, amigos y desconocidos. A partir de la publicidad brindada por el cliente, se pueden atraer nuevos clientes y es entonces donde se convierte en el momento cero para esas nuevas personas.

    p.mt-5(data-aos="fade-up") Por otra parte, es importante recordar que la gestión del momento de verdad no se puede improvisar y debe aplicarse de forma eficaz, para su implementación es necesario tener en cuenta las siguientes estrategias o consejos de acción:

    SlyderD.mt-5(:datos="datosSlyder") 


  
</template>

<script>
import $ from 'jquery'
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Estrategia centralizada en el cliente',
        texto:
          'Todo momento de verdad que se de en la empresa, debe estar enfocado en la satisfacción del cliente en hacer que mejore la experiencia. Donde se conviertan en momento de placer y no de estrés.',
        imagen: require('@/assets/curso/temas/tema3/11.png'),
      },
      {
        titulo: 'Establecer protocolos',
        texto:
          'La empresa debe contar con protocolos coherentes y deben ser conocidos y cumplidos por todos los implicados. Aquí es importante tener toda la información posible del cliente y saber cómo actuar o reaccionar en cualquier escenario posible entre el cliente y la empresa. ',
        imagen: require('@/assets/curso/temas/tema3/12.png'),
      },
      {
        titulo: 'Servicio al cliente',
        texto:
          'Debe existir un empoderamiento de la línea que se encuentra enfrente del servicio al cliente y que todas las personas involucradas o que intervienen en el proceso tengan la información necesaria que le permita al cliente una mejor atención y satisfacción. ',
        imagen: require('@/assets/curso/temas/tema3/13.png'),
      },
      {
        titulo: 'Asumir riesgos',
        texto:
          'Es importante salir de la zona de confort y brindarle al cliente una experiencia moderna, es importante que la empresa empiece a dejar cosas que ya no funcionan o empezar a utilizar otras alternativas que le permitan acercarse más a las necesidades de los clientes. ',
        imagen: require('@/assets/curso/temas/tema3/14.png'),
      },
      {
        titulo: 'Recompensar a los colaboradores',
        texto:
          'La motivación de los colaboradores debe ser elevada, ser estimulados por resultados, estar en constante capacitación, hacer uso de las tecnologías para que fortalezcan su compromiso con la empresa. Se busca generar empleados más comprometidos.',
        imagen: require('@/assets/curso/temas/tema3/15.png'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
    $('.slyder-d__content .col-md-8.col-lg-6').removeClass('col-lg-6')
    $('.slyder-d__content .col-md-8').addClass('col-lg-8')
  },
  updated() {
    this.$aosRefresh()
    $(document).ready(function() {
      $('.slyder-d__content .col-md-8.col-lg-6').removeClass('col-lg-6')
      $('.slyder-d__content .col-md-8').addClass('col-lg-8')
    })
  },
}
</script>
<style lang="sass">
.tabs-b__tab
  border: none
.pasos-a.color-acento-contenido .pasos-a__circle div
  color: #ffffff
.pasos-a__circle
  width: 70px
  height: 70px
  min-width: 70px
.pasos-a__linea__esquina__linea
  border-radius: 0px
</style>
