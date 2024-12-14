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
import saveAPIWinner from '../../../api/save-winner';
import Popup from '../../ui/popup/popup';
import styles from './menu-buttons.module.scss';

const MenuButtons: React.FC<PageProps> = ({ page }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isResetDisabled, setIsResetDisabled] = useState<boolean>(true);
  const [isRaceDisabled, setIsRaceDisabled] = useState<boolean>(false);
  const [isPopupVisible, setPopupVisible] = useState<boolean>(false);
  const [text, setText] = useState<string>('');

  const onClose = () => {
    setPopupVisible(false);
  };

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
      const cars = await getAllCars();
      if (!cars || cars.length === 0) {
        toast.info('No cars to reset!');
        return;
      }

      setIsRaceDisabled(false);
      setIsResetDisabled(true);

      const resetPromises = cars.map(async (car) => {
        try {
          await engineControlAPI(car.id, 'stopped');
          dispatch(
            setAnimationCar({ carId: car.id, isAnimation: false, duration: 0 }),
          );
          dispatch(clearAnimation(car.id));
        } catch (error) {
          console.error(`Failed to reset the engine for car ${car.id}:`, error);
          throw error;
        }
      });
      await Promise.all(resetPromises);
    } catch (error) {
      console.error('Failed to reset the engine:', error);
      toast.error(`Failed to reset the engine: ${error}`);
    }
  };

  const clickRace = async () => {
    try {
      const cars = await getAllCars();
      if (!cars || cars.length === 0) {
        toast.info('No cars to race!');
        return;
      }
      setIsRaceDisabled(true);
      setIsResetDisabled(false);
      toast.success('Cars race started!');
      const raceResults: { carId: number; name: string; duration: number }[] =
        [];

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

          if (status.success) {
            raceResults.push({ carId: car.id, name: car.name, duration });
          }
        } catch (carError) {
          toast.error(`Failed to process car ${car.name}, ${carError}`);
        }
      });

      await Promise.all(racePromises);

      if (raceResults.length > 0) {
        const winner = raceResults.reduce((min, car) =>
          car.duration < min.duration ? car : min,
        );
        setPopupVisible(true);
        setText(
          `Winner is "${winner.name}" with duration ${Math.floor(winner.duration * 100) / 100}s!`,
        );
        await saveAPIWinner(winner.carId, winner.duration);
      } else {
        toast.info('No cars finished the race!');
      }
    } catch (error) {
      toast.error(`Failed to race: ${error}`);
    }
  };

  const generateCars = async () => {
    try {
      await generateHundredCars();
      await dispatch(fetchCars(page));
      toast.success('100 cars generated successfully!');
    } catch (error) {
      toast.error(`Error generating cars: ${error}`);
    }
  };

  return (
    <div className={styles.menuButtons}>
      <Button disabled={isRaceDisabled} onClick={clickRace}>
        Race
      </Button>
      <Button disabled={isResetDisabled} onClick={clickReset}>
        Reset
      </Button>
      <Button onClick={generateCars}>Generate</Button>
      {isPopupVisible && <Popup text={text} onClose={onClose} />}
    </div>
  );
};
export default MenuButtons;
