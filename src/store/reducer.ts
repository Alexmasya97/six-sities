import { createReducer } from '@reduxjs/toolkit';
import { City, Offer } from '../types/types';
import { cities, CityCenter } from '../const';
import { setCity, setOffers } from './action';

type State = {
  city: City;
  offers: Offer[];
}

const initialState: State = {
  city: {
    name: cities[0],
    location: CityCenter[cities[0]]
  },
  offers: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = {
        name: action.payload,
        location: CityCenter[action.payload]
      };
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});
