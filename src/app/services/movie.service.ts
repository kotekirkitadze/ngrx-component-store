import { Injectable } from '@angular/core';
import { of } from 'rxjs';

const MOVIES = [
  {
    id: '1',
    title: 'harry',
  },
  {
    id: '2',
    title: 'titanic',
  },
];

export class MovieService {
  fetchMovie(id: string) {
    return of(MOVIES.find((m) => m.id == id));
  }
}
