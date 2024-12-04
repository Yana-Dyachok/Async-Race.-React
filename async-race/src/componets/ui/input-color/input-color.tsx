import React from 'react';
import { InputProps } from '../../../types/interface';
import styles from './input-color.module.scss';

const InputColor: React.FC<InputProps> = ({ text, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <input
      type="color"
      className={styles.inputColor}
      value={text || '#ffffff'}
      onChange={handleChange}
    />
  );
};

export default InputColor;
