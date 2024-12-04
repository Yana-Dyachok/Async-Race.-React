import React from 'react';
import { InputProps } from '../../../types/interface';
import styles from './input-text.module.scss';

const InputText: React.FC<InputProps> = ({ text }) => {
  return <input className={styles.inputText} type="text" value={text || ''} />;
};

export default InputText;
