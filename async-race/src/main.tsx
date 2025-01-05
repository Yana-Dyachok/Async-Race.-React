import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './lib/store/store.ts';
import Toast from './componets/ui/toast/toast.tsx';
import Loader from './componets/ui/loader/loader.tsx';
import './styles/style.scss';

const App = lazy(() => import('./App.tsx'));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Loader />}>
        <Toast />
        <App />
      </Suspense>
    </Provider>
  </StrictMode>,
);
