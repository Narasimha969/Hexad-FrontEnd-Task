import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {
  public movies = [
    {
      "name": "Marriage Story (2019)",
      "rating": 8
    },
    {
      "name": "Indiana Jones and the Raiders of the Lost Ark (1981)",
      "rating": 4
    },
    {
      "name": "Rosemary’s Baby (1968)",
      "rating": 6
    },
    {
      "name": "Zodiac (2007)",
      "rating": 2
    },
    {
      "name": "Spider-Man: Into the Spider-Verse (2018)",
      "rating": 1
    },
    {
      "name": "The Irishman (2019)",
      "rating": 3
    },
    {
      "name": "Dolemite is My Name (2019)",
      "rating": 5
    },
    {
      "name": "El Camino (2019)",
      "rating": 7
    },
    {
      "name": "A Silent Voice (2016)",
      "rating": 9
    },
    {
      "name": "Step Brothers (2008)",
      "rating": 10
    }
  ]
  constructor() { }

  getMovies(){
  return this.movies;
  }
}
