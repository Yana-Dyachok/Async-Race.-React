import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
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
      return;
    }

    try {
      const result = await dispatch(addCar({ name: carName, color: carColor }));
      if (addCar.fulfilled.match(result)) {
        dispatch(fetchCars(page));
        toast.success(`Car ${carName} created successfully!`);
      } else {
        toast.error('Failed to create car.');
      }
    } catch (error) {
      toast.error(`Failed to create car: ${error}`);
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
