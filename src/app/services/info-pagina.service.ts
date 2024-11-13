import { Injectable } from '@angular/core';

interface Home {
  nosotros: {
    email: string;
    cel: string;
    url: string;
    horarios: string;
    direccion: string;
    descripcion: string;
    descripcion2: string;
    categorias: string;
  };
  acerca: {
    titulo: string;
    subtitulo: string;
    descripcion: string;
    lugares: string[];
  };
  servicios: Array<{
    titulo: string;
    descripcion: string;
    iconclass: string;
    link: string;
  }>;
  redes: Array<{
    nombre: string;
    icono: string;
  }>;
  citas: Array<{
    tipo: string;
    descripcion: string;
  }>;
  carrousel: Array<{
    Titulo: string;
    subtitulo: string;
    imagen: string;
    descripcion: string;
    cita: string;
    leer: string;
  }>;
  caracteristicas: {
    titulo: string;
    subtitulo1: string;
    subtitulo2: string;
    descripcion: string;
    beneficios: string[];
  };
  donaciones: {
    titulo: string;
    Subtitulo1: string;
    Subtitulo2: string;
    opciones: Array<{
      tipo: string;
      moneda: string;
      precio: string;
      plazo: string;
      beneficio1: string;
      beneficio2: string;
      beneficio3: string;
      beneficio4: string;
      imagen: string;
    }>;
  };
  integrantes: {
    titulo: string;
    subtitulo1: string;
    subtitulo2: string;
    miembros: Array<{
      imagen: string;
      nombre: string;
      puesto: string;
      twitter: string;
      facebook: string;
      linkedin: string;
      instagram: string;
    }>;
  };
  testimonios: {
    titulo: string;
    subtitulo1: string;
    subtitulo2: string;
    testimonios: Array<{
      imagen: string;
      nombre: string;
      profesion: string;
      testimonio: string;
    }>;
  };
  blogs: {
    titulo: string;
    subtitulo1: string;
    subtitulo2: string;
    posts: Array<{
      titulo: string;
      descripcion: string;
      imagen: string;
      usuario: string;
      comentarios: string;
    }>;
  };
}

@Injectable({
  providedIn: 'root'
})

export class InfoPaginaService {
  homePage: Home;
  
  home: Home = {
    "nosotros": {
      "email": "ongodapmi@gmail.com",
      "cel": "+502 5555 5555",
      "url": "odapmi.org",
      "horarios": "8.00AM - 5.00PM",
      "direccion": "Guatemala, Ciudad",
      "descripcion": "La ayuda humanitaria es la principal acción de la mayoría de las ONGs del mundo, orientadas a atender a las personas afectadas por catástrofes humanas o naturales y guerras. Las ayuda no solo se centra en la previsión de de bienes básicos y servicios sanitarios, sino también en la defensa de los derechos humanos, protección de las víctimas, denuncia social, presión política, inclusión y acompañamientos. Hay que subrayar que la ayuda humanitaria reside en las personas y no en los Estados, el objetivo es favorecer a aquellos que sufren. Las personas dedicadas a la ayuda humanitaria además de las actividades que realizan y los objetivos que cumplen, tienen que presentar unos valores éticos y morales para concienciar a la sociedad. Constantemente la ayuda humanitaria es necesaria, ya sea económica o material, muchas personas te necesitan.",
      "descripcion2": "Cooperación Internacional para el desarrollo, Ayuda humanitaria y de emergencia, Intercanvios culturales y fomento de la solidaridad, Campañas informativas, formativas y divulgativas, Colaboración con otras entidades, instituciones y colectivos, Participación activa en campañas de otras associaciones en projectos del ámbito de la solidaridad y cooperación, Cocienciación de la sociedad civil.",
      "categorias": "Ayuda humanitaria, Cooperación internacional, donaciones"
    },
    "acerca": {
      "titulo": "Acerca de",
      "subtitulo": "Únete a nosotros en nuestro Día de la Caridad y sé parte de la solución. Juntos podemos marcar la diferencia en la vida de quienes más lo necesitan.",
      "descripcion": "¡Corre por una buena causa! Únete a nuestra carrera benéfica y ayúdanos a construir un hogar para nuestros adultos mayores y niños en estado de pobreza extrema. ¡Todos juntos podemos hacer realidad este sueño!",
      "lugares": [
        "San Gaspar Ixchil",
        "Santa Bárbara Huehuetenango",
        "Cahabón",
        "Colotenango",
        "Lanquín"
      ]
    },
    "servicios": [
      {
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
        "descripcion": "Cada 11 de octubre, el mundo celebra el Día Internacional de la Niña, una fecha que busca reconocer los derechos y desafíos únicos que enfrentan millones de niñas a nivel global. Instituido por la Asamblea General de las Naciones Unidas en 2011, este día nos invita a reflexionar sobre la necesidad urgente de proteger la dignidad, la integridad y el futuro de las niñas, especialmente aquellas en situación de vulnerabilidad.",
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
        "descripcion": "Cada 16 de octubre desde 1979, el mundo se une para conmemorar el Día Mundial de la Alimentación, una iniciativa promovida por la Organización de las Naciones Unidas para la Agricultura y la Alimentación (FAO). Este día tiene como objetivo sensibilizar sobre la importancia de garantizar una alimentación adecuada para todos y luchar contra el hambre, un desafío global que la Agenda 2030 busca erradicar, con su meta de 'hambre cero'.",
        "iconclass": "flaticon-dog",
        "link": ""
      },
      {
        "titulo": "Unidos por un Mundo Sin Pobreza",
        "descripcion": "El 17 de octubre de cada año, el mundo se une para conmemorar el Día Internacional para la Erradicación de la Pobreza, una fecha destinada a concienciar sobre la necesidad urgente de acabar con la pobreza y la indigencia en todas sus formas, especialmente en las regiones más empobrecidas del mundo.",
        "iconclass": "flaticon-vaccine",
        "link": ""
      }
    ],
    "redes": [
      {
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
    ],
    "citas": [
      {
        "tipo": "En el sitio",
        "descripcion": "Cita presencial en nuestras oficinas"
      },
      {
        "tipo": "Telefónica",
        "descripcion": "Llamada telefónica para tratar el asunto"
      },
      {
        "tipo": "Email",
        "descripcion": "Intercambio de información por correo electrónico"
      },
      {
        "tipo": "Whatsapp",
        "descripcion": "Conversación a través de la aplicación WhatsApp"
      }
    ],
    "carrousel": [
      {
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
      }
    ],
    "caracteristicas": {
      "titulo": "Donde contactarnos?",
      "subtitulo1": "Beneficios",
      "subtitulo2": "de Donar",
      "descripcion": "Sé parte de una comunidad comprometida con hacer del mundo un lugar más justo y equitativo. Al donar te conecta con tu lado más humano y te brinda la satisfacción de saber que estás marcando la diferencia. Y recuerda: estás invirtiendo en el futuro de nuestros niños, brindándoles educación, salud y oportunidades para crecer.",
      "beneficios": [
        "Impacto directo",
        "Cambio positivo",
        "Crecimiento conjunto",
        "Futuro Mejor"
      ]
    },
    "donaciones": {
      "titulo": "",
      "Subtitulo1": "Escoja tipo",
      "Subtitulo2": "de apadrinamiento",
      "opciones": [
        {
          "tipo": "Apadrinamiento directo",
          "moneda": "Q",
          "precio": "500",
          "plazo": "/mensual",
          "beneficio1": "Vínculo personal",
          "beneficio2": "Seguimiento personalizado",
          "beneficio3": "Motivación para el niño",
          "beneficio4": "Impacto directo",
          "imagen": "../assets/img/apadrinados1.jpg"
        },
        {
          "tipo": "Apadrina proyectos",
          "moneda": "Q",
          "precio": "6000",
          "plazo": "/anual",
          "beneficio1": "Impacto a largo plazo",
          "beneficio2": "Desarrollo sostenible",
          "beneficio3": "Transparencia",
          "beneficio4": "Flexibilidad",
          "imagen": "../assets/img/apadrinados2.jpg"
        },
        {
          "tipo": "Apadrinamiento virtual",
          "moneda": "Q",
          "precio": "1000",
          "plazo": "/mensual",
          "beneficio1": "Impacto global",
          "beneficio2": "Accesibilidad",
          "beneficio3": "Bajo costo",
          "beneficio4": "Flexibilidad",
          "imagen": "../assets/img/apadrinados3.jpg"
        }
      ]
    },
    "integrantes": {
      "titulo": "Miembros del equipo",
      "subtitulo1": "Conoce a",
      "subtitulo2": "nuestros miembros",
      "miembros": [
        {
          "imagen": "../assets/img/testimonial-2.jpg",
          "nombre": "Mollie Ross",
          "puesto": "Founder & CEO",
          "twitter": "www.twitter.com",
          "facebook": "www.facebook.com",
          "linkedin": "www.linkedin.com",
          "instagram": "www.instagram.com"
        },
        {
          "imagen": "../assets/img/testimonial-6.jpg",
          "nombre": "Jennifer Page",
          "puesto": "Jefe de cocina",
          "twitter": "www.twitter.com",
          "facebook": "www.facebook.com",
          "linkedin": "www.linkedin.com",
          "instagram": "www.instagram.com"
        },
        {
          "imagen": "../assets/img/testimonial-5.jpg",
          "nombre": "Kate Glover",
          "puesto": "Doctora",
          "twitter": "www.twitter.com",
          "facebook": "www.facebook.com",
          "linkedin": "www.linkedin.com",
          "instagram": "www.instagram.com"
        },
        {
          "imagen": "../assets/img/testimonial-4.jpg",
          "nombre": "Juan Perez",
          "puesto": "Director ejecutivo",
          "twitter": "www.twitter.com",
          "facebook": "www.facebook.com",
          "linkedin": "www.linkedin.com",
          "instagram": "www.instagram.com"
        }
      ]
    },
    "testimonios": {
      "titulo": "Testimonios",
      "subtitulo1": "Lo que nuestros",
      "subtitulo2": "beneficiarios opinan",
      "testimonios": [
        {
          "imagen": "../assets/img/testimonial-7.jpg",
          "nombre": "Doña María, 72 años",
          "profesion": "Jubilada",
          "testimonio": "Desde que asisto al centro de día de la ONG, mi vida ha cambiado por completo. Antes me sentía muy sola y aislada en casa. Ahora tengo amigas, hacemos actividades divertidas y me siento mucho más activa. Gracias a los talleres, he aprendido a usar la computadora y me mantengo actualizada. ¡Me siento como una niña otra vez!"
        },
        {
          "imagen": "../assets/img/testimonial-8.jpg",
          "nombre": "Don Pedro, 80 años, viudo",
          "profesion": "Jubilado",
          "testimonio": "Los voluntarios de la ONG me visitan a domicilio cada semana y me ayudan con las tareas del hogar. Además, me acompañan al médico y me hacen compañía. Gracias a ellos, puedo seguir viviendo de forma independiente en mi casa y no siento tanta soledad."
        },
        {
          "imagen": "../assets/img/testimonial-9.jpg",
          "nombre": "Sofía, 10 años",
          "profesion": "Estudiante",
          "testimonio": "En el taller de la ONG aprendí a hacer manualidades y a reciclar. Me encanta pasar tiempo con los otros niños y jugar. También nos enseñan cosas importantes sobre el cuidado del medio ambiente. Gracias a la ONG, me siento más feliz y útil."
        },
        {
          "imagen": "../assets/img/testimonial-10.jpg",
          "nombre": "Juan, 8 años, huerfano",
          "profesion": "Estudiante",
          "testimonio": "En el hogar de la ONG tengo una familia. Las mujeres que trabajan allí me cuidan mucho y me enseñan cosas nuevas cada día. Voy a la escuela y tengo muchos amigos. Estoy muy agradecido por todo lo que hacen por mí."
        }
      ]
    },
    "blogs": {
      "titulo": "Testimonios",
      "subtitulo1": "Lo que nuestros",
      "subtitulo2": "beneficiarios opinan",
      "posts": [
        {
          "titulo": "La importancia de la compañía: Voluntarios para nuestros adultos mayores",
          "descripcion": "Buscamos voluntarios que dediquen parte de su tiempo a visitar a nuestros adultos mayores y brindarles compañía. ¡Una pequeña acción puede marcar una gran diferencia en su vida!",
          "imagen": "../assets/img/blog-1.jpg",
          "usuario": "Admin",
          "comentarios": "15"
        },
        {
          "titulo": "Recopilamos juguetes para los niños más necesitados",
          "descripcion": "¡La Navidad se acerca! Ayúdanos a llenar de alegría los rostros de los niños en situación de pobreza. Dona juguetes en buen estado y sé parte de esta campaña.",
          "imagen": "../assets/img/blog-2.jpg",
          "usuario": "Admin",
          "comentarios": "10"
        },
        {
          "titulo": "Talleres gratuitos de nutrición para adultos mayores",
          "descripcion": "Ofrecemos talleres gratuitos de nutrición para que nuestros adultos mayores aprendan a llevar una dieta saludable y mejorar su calidad de vida.",
          "imagen": "../assets/img/blog-4.jpg",
          "usuario": "Admin",
          "comentarios": "25"
        },
        {
          "titulo": "¡Dona alimentos no perecederos y ayuda a las familias más vulnerables!",
          "descripcion": "Los alimentos son una necesidad básica. Ayúdanos a recolectar alimentos no perecederos para distribuirlos a familias en situación de pobreza.",
          "imagen": "../assets/img/blog-3.jpg",
          "usuario": "Admin",
          "comentarios": "122"
        }
      ]
    }
  };

  constructor() { 
    this.homePage = this.home;  
  }
}
