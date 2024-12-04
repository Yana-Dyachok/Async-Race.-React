import React from 'react';
import Button from '../button/button';
import { PopUpProps } from '../../../types/interface';
import styles from './popup.module.scss';

const Popup: React.FC<PopUpProps> = ({ text, onClose }) => {
  return (
    <div className={styles.popup}>
      <div className={styles.popupBody}>
        <div className={styles.popupContent}>
          <h2 className={styles.popupText}>{text}</h2>
          <Button onClick={onClose}>ok</Button>
        </div>
      </div>
    </div>
  );
};
export default Popup;
