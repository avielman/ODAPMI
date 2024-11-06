import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../assets/css/style.css', '../assets/lib/flaticon/font/flaticon.css', '../assets/lib/owlcarousel/assets/owl.carousel.min.css',
    '../assets/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css'
  ]
})
export class AppComponent {
  title = 'ODAPMI';
  logo = '../assets/img/logo.jpg';
  activeIndex: number = 0;



  nosotros = {
  "email": 'ongodapmi@gmail.com',
  "cel": '+502 5555 5555',
  "url": "odapmi.org",
  "horarios": '8.00AM - 5.00PM',
  "direccion": 'Guatemala, Ciudad',
  "descripcion": 'La ayuda humanitaria es la principal acción de la mayoría de las ONGs del mundo, orientadas a atender a las personas afectadas por catástrofes humanas o naturales y guerras. Las ayuda no solo se centra en la previsión de de bienes básicos y servicios sanitarios, sino también en la defensa de los derechos humanos, protección de las víctimas, denuncia social, presión política, inclusión y acompañamientos. Hay que subrayar que la ayuda humanitaria reside en las personas y no en los Estados, el objetivo es favorecer a aquellos que sufren. Las personas dedicadas a la ayuda humanitaria además de las actividades que realizan y los objetivos que cumplen, tienen que presentar unos valores éticos y morales para concienciar a la sociedad. Constantemente la ayuda humanitaria es necesaria, ya sea económica o material, muchas personas te necesitan.',
  "descripcion2": 'Cooperación Internacional para el desarrollo, Ayuda humanitaria y de emergencia, Intercanvios culturales y fomento de la solidaridad, Campañas informativas, formativas y divulgativas, Colaboración con otras entidades, instituciones y colectivos, Participación activa en campañas de otras associaciones en projectos del ámbito de la solidaridad y cooperación, Cocienciación de la sociedad civil.',
  "categorias": 'Ayuda humanitaria, Cooperación internacional, donaciones'
  };

  acerca = {
    "titulo": "Acerca de",
    "subtitulo": "Únete a nosotros en nuestro Día de la Caridad y sé parte de la solución. Juntos podemos marcar la diferencia en la vida de quienes más lo necesitan.",
    "descripcion": "¡Corre por una buena causa! Únete a nuestra carrera benéfica y ayúdanos a construir un hogar para nuestros adultos mayores y niños en estado de pobreza extrema. ¡Todos juntos podemos hacer realidad este sueño!",
    "lugares": ["San Gaspar Ixchil", "Santa Bárbara Huehuetenango", "Cahabón", "Colotenango", "Lanquín"]
  }

  servicios = [{
    "titulo": "Día Internacional de la Paz",
    "descripcion": "El Día Internacional de la Paz fue establecido en 1981 por la Asamblea General de las Naciones Unidas, celebrándose cada año el 21 de septiembre. En este 2024, conmemoramos un hecho significativo: el 25 aniversario de la adopción de la Declaración y Programa de Acción sobre una Cultura de Paz por parte de la ONU. Este documento reafirma que la paz no es simplemente la ausencia de conflictos, sino un estilo de vida que todos podemos cultivar activamente.",
    "iconclass": "flaticon-house",
    "link": ""
  },
  {
    "titulo": "Guatemala Celebra el Día del Niño con Amor, Alegría e Ilusión",
    "descripcion": "El pasado 1 de octubre, en Guatemala, se celebró el Día del Niño, una fecha muy especial que la ONG conmemora año y una vez más ha hecho de esta celebración un día inolvidable para los más pequeños.",
    "iconclass": "flaticon-food",
    "link": ""
  },
  {
    "titulo": "Día Internacional de la Niña",
    "descripcion": "Cada 11 de octubre, el mundo celebra el Día Internacional de la Niña, una fecha que busca reconocer los derechos y desafíos únicos que enfrentan millones de niñas a nivel global. Instituido por la Asamblea General de las Naciones Unidas en 2011, este día nos invita a reflexionar sobre la necesidad urgente de proteger la dignidad, la integridad y el futuro de las niñas, especialmente aquellas en situación de vulnerabilidad. ",
    "iconclass": "flaticon-grooming",
    "link": ""
  },
  {
    "titulo": "Día Internacional de las Personas sin Hogar",
    "descripcion": "Cada 10 de octubre, se conmemora el Día Internacional de las Personas sin Hogar, una fecha clave para visibilizar la realidad de millones de personas que viven sin un techo o un hogar seguro. Aunque en algunos países esta celebración tiene lugar en otras fechas, su objetivo es el mismo: concienciar y generar acciones concretas para ayudar a quienes enfrentan esta situación tan vulnerable.",
    "iconclass": "flaticon-cat",
    "link": ""
  },
  {
    "titulo": "Día Mundial de la Alimentación 2024",
    "descripcion": "Cada 16 de octubre desde 1979, el mundo se une para conmemorar el Día Mundial de la Alimentación, una iniciativa promovida por la Organización de las Naciones Unidas para la Agricultura y la Alimentación (FAO). Este día tiene como objetivo sensibilizar sobre la importancia de garantizar una alimentación adecuada para todos y luchar contra el hambre, un desafío global que la Agenda 2030 busca erradicar, con su meta de “hambre cero”",
    "iconclass": "flaticon-dog",
    "link": ""
  },
  {
    "titulo": "Unidos por un Mundo Sin Pobreza",
    "descripcion": "El 17 de octubre de cada año, el mundo se une para conmemorar el Día Internacional para la Erradicación de la Pobreza, una fecha destinada a concienciar sobre la necesidad urgente de acabar con la pobreza y la indigencia en todas sus formas, especialmente en las regiones más empobrecidas del mundo.",
    "iconclass": "flaticon-vaccine",
    "link": ""
  }];

  redes = [{
      "nombre": "www.x.com",
      "icono": "fa-twitter"
    },
    {
      "nombre": "www.facebook.com",
      "icono": "fa-facebook-f"
    },
    {
      "nombre": "www.linkedin.com",
      "icono": "fa-linkedin-in"
    },
    {
      "nombre": "www.instagram.com",
      "icono": "fa-instagram"
    },
    {
      "nombre": "www.youtube.com",
      "icono": "fa-youtube"
    }
  ]

  citas = [
    {
      "tipo": "en el sitio",
      "descripcion": "Cita presencial en nuestras oficinas"
    },
    {
      "tipo": "telefónica",
      "descripcion": "Llamada telefónica para tratar el asunto"
    },
    {
      "tipo": "email",
      "descripcion": "Intercambio de información por correo electrónico"
    },
    {
      "tipo": "whatsapp",
      "descripcion": "Conversación a través de la aplicación WhatsApp"
    }
  ];
  carrousel = [{
    "Titulo": "Sembrando esperanza,",
    "subtitulo": "cosechando futuro.",
    "imagen": "../assets/img/carousel-1.jpg",
    "descripcion": "Únete a nosotros y juntos crearemos un impacto positivo.",
    "cita": "Agendar cita",
    "leer": "Leer más"
  },
  {
    "Titulo": "Transformando vidas,",
    "subtitulo": "un paso a la vez.",
    "imagen": "../assets/img/carousel-2.jpg",
    "descripcion": "Dona hoy y transforma una vida.",
    "cita": "Agendar cita",
    "leer": "Leer más"
  },
  ];

  caracteristicas = {
    "titulo": "Donde contactarnos?",
    "subtitulo1": "Beneficios",
    "subtitulo2": "de Donarnos",
    "descripcion": "Sé parte de una comunidad comprometida con hacer del mundo un lugar más justo y equitativo. Al donar te conecta con tu lado más humano y te brinda la satisfacción de saber que estás marcando la diferencia. Y recuerda: estás invirtiendo en el futuro de nuestros niños, brindándoles educación, salud y oportunidades para crecer.",
    "beneficios": ["Impacto directo", "Cambio positivo", "Crecimiento conjunto", "Futuro Mejor"]
  }

  changeSlide(index: number) {
    this.activeIndex = index;
  }

}
