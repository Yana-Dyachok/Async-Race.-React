import React, { useEffect } from 'react';
import { PopUpProps } from '../../../types/interface';
import styles from './popup.module.scss';

const Popup: React.FC<PopUpProps> = ({ text, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={styles.popup}>
      <div className={styles.popupBody}>
        <div className={styles.popupContent}>
          <h2 className={styles.popupText}>{text}</h2>
        </div>
      </div>
    </div>
  );
};

export default Popup;
