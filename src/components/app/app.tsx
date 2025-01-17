import { Routes, Route, BrowserRouter } from 'react-router-dom';

import type { City, Offer, Comment } from '../../types/types';

import { AppRoute, AuthorizationStatus } from '../../const';
import { Main } from '../../pages/main/main';
import { Login } from '../../pages/login/login';
import { Favorites } from '../../pages/favorites/favorites';
import Property from '../../pages/property/property';
import NotFound from '../../pages/notFound/notFound';
import PrivateRoute from '../private-route/private-route';


type AppProps = {
  city: City;
  offers: Offer[];
  reviews: Comment[];
}

const App = ({ city, offers, reviews }: AppProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Main city={city} offers={offers} />}/>
      <Route path={AppRoute.Login} element={<Login />} />
      <Route path={`${AppRoute.Property}/:id`} element={<Property city={city} nearbyOffers={offers} reviews={reviews} />} />
      <Route path={AppRoute.Favorites}
        element={
          <PrivateRoute
            authorizationStatus={AuthorizationStatus.NoAuth}
          >
            <Favorites offers={offers} />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
