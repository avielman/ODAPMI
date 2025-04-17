import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TopbarComponent } from "./components/topbar/topbar.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CommonModule } from '@angular/common';
//import { ProyectosComponent } from './components/proyectos/proyectos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, TopbarComponent, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../assets/css/style.min.css']
})
export class AppComponent {
  title = 'ODAPMI';
}
