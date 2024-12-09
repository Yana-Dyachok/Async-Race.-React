import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { AppDispatch } from '../../../lib/store/store';
import { fetchCars } from '../../../lib/slices/car-slice';
import Button from '../../ui/button/button';
import { generateHundredCars } from '../../../utils/random-generate-cars';
import { PageProps } from '../../../types/interface';
import driveAPICar from '../../../api/drive-car';
import engineControlAPI from '../../../api/engine-control';
import {
  setAnimationCar,
  clearAnimation,
} from '../../../lib/slices/animation-slice';
import getAnimationDuration from '../../../utils/animation-duration';
import getAPICars from '../../../api/get-cars';
import styles from './menu-buttons.module.scss';

const MenuButtons: React.FC<PageProps> = ({ page }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const getAllCars = async () => {
    try {
      const response = await getAPICars(page);
      return response.items;
    } catch (error) {
      throw new Error(`Failed to get cars:, ${error}`);
    }
  };
  const clickReset = async () => {
    try {
      setIsDisabled(!isDisabled);
      const cars = await getAllCars();
      if (!cars || cars.length === 0) {
        toast.info('No cars to reset!');
        setIsDisabled(false);
        return;
      }
      const resetPromises = cars.map(async (car) => {
        try {
          engineControlAPI(car.id, 'stopped');
          dispatch(
            setAnimationCar({ carId: car.id, isAnimation: false, duration: 0 }),
          );
          dispatch(clearAnimation(car.id));
        } catch (error) {
          throw new Error(`Failed to reset the engine:, ${error}`);
        }
        await Promise.all(resetPromises);
      });
    } catch (error) {
      throw new Error(`Failed to reset the engine:, ${error}`);
    }
  };

  const clickRace = async () => {
    try {
      setIsDisabled(!isDisabled);
      toast.success('Cars race started!');

      const cars = await getAllCars();
      if (!cars || cars.length === 0) {
        toast.info('No cars to race!');
        setIsDisabled(false);
        return;
      }
      const racePromises = cars.map(async (car) => {
        try {
          const resp = await engineControlAPI(car.id, 'started');
          const duration = getAnimationDuration(resp);
          dispatch(
            setAnimationCar({ carId: car.id, isAnimation: true, duration }),
          );
          const status = await driveAPICar(car.id);
          if (!status.success) {
            dispatch(
              setAnimationCar({ carId: car.id, isAnimation: false, duration }),
            );
            toast.error(`Unfortunately, car ${car.name} broke down!`);
          }
        } catch (carError) {
          toast.error(`Failed to process car ${car.name}, ${carError}`);
        }
      });
      await Promise.all(racePromises);
    } catch (error) {
      toast.error(`Failed to race ${error}`);
    }
  };

  const generateCars = async () => {
    try {
      generateHundredCars();
      dispatch(fetchCars(page));
      toast.success('100 cars generated successfully!');
    } catch (error) {
      toast.error(`Error generating cars:', ${error}`);
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
