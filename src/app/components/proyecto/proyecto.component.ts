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
  proyecto: Proyectos = {
    id: 1, 
    titulo: "Día Internacional de la Paz", 
    descripcion: "El Día Internacional de la Paz fue establecido en 1981 por la Asamblea General de las Naciones Unidas, celebrándose cada año el 21 de septiembre. En este 2024, conmemoramos un hecho significativo: el 25 aniversario de la adopción de la Declaración y Programa de Acción sobre una Cultura de Paz por parte de la ONU. Este documento reafirma que la paz no es simplemente la ausencia de conflictos, sino un estilo de vida que todos podemos cultivar activamente.", 
    descripcionl: 
      "El Día Internacional de la Paz, instituido en 1981 por la Asamblea General de las Naciones Unidas y celebrado cada 21 de septiembre, es un hito en el calendario global dedicado a fomentar la armonía y la cooperación entre naciones. Este día representa mucho más que una simple fecha en el calendario; es un llamado universal a la reflexión, a la acción y a la construcción de un mundo más pacífico y justo." +
      "<br> " + 
      " " + 
      "En 2024, conmemoramos un aniversario especial: el 25 aniversario de la adopción de la Declaración y Programa de Acción sobre una Cultura de Paz por parte de la ONU. Este documento, un hito en sí mismo, trascendió la mera definición de la paz como ausencia de conflicto. En su lugar, presentó una visión holística de la paz como un estilo de vida activo, que se cultiva a través de la educación, el diálogo, la tolerancia y el respeto mutuo. La cultura de paz, según este documento, se basa en valores como la justicia, la igualdad, la democracia y el desarrollo sostenible." + 
      "<p> " + 
      " " + 
      'A pesar de los avances logrados, los desafíos para alcanzar la paz mundial persisten. Conflictos armados, desigualdad, discriminación y cambio climático son solo algunos de los problemas que amenazan la convivencia pacífica. Sin embargo, el Día Internacional de la Paz nos recuerda que, incluso en los momentos más difíciles, es posible construir un futuro más prometedor.' + 
      "</p> " + 
      " " + 
      "Cada año, el 21 de septiembre, personas de todas las edades, culturas y orígenes se unen para celebrar el Día Internacional de la Paz. Desde manifestaciones pacíficas y eventos culturales hasta campañas de sensibilización y proyectos de voluntariado, las actividades son tan diversas como las comunidades que las organizan. Estas acciones no solo contribuyen a crear conciencia sobre la importancia de la paz, sino que también fortalecen los lazos entre las personas y fomentan el espíritu de solidaridad." + 
      " " + 
      " " + 
      "En un mundo cada vez más interconectado, la paz es un bien común que nos beneficia a todos. Al celebrar el Día Internacional de la Paz, reafirmamos nuestro compromiso con un futuro más justo y equitativo, donde todas las personas puedan vivir en armonía y seguridad. Es hora de renovar nuestros esfuerzos para construir un mundo donde la paz sea una realidad tangible y no solo un ideal." +
      " ",
    iconclass: "", 
    link: ""
  }

  constructor ( private ips: InfoPaginaService, public route: ActivatedRoute) {
    this.proyectos = ips.proyectos;
    console.log("proyectos: " + this.proyectos);
    console.log("proyecto: " + this.proyecto);
    //alert(this.proyecto.titulo);
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
        
  }

}
