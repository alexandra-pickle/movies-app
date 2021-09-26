import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from './movie.model';

@Injectable()
export class MoviesService {
  constructor(private http: HttpClient) {}

  /**
   * Method
   * @returns array of movies
   */
  getMovies(): Observable<Movie[]> {
    return this.http
      .get<any[]>('http://localhost:3000/movies')
      .pipe(
        map((movies) =>
          movies.map(
            (m) =>
              <Movie>{
                title: m.Title,
                director: m.Diredtor,
                releaseYear: m.ReleaseYear,
              }
          )
        )
      );
  }

  /**
   * Method creates a new movie record
   * @param movie
   */
  createMovie(movie: Movie): Observable<any> {
    return this.http.post<any>('http://localhost:3000/movies', movie);
  }
}
