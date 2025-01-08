import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { AboutComponent } from './components/about/about.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BookingComponent } from './components/booking/booking.component';
import { CaracteristicasComponent } from './components/caracteristicas/caracteristicas.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DonacionesComponent } from './components/donaciones/donaciones.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { LegalComponent } from './components/legal/legal.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';


// estas rutas no son necesarias
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'acercade', component: AcercadeComponent },
  { path: 'servicios', component: ServiciosComponent},
  { path: 'booking', component: BookingComponent },
  { path: 'donaciones', component: DonacionesComponent},
  { path: 'cita', component: BookingComponent},
  { path: 'legal', component: LegalComponent},
  { path: 'servicios', component: ServiciosComponent},
  { path: 'contactenos', component: ContactenosComponent},
  { path: 'proyecto', component: ProyectoComponent},
  { path: 'proyecto:id', component: ProyectoComponent},
  { path: '**', redirectTo: 'home' }
]

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppComponent,
    AboutComponent,
    BlogsComponent,
    BookingComponent,
    CaracteristicasComponent,
    CarouselComponent,    
    DonacionesComponent,
    EquipoComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    ServiciosComponent,
    TestimoniosComponent,
    TopbarComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
