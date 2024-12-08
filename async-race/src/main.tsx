import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './lib/store/store.ts';
import Toast from './componets/ui/toast/toast.tsx';
import App from './App.tsx';
import './styles/style.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Toast />
      <App />
    </Provider>
  </StrictMode>,
);
