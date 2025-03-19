import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.css', '../../../assets/css/style.min.css']
})
export class LegalComponent {
  marcoLegal: { [key: string]: any[] } = {
    constitucion: [
      {
        titulo: 'Art. 46. Preeminencia del Derecho Internacional',
        contenido: 'Se establece el principio general de que en materia de derechos humanos, los tratados y convenciones aceptados y ratificados por Guatemala, tienen preeminencia sobre el derecho interno.'
      },
      {
        titulo: 'Art. 47. Protección a la familia',
        contenido: 'El Estado garantiza la protección social, económica y jurídica de la familia. Promoverá su organización sobre la base legal del matrimonio, la igualdad de derechos de los cónyuges, la paternidad responsable y el derecho de las personas a decidir libremente el número y espaciamiento de sus hijos.'
      },
      {
        titulo: 'Ar. 51. Protección a menores y ancianos',
        contenido: 'Establece la protección a los ancianos, garantizando su derecho a la alimentación, salud, educación y seguridad y previsión social'
      }
    ],
    codigoSalud: [
      {
        titulo: 'Artículo 41. Salud de la familia',
        contenido: 'Establece que el Estado debe promover la salud de la familia a través del Ministerio de Salud y otras instituciones del sector.'
      }
    ],
    codigoNinez: [
      {
        titulo: 'Título III',
        secciones: [
          'Sección I: Derecho a una vida digna y a la salud.',
          'Sección II: Derecho a la educación, a la cultura, al deporte y a la recreación.'
        ]
      }
    ],
    leyMujer: [
      {
        titulo: 'Artículo 8. Ejercicio real de la Equidad',
        contenido: 'Con el propósito de proveer un ambiente estable que propicie la erradicación de la discriminación y la violencia contra la mujer, el Estado promoverá la revalorización del matrimonio y la maternidad.'
      }
    ],
    leyDesarrollo: [
      {
        titulo: 'Artículo 10. Obligación del Estado',
        contenido: 'El Estado es responsable de planificar, coordinar, ejecutar y dar seguimiento a las acciones gubernamentales para el desarrollo nacional.'
      },
      {
        titulo: 'Artículo 26. Programa de Salud Reproductiva',
        contenido: 'el Ministerio de Salud Pública y Asistencia Social debe diseñar, coordinar y ejecutar el Programa de Salud Reproductiva.'
      },
      {
        titulo: 'Artículo 27. Educación',
        contenido: 'Todas las personas tienen derecho a la educación.'
      },
      {
        titulo: 'Artículo 28. Incorporación y Permanencia Escolar',
        contenido: 'El Estado debe promover la incorporación y permanencia escolar de los niños y niñas. '
      },
      {
        titulo: 'Artículo 29. Temática Educativa en Población',
        contenido: 'La educación debe incorporar la temática de población en todos los niveles educativos. '
      },
      {
        titulo: 'Artículo 31. Orientaciones principales de la Educación en Población',
        contenido: 'La educación en población formará parte de los planes y programas oficiales de estudio, según lo establecido en la Constitución Política de la República.'
      }
    ],
    leyAdultoMayor: [
      {
        titulo: 'Ley de Protección a las personas de la Tercera Edad',
        secciones: [
          'Esta ley establece que todos los ancianos guatemaltecos son beneficiarios, sin distinción de ninguna naturaleza',
          'Establece beneficios como: '
              + 'Exoneración en el consumo de energía eléctrica, agua potable y demás servicios esenciales'
              + 'Descuentos en la compra de medicinas, transporte, hospedaje, alimentación, entre otros'
              + 'Facilitación gratuita del transporte colectivo'

        ]
      }
    ]
  };

  getTituloSeccion(seccion: string): string {
    const titulos = {
      codigoSalud: 'Código de Salud',
      codigoNinez: 'Código de la Niñez y la Juventud',
      leyMujer: 'Ley de Dignificación y Promoción Integral de la Mujer',
      leyDesarrollo: 'Ley de Desarrollo Social',
      leyAdultoMayor: 'Ley del Adulto Mayor'
    };

    switch (seccion) {
      case "codigoSalud":
        return titulos.codigoSalud;
        break;
      case "codigoNinez":
        return titulos.codigoNinez;
        break;
      case "leyMujer":
        return titulos.leyMujer;
        break;
      case "leyDesarrollo":
        return titulos.leyDesarrollo;
        break;
      case "leyAdultoMayor":
        return titulos.leyAdultoMayor;
        break;
      default:
        return 'Título no encontrado';
        break;
    } // fin switch
  } // fin getTituloSeccion
}
