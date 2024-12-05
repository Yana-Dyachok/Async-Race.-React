import React, { useState } from 'react';
import Button from '../../ui/button/button';
import { generateHundredCars } from '../../../utils/random-generate-cars';
import styles from './menu-buttons.module.scss';

const MenuButtons: React.FC = () => {
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
