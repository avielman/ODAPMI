import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarruselComponent,
    TopbarComponent,
    NavbarComponent,
    BookingComponent,
    AboutComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    //RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
