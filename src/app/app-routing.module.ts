import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { DonacionesComponent } from './components/donaciones/donaciones.component';
import { BookingComponent } from './components/booking/booking.component';
import { LegalComponent } from './components/legal/legal.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';

const routes: Routes = [ 
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'acercade', component: AcercadeComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'servicios', component: ServiciosComponent},
  { path: 'donaciones', component: DonacionesComponent},
  { path: 'cita', component: BookingComponent},
  { path: 'legal', component: LegalComponent},
  { path: 'servicios', component: ServiciosComponent},
  { path: 'contactenos', component: ContactenosComponent},
  { path: 'proyecto', component: ProyectoComponent},
  { path: 'proyecto:id', component: ProyectoComponent},
  { path: '**', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true } ) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export async function getPrerenderParams() {
  const proyectos = await fetch('/api/proyectos').then(res => res.json()); 
  return proyectos.map((proyecto: any) => ({ params: { id: proyecto.id } })); 
}
