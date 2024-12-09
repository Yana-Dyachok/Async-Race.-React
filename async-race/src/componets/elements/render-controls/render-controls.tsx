import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Button from '../../ui/button/button';
import { RenderControlsProps } from '../../../types/interface';
import driveAPICar from '../../../api/drive-car';
import engineControlAPI from '../../../api/engine-control';
import { AppDispatch } from '../../../lib/store/store';
import { deleteCar, fetchCars } from '../../../lib/slices/car-slice';
import { setSelectedCar } from '../../../lib/slices/selected-car-slice';
import {
  setAnimationCar,
  clearAnimation,
} from '../../../lib/slices/animation-slice';
import getAnimationDuration from '../../../utils/animation-duration';
import styles from './render-controls.module.scss';

const RenderControls: React.FC<RenderControlsProps> = ({
  car,
  currentPage,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const clickStop = async () => {
    try {
      setIsDisabled(!isDisabled);
      engineControlAPI(car.id, 'stopped');
      dispatch(
        setAnimationCar({ carId: car.id, isAnimation: false, duration: 0 }),
      );
      dispatch(clearAnimation(car.id));
    } catch (error) {
      throw new Error(`Failed to stop the engine:, ${error}`);
    }
  };

  const clickStart = async () => {
    try {
      setIsDisabled(!isDisabled);
      const resp = await engineControlAPI(car.id, 'started');
      const duration = getAnimationDuration(resp);
      dispatch(setAnimationCar({ carId: car.id, isAnimation: true, duration }));
      const status = await driveAPICar(car.id);
      if (!status.success) {
        dispatch(
          setAnimationCar({ carId: car.id, isAnimation: false, duration }),
          toast.error(`Unfortunately, car ${car.name} broke down!`),
        );
      }
    } catch (error) {
      throw new Error(`Failed to start the engine:, ${error}`);
    }
  };

  const clickRemove = async () => {
    await dispatch(deleteCar(car.id));
    dispatch(fetchCars(currentPage));
    dispatch(clearAnimation(car.id));
    toast.success(`Car ${car.name} removed successfully!`);
  };

  const clickSelect = () => {
    dispatch(setSelectedCar(car));
  };

  return (
    <div className={styles.garageControls} key={`control-${car.id}`}>
      <div className={styles.controlHang}>
        <Button key={`select-${car.id}`} onClick={clickSelect}>
          Select
        </Button>
        <Button key={`remove-${car.id}`} onClick={clickRemove}>
          Remove
        </Button>
      </div>
      <div className={styles.controlMotion}>
        <Button
          disabled={isDisabled}
          onClick={clickStart}
          key={`start-${car.id}`}
        >
          Start
        </Button>
        <Button
          disabled={!isDisabled}
          onClick={clickStop}
          key={`stop-${car.id}`}
        >
          Stop
        </Button>
      </div>
    </div>
  );
};

export default RenderControls;
