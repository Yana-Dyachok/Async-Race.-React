import React, { useState, useEffect } from 'react';
import Button from '../../ui/button/button';
import InputText from '../../ui/input-text/input-text';
import InputColor from '../../ui/input-color/input-color';
import Popup from '../../ui/popup/popup';
import { useCarContext } from '../../../utils/car-context';
import updateAPICar from '../../../api/update-car';
import styles from '../create-car.module.scss';

const UpdateCar: React.FC = () => {
  const { selectedCar } = useCarContext();
  console.log('selected', selectedCar);

  const [carName, setCarName] = useState<string>('');
  const [carColor, setCarColor] = useState<string>('#ffffff');
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (selectedCar) {
      setCarName(selectedCar.name);
      setCarColor(selectedCar.color);
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [selectedCar]);

  const onClose = () => {
    setIsPopupVisible(false);
  };

  const updateCar = () => {
    if (carName === '') setIsPopupVisible(true);
    else {
      if (selectedCar?.id)
        updateAPICar(selectedCar?.id, { name: carName, color: carColor });
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
