import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app/app-routing.module";
import { AppComponent } from "./app/app.component";
import { FooterComponent } from "./app/components/footer/footer.component";
import { NavbarComponent } from "./app/components/navbar/navbar.component";
import { ProyectosComponent } from "./app/components/proyectos/proyectos.component";
import { TopbarComponent } from "./app/components/topbar/topbar.component";
import { ProyectoComponent } from "./app/components/proyecto/proyecto.component";
import { BookingComponent } from "./app/components/booking/booking.component";
import { AcercadeComponent } from "./app/components/acercade/acercade.component";
import { HomeComponent } from "./app/components/home/home.component";
import { BlogsComponent } from "./app/components/blogs/blogs.component";
import { BlogComponent } from "./app/components/blog/blog.component";
import { RegresarComponent } from "./app/components/regresar/regresar.component";
import { DonacionesComponent } from "./app/components/donaciones/donaciones.component";
import { CaracteristicasComponent } from "./app/components/caracteristicas/caracteristicas.component";
import { EquipoComponent } from "./app/components/equipo/equipo.component";
import { TestimoniosComponent } from "./app/components/testimonios/testimonios.component";
import { ContactenosComponent } from "./app/components/contactenos/contactenos.component";
import { LegalComponent } from "./app/components/legal/legal.component";

@NgModule({
  declarations: [

  ],
  imports: [
    AcercadeComponent,
    AppComponent,
    AppRoutingModule,
    BlogComponent,
    BlogsComponent,
    BookingComponent,
    BrowserModule,
    CaracteristicasComponent,
    ContactenosComponent,
    DonacionesComponent,
    //EquipoComponent,
    FooterComponent,
    HomeComponent,
    LegalComponent,
    NavbarComponent,
    ProyectoComponent,
    ProyectosComponent,
    RegresarComponent,
    TestimoniosComponent,
    TopbarComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
