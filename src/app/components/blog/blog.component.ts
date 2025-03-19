import { Component } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Posts } from '../../services/clases.service';
import { RegresarComponent } from '../regresar/regresar.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RegresarComponent],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css',  '../../../assets/css/style.min.css']
})
export class BlogComponent {
  blogs: any;
  //post: any;
  id: string = '1';
  post!: any;

  constructor(private route: ActivatedRoute, private ips: InfoPaginaService) {
    this.blogs = ips.home.blogs;
  }

  ngOnInit(): void {
    this.route.params.subscribe(parametros => {
      console.log(parametros['id']);
      console.log(this.blogs.posts);
      const id = parametros['id'];
      this.id = parametros['id'];


      try {
        if (id) {
          if (this.blogs.posts.length > 0) {
            this.post = this.blogs.posts.find((blog: any) => blog.id === id);
          } else {          
            this.post = this.blogs.post[id];
          }        
        }
      } catch (error) {
        console.log('Post: ', this.blogs.posts.length > 0);
        console.log(this.post);
      }
    });
  }
}
