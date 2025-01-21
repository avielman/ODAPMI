import { Component } from '@angular/core';
import { CommonModule, NgClass, NgFor } from '@angular/common';
import { InfoPaginaService } from '../../services/info-pagina.service';
//import { CarruselComponent } from '../componets/carrusel/carrusel.component';
import { NgModelGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, NgFor, NgClass],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './../../../assets/css/style.min.css', './../../../assets/lib/flaticon/font/flaticon.css', './../../../assets/lib/owlcarousel/assets/owl.carousel.min.css',
    './../../../assets/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css']
})
export class HomeComponent {
  title = 'ODAPMI';
  logo = '../assets/img/logo.jpg';
  activeIndex: number = 0;  
  //Variables locales
  acerca: any = {};
  blogs: any = {};
  caracteristicas: any = {};
  carrousel: any = {};
  citas: any = {};
  donaciones: any = {};
  integrantes: any = {};
  nosotros: any = {};
  redes: any = [];
  servicios: any = {};
  testimonios: any = {};
  proyectos: any = {};


  constructor ( private ips: InfoPaginaService, public router: Router) {    
    this.acerca = ips.home.acerca;
    this.caracteristicas = ips.home.caracteristicas;
    this.carrousel = ips.home.carrousel;
    this.citas = ips.home.citas;
    this.nosotros = ips.home.nosotros;
    this.redes = ips.home.redes;
    this.servicios = ips.home.servicios;
    this.donaciones = ips.home.donaciones;
    this.integrantes = ips.home.integrantes;
    this.testimonios = ips.home.testimonios;
    this.blogs = ips.home.blogs;
  }

  changeSlide(index: number) {
    this.activeIndex = index;
  }

  selectProyecto(id: number) {
    this.router.navigate(['/proyecto', id]);
  }
  
}

