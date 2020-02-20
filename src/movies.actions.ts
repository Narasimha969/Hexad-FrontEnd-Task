import { createAction, props } from '@ngrx/store';

export const addRating = createAction('[Counter Component] Increment', props<{ movieIndex: number, rateValue: number }>());