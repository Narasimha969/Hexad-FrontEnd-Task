import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { addRating } from '../movies.actions';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Hexad Front End Task';
  btnText:string ="Start randomization";
  moviesData: Observable<any[]>;
  toggleButton: any;
  isRandomRunning: boolean = false;
  timeInterval:any;
  subscriber:any
  constructor(private store: Store<{ movies: any[], toggleButton: any }>) {
    this.moviesData = store.pipe(select('movies'));
  }
  ngOnInit() {
   this.sortData();
  }
  sortData(){
    this.moviesData.subscribe(response => {
      return response.sort((a, b) => b.starsEarned / b.usersParticipated - a.starsEarned / a.usersParticipated)
    });
  }
  increment(index: number, rate: number) {
    this.store.dispatch(addRating({ movieIndex: index, rateValue: rate }));
  }
  toggleRandom() {
    let randomMovie: number;
    let randomRating: number;
    this.isRandomRunning = !this.isRandomRunning;
    if (this.isRandomRunning) {
      this.btnText = "Stop randomization"
      //set interval for 500 milliseconds 
       this.timeInterval = interval(500);
       this.subscriber = this.timeInterval.subscribe(val => {
         this.moviesData.subscribe(res =>{
           randomMovie = this.generateRandomMovieNumber();
           randomRating = this.generateRandomRateNumber();
           this.store.dispatch(addRating({ movieIndex: randomMovie, rateValue: randomRating }));
         })
      });
    }else{
      this.btnText = "Start randomization"
      this.removeInterval()
    }
  }
  generateRandomMovieNumber(){
    return Math.floor(Math.random() * Math.floor(9))
  }
  generateRandomRateNumber(){
    return Math.floor(Math.random() * 10 + 1)
  }
  removeInterval(){
    if(!!this.subscriber) this.subscriber.unsubscribe();
  }
}
