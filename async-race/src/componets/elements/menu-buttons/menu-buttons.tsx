import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../lib/store/store';
import { fetchCars } from '../../../lib/slices/car-slice';
import Button from '../../ui/button/button';
import { generateHundredCars } from '../../../utils/random-generate-cars';
import { PageProps } from '../../../types/interface';
import styles from './menu-buttons.module.scss';

const MenuButtons: React.FC<PageProps> = ({ page }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const clickReset = () => {
    setIsDisabled(!isDisabled);
  };
  const clickRace = () => {
    setIsDisabled(!isDisabled);
  };

  const generateCars = async () => {
    try {
      generateHundredCars();
      dispatch(fetchCars(page));
    } catch (error) {
      console.error('Error generating cars:', error);
    }
  };

  return (
    <div className={styles.menuButtons}>
      <Button disabled={isDisabled} onClick={clickRace}>
        Race
      </Button>
      <Button disabled={!isDisabled} onClick={clickReset}>
        Reset
      </Button>
      <Button onClick={generateCars}>Generate</Button>
    </div>
  );
};
export default MenuButtons;
