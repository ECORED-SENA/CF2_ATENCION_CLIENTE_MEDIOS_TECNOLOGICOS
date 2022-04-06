<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Manual de funciones y procedimientos

    .row
      .col-md-6.mb-2
        p(data-aos="fade-left") Las organizaciones a través del tiempo se han dado a la tarea de indicar a sus participantes la forma en la cual deben aplicar y para ello han utilizado como principal instrumento el manual. Pero antes de iniciar por explicar las funciones y procedimientos, es importante conocer el concepto de manual.
        p.mt-4(data-aos="fade-left")  Se puede entender un manual, como los #[strong instrumentos que apoyan el funcionamiento de la empresa, porque contienen información sobre las bases jurídicas, facultades, estructura orgánica, objetivos, políticas, responsabilidad, funciones y actividades de la misma]. De lo anterior se puede decir que el objetivo es proveer los lineamientos, reglas o normas de cómo hacer uso de algo de una forma clara, sistemática y metódica.
      .col-md-6
        img(src="@/assets/curso/temas/tema1/1.png" data-aos="fade-right")

    .row.mt-5.p-5(style="background-color:#FFDE96;")
      .col-md-2.text-center.col-lg-2.col-sm-4(style="place-self:center;")
        img(src="@/assets/curso/temas/tema1/2.png" data-aos="zoom-in" style="display:inline;max-width:120px;")
      .col-md-10.col-lg-10.col-sm-8(style="place-self:center;")
        p(data-aos="fade-right") Por otra parte, según Terry (1993), los manuales administrativos: #[br] #[strong “son registros escritos de información e instrucciones que conciernen al empleado y pueden ser utilizados para orientar los esfuerzos de un empleado en una empresa”.]

    p.mt-5(data-aos="fade-up") En otras palabras, es un instrumento que apoya el funcionamiento de la empresa y que indica el paso a paso cómo se realiza una actividad específica. A continuación, se mencionan los tipos de manuales que utiliza una organización:

    ImagenInfografica.color-secundario.mt-4.col-md-9.m-auto
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema1/3.svg', alt='')
      .tarjeta.color-acento-botones.p-3(x="48%" y="7%" numero="01" style="background-color:#F6F6F6;border-radius:0px;")
        div(style="background-color:#FFDE96;width:30%;height:7px;")
        .h5.mb-2.mt-3 Manual de procedimientos
        p Este contiene la información detallada, ordenada, sistemática e integral sobre las actividades y responsabilidades que se realizan en un área específica de la organización.
      .tarjeta.color-acento-botones.p-3(x="90%" y="29%" numero="02" style="background-color:#F6F6F6;border-radius:0px;")
        div(style="background-color:#FCB315;width:30%;height:7px;")
        .h5.mb-2.mt-3 Manual de procesos
        p Es una guía paso a paso con el propósito de establecer la secuencia de pasos para que una empresa o área consiga realizar sus funciones.
      .tarjeta.color-acento-botones.p-3(x="90%" y="70%" numero="03" style="background-color:#F6F6F6;border-radius:0px;")
        div(style="background-color:#A4A3FF;width:30%;height:7px;")
        .h5.mb-2.mt-3 Manual de operaciones
        p Es aquel que se encarga de manera resumida detallar en forma general el manejo de una empresa. Dan un detalle de cómo está estructurada y de los diferentes roles y funciones que en ella se llevan a cabo y se desempeñan en cada departamento.
      .tarjeta.color-acento-botones.p-3(x="48%" y="92%" numero="04" style="background-color:#F6F6F6;border-radius:0px;")
        div(style="background-color:#7F79FB;width:30%;height:7px;")
        .h5.mb-2.mt-3 Manual de calidad
        p Es el documento en el que se centran los objetivos, los estándares, las políticas y los instrumentos con los que se dota una organización con respecto a la calidad, descritos de manera general.
      .tarjeta.color-acento-botones.p-3(x="6%" y="70%" numero="05" style="background-color:#F6F6F6;border-radius:0px;")
        div(style="background-color:#4B4AEF;width:30%;height:7px;")
        .h5.mb-2.mt-3 Manual de políticas
        p En este documento se encuentran todas las políticas sobre las cuales se rige la operación de la organización, el cual permitirá normalizarse en todas las áreas de la misma.
      .tarjeta.color-acento-botones.p-3(x="6%" y="29%" numero="06" style="background-color:#F6F6F6;border-radius:0px;")
        div(style="background-color:#FCB315;width:30%;height:7px;")
        .h5.mb-2.mt-3 Manual de usuario
        p Contiene un conjunto de informaciones, instrucciones y advertencias relacionadas con el uso de un determinado producto o servicio.

    h3.mt-5(data-aos="fade-up") Manual de procedimiento
    p(data-aos="fade-up") Es una guía con el objetivo de establecer la secuencia de pasos para que una empresa, organización o área consiga realizar sus funciones. Por otra parte, permite establecer el tiempo, orden, reglas, políticas y responsabilidades de actividades a desempeñar. Esto permitirá introducir a las personas de forma rápida para entender y realizar las actividades.
    p.mt-4(data-aos="fade-up") Es importante resaltar que es necesario generar estrategias para la elaboración e implementación, debido a que una mala implementación puede generar documentos que con el tiempo nadie utilizará, actualizarán y quedarán guardados. Es por esta razón, que se iniciará por definir algunos conceptos importantes para la elaboración de un buen manual de procedimientos:

    .row.mt-5
      .col-sm-6.col-xl-6.col-md-6.col-lg-6.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false" style="background-color:#FFDE96;")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.p-5(style="background-color:#FFDE96;")
              figure.text-center
                img(src="@/assets/curso/temas/tema1/5.png" style="display:inline;max-width:100px;" data-aos="fade-up")
              h5.mb-0.mt-4(data-aos="zoom-in") Procedimiento
              p(data-aos="zoom-in") Es una serie de pasos bien definidos para conseguir un objetivo específico. Estos pueden ser de tipo: administrativo, judiciales, médicos, informáticos, de actuación, etc.  
            .tarjeta-flip__contenido(style="background-color:transparent;")
              figure.text-center
                img.pb-4.pt-4(src="@/assets/curso/temas/tema1/4.png")
      .col-sm-6.col-xl-6.col-md-6.col-lg-6.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false" style="background-color:#FFDE96;")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.p-5(style="background-color:#FFDE96;")
              figure.text-center
                img(src="@/assets/curso/temas/tema1/7.png" style="display:inline;max-width:100px;" data-aos="fade-up")
              h5.mb-0.mt-4(data-aos="zoom-in") Proceso
              p(data-aos="zoom-in") Es un conjunto de actividades mutuamente relacionadas que, al interactuar juntas, convierten los elementos de entrada en resultados. #[br] #[br] La diferencia radica en que un proceso puede seguir uno o más procedimientos. 
            .tarjeta-flip__contenido(style="background-color:transparent;")
              figure.text-center
                img.pb-4.pt-4(src="@/assets/curso/temas/tema1/6.png")

    p.mt-5(data-aos="fade-up") Por ejemplo, si tengo hambre, podría ordenar comida a domicilio. Este es un proceso que implica actividades como:

    .row.mt-5.m-auto.justify-content-center
      .col-md-3.col-lg-2.col-xl-2.col-sm-4
        img(src="@/assets/curso/temas/tema1/8.png" data-aos="fade-up")
      .col-md-3.col-lg-2.col-xl-2.col-sm-4.mt-5
        img(src="@/assets/curso/temas/tema1/9.png" data-aos="fade-down")
      .col-md-3.col-lg-2.col-xl-2.col-sm-4
        img(src="@/assets/curso/temas/tema1/10.png" data-aos="fade-up")
      .col-md-3.col-lg-2.col-xl-2.col-sm-4.mt-5
        img(src="@/assets/curso/temas/tema1/11.png" data-aos="fade-down")
      .col-md-3.col-lg-2.col-xl-2.col-sm-4
        img(src="@/assets/curso/temas/tema1/12.png" data-aos="fade-up")
      .col-md-3.col-lg-2.col-xl-2.col-sm-4.mt-5
        img(src="@/assets/curso/temas/tema1/13.png" data-aos="fade-down")

    p.mt-5(data-aos="fade-up") El ejemplo muestra el procedimiento que lleva el proceso. En este caso específico, es  preparar la comida por el establecimiento. Dado que cada platillo es preparado de forma diferente, el cocinero o chef tendrá una receta de la cual se guíe para prepararlo. Por lo tanto, los procesos tienen un alcance más general y comúnmente intervienen varias personas; los procedimientos son más específicos, detallan cómo proceder para la ejecución de cualquier tarea. Es entonces, en lugar de definir solo procedimientos, que se puede generalizar más y establecer un manual de procesos y procedimientos.
    p.mt-4(data-aos="fade-up") Para elaborar un manual de procedimientos es necesario tener presente los siguientes pasos: 

    AcordionA.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.ps-3(titulo="I Establecer los elementos y estructura que tendrá el manual")
        .col-12.ps-5
          p Esto permitirá contemplar toda la información que se requiere plasmar. Aquí se encuentran algunos elementos que permiten describir cada proceso y procedimiento, entre estos se tienen:
          p #[strong a. Objetivo:] describe el propósito o resultado que se obtendrá del proceso o procedimiento. 
          p #[strong b. Justificación:] describe el porqué de la existencia e importancia del proceso.  
          p #[strong c. Alcance:] establece los límites que debe tener el proceso.   
          p #[strong d. Participantes:] son las personas, sistemas u otros procesos o procedimientos que realizan las actividades.  
          p #[strong e. Diagrama:] se debe realizar un diagrama del proceso, donde se muestre el proceso completo en forma gráfica. Se utiliza mucho el diagrama de proceso en la notación BPMN.  
          p #[strong f. Actividades:] son las actividades o trabajos que hay que realizar como parte del proceso o procedimiento. Estos tienen algunos atributos como:  nombre, descripción, responsable, entradas, salidas, reglas de la empresa o negocio.  
          p #[strong g. Políticas o reglas:] describen las regulaciones sobre el cual opera el negocio o la empresa.  
          p #[strong h. Pre y post condiciones:] son aquellas que se deben cumplir para que inicie el proceso o procedimiento y los resultados obtenidos después de ejecutar.   
          p #[strong i. Eventos de inicio y fin:] son situaciones o sucesos que permiten que inicie o termine el proceso. Este representa la estructura que tendrá el documento, como: carátula, índice, control de versiones, introducción, audiencia objetivo, contenido, glosario.
      .row.ps-3(titulo="II Definir el alcance de los involucrados")
        .row.col-12.ps-5 
          .col-md-5.mb-2
            img(src="@/assets/curso/temas/tema1/14.png")
          .col-md-7(style="place-self:center;")
            p Aquí se deben definir todos los procedimientos, entre estos pueden ser: ventas, operaciones, administración, finanzas, entre otros. También es importante incluir los límites e involucrar a las personas y áreas que lleven a cabo las actividades del mismo.
      .row.ps-3(titulo="III Establecer los procesos y procedimientos")
        .row.col-12.ps-5
          p Se definen los procesos y procedimientos que se van a incluir, aquí se puede tener presente un ejemplo: si se fueran a establecer procesos o procedimientos para el área de ventas, se incluye, ver tabla 1
          p.mt-4.p-2(style="border-left:4px #FCB315 solid;") #[strong Tabla 1] Procesos y procedimientos para el área de ventas, operaciones, administración y finanzas

          .tabla-a.color-acento-contenido.mt-3.p-0
            table
              thead
                tr
                  th Procesos y procedimientos para ventas
                  th Operaciones
                  th Administración y finanzas
              tbody
                tr.bg-white
                  td Planeación y ejecución de campañas de #[em marketing]
                  td Compras
                  td Facturación
                tr.bg-white
                  td Seguimiento y atención a prospectos
                  td Plan de producción
                  td Cobranza
                tr.bg-white
                  td Elaboración y presentación de propuestas
                  td Fabricación o entrega de servicios
                  td Contabilidad
                tr.bg-white
                  td Pedidos
                  td Logística
                  td Trámite de pago
                tr.bg-white
                  td Etc.
                  td Etc.
                  td Etc.
      .row.ps-3(titulo="IV Ultimar el manual")
        .row.col-12.ps-5 
          .col-md-5.mb-2
            img(src="@/assets/curso/temas/tema1/15.png")
          .col-md-7
            p Aquí se debe verificar la información que se definió en la estructura y en caso de no conocerse debe obtener de expertos en el área o la materia, después se debe transcribir mediante un control de revisión y versiones que se van generando. Esta debe realizarse de lo general a lo particular en cada proceso o procedimiento. Se recomienda seguir una secuencia de la siguiente manera:
            p.mt-4 #[strong a.] Definir objetivo
            p #[strong b.] Alcance
            p #[strong c.] Indentificar actividades
            p #[strong d.] Responsables y participantes
            p #[strong e.] Quien realiza la actividad
            p #[strong f.] Diagrama de flujo de trabajo
            p #[strong g.] Reglas de la empresa
            p #[strong h.] Definir el pre - post condiciones
            p #[strong i.] Creación de datos (entrada/salida)
            p #[strong j.] Descripción de cada proceso y actividad

      .row.ps-3(titulo="V Validar el manual")
        .row.col-12.ps-5 
          .col-md-5.mb-2
            img(src="@/assets/curso/temas/tema1/16.png")
          .col-md-7(style="place-self:center;")
            p Después de tener la primera impresión se debe validar el manual de procedimientos, esto consiste en corroborar que la información coincida con los procesos o procedimientos que en realidad se desempeñan en el cargo o para dicha actividad. Este se puede socializar en grupo y con el personal involucrado. 







      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
    indicadorTarjetaFlip: true,
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
  left: 115%
.img-infografica__item__dot, .img-infografica-b__item__dot
  padding: 1.4rem 1.5rem 1.4rem 1.5rem
.img-infografica__item__numero, .img-infografica-b__item__numero
  font-size: 1.1rem
.img-infografica.color-secundario .img-infografica__item__dot:before, .img-infografica.color-secundario .img-infografica__item__dot:after, .img-infografica.color-secundario .img-infografica-b__item__dot:before, .img-infografica.color-secundario .img-infografica-b__item__dot:after, .img-infografica-b.color-secundario .img-infografica__item__dot:before, .img-infografica-b.color-secundario .img-infografica__item__dot:after, .img-infografica-b.color-secundario .img-infografica-b__item__dot:before, .img-infografica-b.color-secundario .img-infografica-b__item__dot:after
  background-color: transparent
.tarjeta--azul
  background-color: #E8E8FF
.acordion__activo
  background-color: #D1D1FF
</style>
