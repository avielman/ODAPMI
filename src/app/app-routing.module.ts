import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AboutComponent } from './components/about/about.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BookingComponent } from './components/booking/booking.component';
import { CaracteristicasComponent } from './components/caracteristicas/caracteristicas.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { DonacionesComponent } from './components/donaciones/donaciones.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { HomeComponent } from './components/home/home.component';
import { LegalComponent } from './components/legal/legal.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { RegresarComponent } from './components/regresar/regresar.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';

export const app_routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '#/about', component: AboutComponent },
  { path: '#/acercade', component: AcercadeComponent },
  { path: '#/blog', component: BlogComponent },
  { path: '#/blog/:id', component: BlogComponent },
  { path: '#/blogs', component: BlogsComponent },
  { path: '#/booking', component: BookingComponent },
  { path: '#/caracteristicas', component: CaracteristicasComponent },
  { path: '#/contactenos', component: ContactenosComponent },
  { path: '#/donaciones', component: DonacionesComponent },
  { path: '#/equipo', component: EquipoComponent },
  { path: '#/home', component: HomeComponent },
  { path: '#/legal', component: LegalComponent },
  { path: '#/proyecto', component: ProyectoComponent },
  { path: '#/proyecto/:id', component: ProyectoComponent },
  { path: '#/proyectos', component: ProyectosComponent },
  { path: '#/regresar/', component: RegresarComponent },
  { path: '#/testimonios/', component: TestimoniosComponent },

  { path: '**', pathMatch: 'full', redirectTo: '#/home' }

  ];

@NgModule({
  imports: [
      RouterModule.forRoot(app_routes, { useHash: true } )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }