import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { Proyectos } from 'src/app/services/clases.service';
import { forEach } from 'angular';

@Component({
  selector: 'app-proyecto',
  imports: [CommonModule],
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css', './../../../assets/css/style.min.css']
})
export class ProyectoComponent {
  proyectos: Proyectos[];
  proyecto: Proyectos = {id: 1, titulo: "Día Internacional de la Paz", 
    descripcion: "El Día Internacional de la Paz fue establecido en 1981 por la Asamblea General de las Naciones Unidas, celebrándose cada año el 21 de septiembre. En este 2024, conmemoramos un hecho significativo: el 25 aniversario de la adopción de la Declaración y Programa de Acción sobre una Cultura de Paz por parte de la ONU. Este documento reafirma que la paz no es simplemente la ausencia de conflictos, sino un estilo de vida que todos podemos cultivar activamente.", 
    descripcionl: "El Día Internacional de la Paz fue establecido en 1981 por la Asamblea General de las Naciones Unidas, celebrándose cada año el 21 de septiembre. En este 2024, conmemoramos un hecho significativo: el 25 aniversario de la adopción de la Declaración y Programa de Acción sobre una Cultura de Paz por parte de la ONU. Este documento reafirma que la paz no es simplemente la ausencia de conflictos, sino un estilo de vida que todos podemos cultivar activamente.", 
    iconclass: "", link: ""};

  constructor ( private ips: InfoPaginaService, public route: ActivatedRoute) {
    this.proyectos = ips.proyectos;
    console.log("proyectos: " + this.proyectos);
    console.log("proyecto: " + this.proyecto);
  }

  ngOnInit(): void {
    let id: string | null = this.route.snapshot.paramMap.get('id');
    console.log("id: " + id);

    
    this.proyectos.forEach((p) => {
      if (id !== null) {
        if (p.id.toString() == id) {
          this.proyecto = p;
          console.log(this.proyecto);
        } else {
          this.proyecto = this.proyecto;

          console.log(this.proyecto);
        }     
      }
    });

    //this.proyecto = this.proyectos.filter((p: Proyectos) => p.id === id);
  }

}
