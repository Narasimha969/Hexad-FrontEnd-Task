import { createReducer, on } from '@ngrx/store';
import { addRating } from './movies.actions';
import { MoviesList } from './modal/moviesList'

export const initialState = MoviesList;

const _rateMovieItemAndReOrder = createReducer(initialState,
  on(addRating, (state, action) => {
    state[action.movieIndex].starsEarned += action.rateValue;
    state[action.movieIndex].usersParticipated += 1;
    state.sort((a, b) => b.starsEarned / b.usersParticipated - a.starsEarned / a.usersParticipated)
    return state
  })
);


export function moviesReducer(state, action) {
  return _rateMovieItemAndReOrder(state, action);
}

