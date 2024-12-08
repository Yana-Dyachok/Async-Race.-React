import React from 'react';
import CreateCar from '../../elements/create-car/create-car';
import UpdateCar from '../../elements/update-car/update-car';
import MenuButtons from '../../elements/menu-buttons/menu-buttons';
import { PageProps } from '../../../types/interface';
import styles from './garage-menu.module.scss';

const GarageMenu: React.FC<PageProps> = ({ page }) => {
  return (
    <div className={styles.garageMenu}>
      <CreateCar page={page} />
      <UpdateCar page={page} />
      <MenuButtons page={page} />
    </div>
  );
};
export default GarageMenu;
