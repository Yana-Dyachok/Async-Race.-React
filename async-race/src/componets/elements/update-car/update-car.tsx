import React, { useState } from 'react';
import Button from '../../ui/button/button';
import InputText from '../../ui/input-text/input-text';
import InputColor from '../../ui/input-color/input-color';
import Popup from '../../ui/popup/popup';
import styles from '../create-car.module.scss';

const UpdateCar: React.FC = () => {
  const [carName, setCarName] = useState<string>('');
  const [carColor, setCarColor] = useState<string>('#ffffff');
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
  const [isDisabled] = useState<boolean>(true);
  const onClose = () => {
    setIsPopupVisible(false);
  };
  const updateCar = () => {
    if (carName === '') setIsPopupVisible(true);
    else {
      console.log(carName, carColor);
    }
  };

  return (
    <div className={styles.menuCreateCar}>
      <InputText text={carName} onChange={setCarName} />
      <InputColor text={carColor} onChange={setCarColor} />
      <Button onClick={updateCar} disabled={isDisabled}>
        Update
      </Button>
      {isPopupVisible && <Popup text={"Enter car's name"} onClose={onClose} />}
    </div>
  );
};
export default UpdateCar;
