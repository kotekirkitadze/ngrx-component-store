import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesPageComponent } from './components/movies-page/movies-page.component';
import { MoviesPageWithStateServiceComponent } from './components/movies-page-with-state-service/movies-page-with-state-service.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { MovieComponent } from './components/movie/movie.component';
import { FormsModule } from '@angular/forms';
import { MovieService } from './services/movie.service';

@NgModule({
  declarations: [
    AppComponent,
    MoviesPageComponent,
    MoviesPageWithStateServiceComponent,
    MovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreModule.forRoot({}, {}),
    FormsModule,
  ],
  providers: [MovieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
