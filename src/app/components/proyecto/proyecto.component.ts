import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Proyectos } from '../../services/clases.service';
import { ActivatedRoute } from '@angular/router';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-proyecto',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css',  '../../../assets/css/style.min.css'],
})
export class ProyectoComponent implements OnInit {
  proyecto: Proyectos;

  constructor(private route: ActivatedRoute, private ips: InfoPaginaService) {
    this.ips.llenaProyecto();
    this.proyecto = this.ips.proyectos[0]; // Inicialización con el primer proyecto por defecto
  }

  ngOnInit(): void {
    this.route.params.subscribe(parametros => {
      const id = parametros['id'];
      if (id) {
        const proyectoEncontrado = this.ips.filtrarProyecto(id);
        if (proyectoEncontrado) {
          this.proyecto = proyectoEncontrado;
        }
      }
    });
  }
}
