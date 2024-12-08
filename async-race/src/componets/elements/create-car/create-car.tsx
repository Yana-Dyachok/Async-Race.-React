import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../lib/store/store';
import { addCar, fetchCars } from '../../../lib/slices/car-slice';
import Button from '../../ui/button/button';
import InputText from '../../ui/input-text/input-text';
import InputColor from '../../ui/input-color/input-color';
import Popup from '../../ui/popup/popup';
import { PageProps } from '../../../types/interface';
import styles from '../create-car.module.scss';

const CreateCar: React.FC<PageProps> = ({ page }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [carName, setCarName] = useState<string>('');
  const [carColor, setCarColor] = useState<string>('#ffffff');
  const [isPopupVisible, setPopupVisible] = useState<boolean>(false);

  const onClose = () => {
    setPopupVisible(false);
  };

  const createCar = async () => {
    if (carName === '') {
      setPopupVisible(true);
    } else {
      await dispatch(addCar({ name: carName, color: carColor }));
      dispatch(fetchCars(page));
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
