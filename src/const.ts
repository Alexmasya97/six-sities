import { CityName, Location, SortName, Offer} from './types/types';

export const STARS_COUNT = 5;
export const MAX_PERCENT_STARS_WIDTH = 100;
export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] as const;

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Property = '/offer',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const CityLocation: { [key in CityName]: Location } = {
  'Paris': {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 10
  },
  'Cologne': {
    latitude: 50.938361,
    longitude: 6.959974,
    zoom: 10
  },
  'Brussels': {
    latitude: 50.846557,
    longitude: 4.351697,
    zoom: 10
  },
  'Amsterdam': {
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 10
  },
  'Hamburg': {
    latitude: 53.550341,
    longitude: 10.000654,
    zoom: 10
  },
  'Dusseldorf': {
    latitude: 51.225402,
    longitude: 6.776314,
    zoom: 10
  },
};
export const Comprator: {
    [key in SortName]: (a: Offer, b: Offer) => number
  } = {
    Popular: () => 0,
    PriceIncrease: (a, b) => a.price - b.price,
    PriceDecrease: (a, b) => b.price - a.price,
    TopRated: (a, b) => b.rating - a.rating,
  };

export enum Sorting {
  Popular = 'Popular',
  PriceIncrease = 'Price: low to high',
  PriceDecrease = 'Price: high to low',
  TopRated = 'Top rated first',
}
