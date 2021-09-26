import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { Movie } from './movie.model';
import { MoviesService } from './movies.service';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let moviesService: MoviesService;
  const mockMovie: Movie = {
    title: 'Green Book',
    director: 'Peter Farrelly',
    releaseYear: 2018,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [AppComponent],
      providers: [MoviesService],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    moviesService = TestBed.inject(MoviesService);
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should fetch movies`, () => {
    spyOn(moviesService, 'getMovies').and.returnValue(of([mockMovie]));
    app.ngOnInit();
    fixture.detectChanges();
    expect(moviesService.getMovies).toHaveBeenCalled();
  });

  it('should create a movie when the form is valid', () => {
    spyOn(moviesService, 'createMovie').and.returnValue(of('success'));
    const formValue = {
      title: mockMovie.title,
      director: mockMovie.director,
      releaseYear: mockMovie.releaseYear,
    };
    app.movieForm.setValue(formValue);
    app.onSubmit();
    fixture.detectChanges();

    expect(moviesService.createMovie).toHaveBeenCalledWith(formValue);
  });
});
