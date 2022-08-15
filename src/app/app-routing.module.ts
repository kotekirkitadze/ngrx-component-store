import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesPageWithStateServiceComponent } from './components/movies-page-with-state-service/movies-page-with-state-service.component';
import { MoviesPageComponent } from './components/movies-page/movies-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'moviepage',
  },
  {
    path: 'moviepage',
    component: MoviesPageComponent,
  },
  {
    path: 'moviestore',
    component: MoviesPageWithStateServiceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
