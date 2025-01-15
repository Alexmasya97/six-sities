import { Routes, Route, BrowserRouter } from 'react-router-dom';

import type { Offer } from '../../types/types';

import { AppRoute, AuthorizationStatus } from '../../const';
import { Main } from '../../pages/main/main';
import { Login } from '../../pages/login/login';
import { Favorites } from '../../pages/favorites/favorites';
import { Property } from '../../pages/property/property';
import NotFound from '../../pages/notFound/notFound';
import PrivateRoute from '../private-route/private-route';


type AppProps = {
  offers: Offer[];
}

const App = ({ offers }: AppProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Main offers={offers} />}/>
      <Route path={AppRoute.Login} element={<Login />} />
      <Route path={`${AppRoute.Property}/:id`} element={<Property />} />
      <Route path={AppRoute.Favorites}
        element={
          <PrivateRoute
            authorizationStatus={AuthorizationStatus.Auth}
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
