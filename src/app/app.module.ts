import { NgModule } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarruselComponent } from './componets/carrusel/carrusel.component';
import { TopbarComponent } from './componets/topbar/topbar.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { BookingComponent } from './componets/booking/booking.component';
import { AboutComponent } from './componets/about/about.component';
import { ServiciosComponent } from './componets/servicios/servicios.component';
import { CaracteristicasComponent } from './componets/caracteristicas/caracteristicas.component';
import { DonacionesComponent } from './componets/donaciones/donaciones.component';
//import { EquipoComponent } from './componets/equipo/equipo.component';
import { TestimoniosComponent } from './componets/testimonios/testimonios.component';
import { BlogsComponent } from './componets/blogs/blogs.component';
import { FooterComponent } from './componets/footer/footer.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
]

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppComponent,
    HomeComponent,
    CarruselComponent,
    TopbarComponent,
    //RouterModule.forRoot(routes)
    NavbarComponent,
    BookingComponent,
    AboutComponent,
    ServiciosComponent,
    CaracteristicasComponent,
    DonacionesComponent,
    //EquipoComponent,
    TestimoniosComponent,
    BlogsComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
