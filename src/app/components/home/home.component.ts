import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { AcercadeComponent } from '../acercade/acercade.component';
import { BlogsComponent } from "../blogs/blogs.component";
import { BookingComponent } from '../booking/booking.component';
import { ProyectosComponent } from "../proyectos/proyectos.component";
import { DonacionesComponent } from "../donaciones/donaciones.component";
import { CaracteristicasComponent } from '../caracteristicas/caracteristicas.component';
//import { EquipoComponent } from "../equipo/equipo.component";
import { TestimoniosComponent } from "../testimonios/testimonios.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BookingComponent, ProyectosComponent, AboutComponent, BlogsComponent, CaracteristicasComponent, DonacionesComponent, /*EquipoComponent,*/ TestimoniosComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../../assets/css/style.css']
})
export class HomeComponent {

}
