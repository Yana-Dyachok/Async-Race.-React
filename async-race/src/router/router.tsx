import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from '../componets/layout/layout';
import GaragePage from '../pages/garage';
import WinnersPage from '../pages/winners';
import NotFoundPage from '../pages/not-found-page/not-found-page';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/Async-Race-React/" element={<GaragePage />} />
      <Route path="/Async-Race-React/garage" element={<GaragePage />} />
      <Route path="/Async-Race-React/winners" element={<WinnersPage />} />
      <Route
        path="/Async-Race-React/*"
        element={<NotFoundPage />}
        handle={{ hidePath: true }}
      />
    </Route>,
  ),
);

export default router;
