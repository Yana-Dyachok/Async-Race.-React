import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { AppDispatch } from '../../../lib/store/store';
import { fetchCars } from '../../../lib/slices/car-slice';
import { selectSelectedCar } from '../../../lib/slices/selected-car-slice';
import Button from '../../ui/button/button';
import InputText from '../../ui/input-text/input-text';
import InputColor from '../../ui/input-color/input-color';
import Popup from '../../ui/popup/popup';
import updateAPICar from '../../../api/update-car';
import { PageProps } from '../../../types/interface';
import styles from '../create-car.module.scss';

const UpdateCar: React.FC<PageProps> = ({ page }) => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedCar = useSelector(selectSelectedCar);
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

  const updateCar = async () => {
    if (carName === '') {
      setIsPopupVisible(true);
      return;
    }
    try {
      if (selectedCar?.id) {
        await updateAPICar(selectedCar.id, { name: carName, color: carColor });
        await dispatch(fetchCars(page));
        toast.success(`Car ${carName} updated successfully!`);
      }
    } catch (error) {
      toast.error(`Failed to update car: ${error}`);
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
