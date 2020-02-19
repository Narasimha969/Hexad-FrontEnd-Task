import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { addRating } from '../movies.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Hexad Front End Task';
  moviesData: Observable<any[]>;
  constructor(private store: Store<{ movies: any[] }>) {
    this.moviesData = store.pipe(select('movies'));
  }

  ngOnInit() {
    this.moviesData.subscribe(response => {
      return response.sort((a, b) => b.starsEarned / b.usersParticipated - a.starsEarned / a.usersParticipated)
    });
  }


  increment(index:number, rate:number) {
    this.store.dispatch(addRating({ movieIndex: index, rateValue:rate }));

  }
}
