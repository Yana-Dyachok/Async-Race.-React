import React from 'react';
import CreateCar from '../../elements/create-car/create-car';
import UpdateCar from '../../elements/update-car/update-car';
import styles from './garage-menu.module.scss';

const GarageMenu: React.FC = () => {
  return (
    <div className={styles.garageMenu}>
      <CreateCar />
      <UpdateCar />
    </div>
  );
};
export default GarageMenu;
