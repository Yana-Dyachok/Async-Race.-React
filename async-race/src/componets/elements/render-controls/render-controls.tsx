import React, { useState } from 'react';
import Button from '../../ui/button/button';
import { RenderCarTrackProps } from '../../../types/interface';
import deleteAPICar from '../../../api/delete-car';
import { useCarContext } from '../../../utils/car-context';
import driveAPICar from '../../../api/drive-car';
import engineControlAPI from '../../../api/engine-control';
import styles from './render-controls.module.scss';

const RenderControls: React.FC<RenderCarTrackProps> = ({ car }) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const { setSelectedCar } = useCarContext();
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

  const clickRemove = () => {
    deleteAPICar(car.id);
  };

  const clickSelect = () => {
    console.log(car);
    setSelectedCar(car);
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
