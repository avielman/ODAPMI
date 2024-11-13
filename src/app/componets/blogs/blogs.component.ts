import { Component } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css', '../../../assets/css/style.min.css']
})
export class BlogsComponent {
  blogs: any;

  constructor ( private ips: InfoPaginaService) {   
    this.blogs = ips.home.blogs;
  }

}
