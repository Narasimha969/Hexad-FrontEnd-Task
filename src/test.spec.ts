import {moviesReducer} from './movies.reducer';
import { TestBed, async } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Store, USER_RUNTIME_CHECKS } from '@ngrx/store';
import { By } from '@angular/platform-browser';
import {MoviesList} from './modal/moviesList'
import { Observable } from 'rxjs';
import {addRating} from './movies.actions'


describe('Test movie reducer',()=>{

  let store: MockStore<{ movies: any[] }>;
  const initialState = MoviesList
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        // any modules needed
      ],
      providers: [
        provideMockStore({ initialState }),
        // other providers
      ],
    });
 
    store = TestBed.get<Store<any>>(Store);
  });
  it('should create the add Rating', () => {
    expect(addRating).toBeTruthy();
  });

  it('should create the add Rating', () => {
    expect(addRating({movieIndex:1, rateValue:2})).not.toBeUndefined();
  });

  

  it('should create the reducer', () => {
    expect(moviesReducer).toBeTruthy();
  });



  it('Initial top movie rating should return 10', ()=>{
    var c = MoviesList;
    var topMovieRate;
    c.sort((a, b) => b.starsEarned / b.usersParticipated - a.starsEarned / a.usersParticipated)
      topMovieRate =  c[0].starsEarned / c[0].usersParticipated
      expect(topMovieRate).toEqual(10);
  });

  it('get the aggregate rating of all users ', () =>{
    var rateRandom = (totalStars, users) => {
      return totalStars/users;
    };
    var _samp1 = rateRandom(20, 4);
    expect(_samp1).toEqual(5);
  });
  
  it('get movies list' , () =>{
    var cc = MoviesList
    expect(cc[0].usersParticipated).toEqual(1)
  })

  
  it('test function' , () =>{
    var cc = moviesReducer(MoviesList, { movieIndex: 0, rateValue: 2 });
    expect(cc[0].usersParticipated).toEqual(1)
  })

})

