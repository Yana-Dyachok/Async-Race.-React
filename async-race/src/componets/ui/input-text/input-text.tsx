import React from 'react';
import { InputProps } from '../../../types/interface';
import styles from './input-text.module.scss';

const InputText: React.FC<InputProps> = ({ text, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <input
      className={styles.inputText}
      type="text"
      value={text || ''}
      onChange={handleChange}
    />
  );
};

export default InputText;
