import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
//import { UserComponent } from './user/user.component';
//import { UserHomeComponent } from './user/user-home.component';
import { FormComponent } from './form/form.component';
import { formRoutes } from './form/form.routes';
import { todoRoutes } from './todo/todo.routes';
import { wikiRoutes } from './wiki/wiki.routes';

const routes: RouterConfig = [
  { path: '',  component: HomeComponent },
  ...formRoutes,
  ...todoRoutes,
  ...wikiRoutes
];

export const appRouterProviders = [
  provideRouter(routes)
];