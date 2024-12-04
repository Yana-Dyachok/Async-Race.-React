import React, { useState } from 'react';
import Button from '../../ui/button/button';
import InputText from '../../ui/input-text/input-text';
import InputColor from '../../ui/input-color/input-color';
import Popup from '../../ui/popup/popup';
import createAPICar from '../../../api/create-car';
import { CarName } from '../../../types/types';
import styles from '../create-car.module.scss';

const CreateCar: React.FC = () => {
  const [carName, setCarName] = useState<CarName | string>('');
  const [carColor, setCarColor] = useState<string>('#ffffff');
  const [isPopupVisible, setPopupVisible] = useState<boolean>(false);

  const onClose = () => {
    setPopupVisible(false);
  };

  const createCar = () => {
    if (carName === '') {
      setPopupVisible(true);
    } else {
      createAPICar({ name: carName, color: carColor });
    }
  };

  return (
    <div className={styles.menuCreateCar}>
      <InputText text={carName} onChange={setCarName} />
      <InputColor text={carColor} onChange={setCarColor} />
      <Button onClick={createCar}>Create</Button>
      {isPopupVisible && <Popup text={"Enter car's name"} onClose={onClose} />}
    </div>
  );
};

export default CreateCar;
