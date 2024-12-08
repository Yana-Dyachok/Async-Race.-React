import { ToastContainer } from 'react-toastify';
import toastProps from './toast-style-props';

const Toast = () => {
  return <ToastContainer {...toastProps} />;
};

export default Toast;
