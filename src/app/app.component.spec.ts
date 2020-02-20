import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { By } from '@angular/platform-browser';

import { moviesReducer } from '../movies.reducer'
describe('AppComponent', () => {
  var fixture;
  var app;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [provideMockStore()]
    }).compileComponents();
    //buttonStatus = TestBed.get<Store<any>>(Store);
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title: Hexad Front End Task`, () => {
    expect(app.title).toEqual('Hexad Front End Task');
  });

  it('check the button text value if randomization started', () => {
    let status = app.isRandomRunning;
    if (status) expect(app.btnText).toEqual('Stop randomization')
    else expect(app.btnText).toEqual('Start randomization')
  })

  it('click start', () => {

    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.whenStable().then(() => {
      expect(app.toggleRandom).toHaveBeenCalled();
    });
  })

  it('add rating to a movie', () => {
    fixture.whenStable().then(() => {
      let button = fixture.debugElement.nativeElement.querySelector('.rating-box');
      button.click();
      expect(app.increment).toHaveBeenCalled();
    });
  })

  it('sort data on load ', () => {
    const spy = spyOn(app, 'sortData');
    app.ngOnInit();     // should execute else part
    expect(spy).toHaveBeenCalled();
  })

  it('generate random movie index called', () => {
    const spy = spyOn(app, 'generateRandomMovieNumber');
    let button = fixture.debugElement.nativeElement.querySelector('button');
    app.isRandomRunning = true;
    button.click();
    app.toggleRandom()
    expect(app.subscriber).not.toBeUndefined();
  });

  it('Set time interval', () => {
    const spy = spyOn(app, 'removeInterval');
    let button = fixture.debugElement.nativeElement.querySelector('button');
    app.isRandomRunning = false;
    button.click();
    app.toggleRandom()
    expect(spy).toHaveBeenCalled();
  });

  it('check the random movie index >=0 and <10', () => {
    expect(app.generateRandomMovieNumber()).toBeGreaterThanOrEqual(0);
    expect(app.generateRandomMovieNumber()).toBeLessThanOrEqual(9);

  })

  it('check the random rating value >0 and <11', () => {
    expect(app.generateRandomRateNumber()).toBeGreaterThanOrEqual(1);
    expect(app.generateRandomRateNumber()).toBeLessThanOrEqual(10);
  });

  it('chekc sub val', () => {
    app.removeInterval();
    expect(app.subscriber).toBeUndefined();
  })


});
