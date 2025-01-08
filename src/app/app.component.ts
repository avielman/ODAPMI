import { Component, CUSTOM_ELEMENTS_SCHEMA, Inject } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogsComponent } from './components/blogs/blogs.component';

import { CarouselComponent } from './components/carousel/carousel.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BookingComponent } from './components/booking/booking.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { CaracteristicasComponent } from './components/caracteristicas/caracteristicas.component';
import { DonacionesComponent } from './components/donaciones/donaciones.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';
import { FooterComponent } from './components/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TopbarComponent, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css', '../assets/css/style.css', '../assets/lib/flaticon/font/flaticon.css', '../assets/lib/owlcarousel/assets/owl.carousel.min.css',
    '../assets/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css']
})
export class AppComponent {
  title = 'ODAPMI';
  hostElement = Inject(RouterOutlet).nativeElement;
  constructor (public _infoPaginaService: InfoPaginaService) {

    //this.InjectElements();
  }

  /*
  InjectElements() {
    const newNode = document.createElement('p');
    newNode.innerHTML = 'Hello';

    this.hostElement.insertBefore(newNode, this.hostElement.firstChild);
   } */
}
