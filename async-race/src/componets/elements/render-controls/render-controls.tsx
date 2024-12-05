import React, { useState } from 'react';
import Button from '../../ui/button/button';
import { RenderCarTrackProps } from '../../../types/interface';
import styles from './render-controls.module.scss';

const RenderControls: React.FC<RenderCarTrackProps> = ({ car }) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const clickStop = () => {
    setIsDisabled(!isDisabled);
  };
  const clickStart = () => {
    setIsDisabled(!isDisabled);
  };
  return (
    <div className={styles.garageControls} key={`control-${car.id}`}>
      <div className={styles.controlHang}>
        <Button key={`select-${car.id}`}>Select</Button>
        <Button key={`remove-${car.id}`}>Remove</Button>
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
