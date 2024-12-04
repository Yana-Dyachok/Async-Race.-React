import React from 'react';
import { InputProps } from '../../../types/interface';
import styles from './input-color.module.scss';

const InputColor: React.FC<InputProps> = ({ text }) => {
  return (
    <input
      type="color"
      className={styles.inputColor}
      value={text || '#ffffff'}
    />
  );
};

export default InputColor;
