import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { catchError, EMPTY, Observable, switchMap, tap } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';
import { Movie, MoviesState } from '../../model';
const DEFAULT_MOVIES = [
  {
    title: 'Movie 1',
    id: '1',
  },
  {
    title: 'Movie 2',
    id: '2',
  },
];

@Injectable()
export class MoviesStore extends ComponentStore<MoviesState> {
  constructor(private movieService: MovieService) {
    super({
      movies: [...DEFAULT_MOVIES],
      userPreferredMoviesIds: [],
      selectedMovieId: null,
    });
  }

  // getMovie = this.effect((movieId$: Observable<string>) => {
  //   return movieId$.pipe(
  //     switchMap((id) =>
  //       this.movieService.fetchMovie(id).pipe(
  //         tap({
  //           next: (movie) => {
  //             if (movie) this.addMovieWithUpdaterTest(movie);
  //           },
  //           error: (e) => console.log(e),
  //         }),
  //         catchError(() => EMPTY)
  //       )
  //     )
  //   );
  // });

  getMovie = this.effect((movieId$: Observable<string>) => {
    return movieId$.pipe(
      switchMap((id) =>
        this.movieService.fetchMovie(id).pipe(
          tapResponse(
            (movie) => {
              if (movie) this.addMovieWithUpdaterTest(movie);
            },
            (error) => console.log(error)
          )
        )
      )
    );
  });

  movies$: Observable<Movie[]> = this.select((state) => state.movies);
  userPreferredMovieIds$: Observable<string[]> = this.select(
    (state) => state.userPreferredMoviesIds
  );

  userPreferredMovies$ = this.select(
    this.movies$,
    this.userPreferredMovieIds$,
    (movies, ids) => movies.filter((movie) => ids.includes(movie.id))
  );

  addMovieWithUpdater = this.updater((state, movie: Movie) => {
    return {
      movies: [...state.movies, movie],
      userPreferredMoviesIds: [...state.userPreferredMoviesIds],
      selectedMovieId: null,
    };
  });

  addMovieWithUpdaterTest = this.updater((state, movie: Movie) => {
    return {
      movies: [movie],
      userPreferredMoviesIds: [...state.userPreferredMoviesIds],
      selectedMovieId: null,
    };
  });

  resetStateWithSetState() {
    // this.setState()
  }

  selectMovie(movieId: string) {
    return this.select((state) => state.movies.find((m) => m.id == movieId));
  }
}
