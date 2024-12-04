import React from 'react';
import Button from '../../ui/button/button';
import InputText from '../../ui/input-text/input-text';
import InputColor from '../../ui/input-color/input-color';
import styles from '../create-car.module.scss';

const CreateCar: React.FC = () => {
  return (
    <div className={styles.menuCreateCar}>
      <InputText />
      <InputColor />
      <Button>Create</Button>
    </div>
  );
};
export default CreateCar;
