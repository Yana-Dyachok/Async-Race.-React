import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../ui/button/button';
import { RenderControlsProps } from '../../../types/interface';
import driveAPICar from '../../../api/drive-car';
import engineControlAPI from '../../../api/engine-control';
import { AppDispatch } from '../../../lib/store/store';
import { deleteCar, fetchCars } from '../../../lib/slices/car-slice';
import { setSelectedCar } from '../../../lib/slices/selected-car-slice';
import styles from './render-controls.module.scss';

const RenderControls: React.FC<RenderControlsProps> = ({
  car,
  currentPage,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const clickStop = () => {
    engineControlAPI(car.id, 'stopped');
    setIsDisabled(!isDisabled);
  };

  const clickStart = () => {
    engineControlAPI(car.id, 'started');
    const resp = driveAPICar(car.id);
    console.log(resp);
    setIsDisabled(!isDisabled);
  };

  const clickRemove = async () => {
    await dispatch(deleteCar(car.id));
    dispatch(fetchCars(currentPage));
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
