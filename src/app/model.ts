export interface MoviesState {
  movies: Movie[];
  userPreferredMoviesIds: string[];
  selectedMovieId: string | null;
}

export interface Movie {
  title: string;
  id: string;
}
