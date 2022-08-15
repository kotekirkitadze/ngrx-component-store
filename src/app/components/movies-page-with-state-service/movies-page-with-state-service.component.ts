import { Component, OnInit } from '@angular/core';
import { MoviesStore } from './movies.store';

@Component({
  selector: 'app-movies-page-with-state-service',
  templateUrl: './movies-page-with-state-service.component.html',
  styleUrls: ['./movies-page-with-state-service.component.scss'],
  providers: [MoviesStore],
})
export class MoviesPageWithStateServiceComponent implements OnInit {
  id: string = '';
  movies$ = this.moviesStore.movies$;
  constructor(private moviesStore: MoviesStore) {}

  ngOnInit(): void {}

  addMovieWithUpdater() {
    this.moviesStore.addMovieWithUpdater({ title: 'movie 222', id: '11' });
  }

  find() {
    if (this.id) this.moviesStore.getMovie(this.id);
  }
}
