import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css', '../../../assets/css/style.min.css']
})
export class ProyectosComponent {
  proyectos: any;

  constructor ( private ips: InfoPaginaService, public router: Router) {
    this.proyectos = ips.home.servicios;
  }

  ngOnInit() {

  }

  selectProyecto(id: number) {
    this.router.navigate(['/proyecto', id]);
  }
}
