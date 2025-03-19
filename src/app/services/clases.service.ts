import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClasesService {

  constructor() { }
}

export class Proyectos {
  id!: string;
  titulo!: string;
  descripcion!: string;
  descripcionl!: string;
  iconclass!: string;
  link!: string;
}

export interface AcercaDe {
  titulo: string;
  descripcion: string;
  imagen: string;
  footer: string;
  fecha: string;
}

export interface Home {
  nosotros: {
    email: string;
    cel: string;
    url: string;
    horarios: string;
    direccion: string;
    descripcion: string;
    descripcion2: string;
    categorias: string;
    emailLegal: string;
  };
  acerca: {
    titulo: string;
    subtitulo: string;
    descripcion: string;
    lugares: string[];
  };
  servicios: Array<{
    id: number;
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
    id: number | string;
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
      id: number;
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
      id: string;
      titulo: string;
      descripcion: string;
      imagen: string;
      usuario: string;
      comentarios: string;
    }>;
  };
}

export interface Posts {
  id: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  usuario: string;
  comentarios: string;
}

