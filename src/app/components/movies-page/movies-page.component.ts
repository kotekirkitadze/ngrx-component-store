import { Component, OnInit } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { map } from 'rxjs';
import { MoviesState } from '../../model';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss'],
  providers: [ComponentStore],
})
export class MoviesPageComponent implements OnInit {
  movies$ = this.componentStore.state$.pipe(map((state) => state.movies));

  constructor(private componentStore: ComponentStore<MoviesState>) {}

  ngOnInit(): void {
    this.componentStore.setState({
      movies: [
        { title: 'Titanic', id: '1' },
        {
          title: 'Harry potter',
          id: '2',
        },
      ],
      userPreferredMoviesIds: [],
      selectedMovieId: null,
    });
  }

  resetState() {
    this.componentStore.setState({
      movies: [],
      userPreferredMoviesIds: [],
      selectedMovieId: null,
    });
  }

  addMovieWithSetState() {
    this.componentStore.setState((state) => {
      return {
        ...state,
        movies: [...state.movies, { title: 'title title', id: '5' }],
      };
    });
  }

  updateSelectedMovie(selectedMovieId: string) {
    this.componentStore.patchState({ selectedMovieId });
  }

  addMovieWithPatchState() {
    this.componentStore.patchState((state) => {
      return {
        movies: [...state.movies, { title: 'test test 11', id: '1212' }],
      };
    });
  }
}
