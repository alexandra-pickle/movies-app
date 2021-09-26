import { Component } from '@angular/core';
import { MoviesService } from './movies.service';
import { Movie } from './movie.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  movies: Movie[] = [];
  movieForm = new FormGroup({
    title: new FormControl('', Validators.required),
    director: new FormControl('', Validators.required),
    releaseYear: new FormControl(null, Validators.required),
  });

  constructor(readonly moviesService: MoviesService) {}

  /**
   * Lifecycle hook
   */
  ngOnInit() {
    this.movieForm.reset();

    this.moviesService.getMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }

  /**
   * Event handler for submitting the form
   */
  onSubmit() {
    if (this.movieForm.valid) {
      this.moviesService
        .createMovie(this.movieForm.value)
        .subscribe((result) => {
          this.ngOnInit();
        });
    }
  }
}
