import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { app_routes } from './app/app-routing.module';

bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers,
    provideRouter(app_routes)
  ]
}).catch(err => console.error(err));
