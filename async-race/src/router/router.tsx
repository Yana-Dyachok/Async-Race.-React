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
      <Route path="/" element={<GaragePage />} />
      <Route path="/garage" element={<GaragePage />} />
      <Route path="/winners" element={<WinnersPage />} />
      <Route path="/*" element={<NotFoundPage />} handle={{ hidePath: true }} />
    </Route>,
  ),
  {
    basename: '/Async-Race-React',
  },
);

export default router;
