import { toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import mailIcon from '@/assets/mail-icon.png';

const createToast = () => {
  toast.info('New email arrived! 📥 ', {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const createNotification = () => {
  Notification.requestPermission().then((permission) => {
    createToast();
    if (permission === 'granted' && document.visibilityState !== 'visible') {
      const notification = new Notification('New email arrived!', {
        body: 'New email arrived!',
        icon: mailIcon,
      });
    }
  });
};

export { createNotification };
