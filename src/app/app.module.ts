import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { StoreModule } from '@ngrx/store'
import { moviesReducer } from '../movies.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    StoreModule.forRoot({ movies: moviesReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
