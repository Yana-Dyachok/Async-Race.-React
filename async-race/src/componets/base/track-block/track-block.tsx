import React, { useState } from 'react';
import RenderCarTrack from '../../elements/render-car-track/render-car-track';
import { generateHundredCars } from '../../../utils/random-generate-cars';
import Button from '../../ui/button/button';
import styles from './track-block.module.scss';
import { ICar } from '../../../types/interface';

const TrackBlock: React.FC = () => {
  const [cars, setCars] = useState<ICar[]>([]);

  const generate = async () => {
    try {
      const newCars = await generateHundredCars();
      setCars((prevCars) => [...prevCars, ...newCars]);
    } catch (error) {
      console.error('Error generating cars:', error);
    }
  };

  return (
    <div className={styles.garageMenu}>
      {cars.map((car) => (
        <RenderCarTrack car={car} key={car.id} />
      ))}
      <Button onClick={generate}>Generate</Button>
    </div>
  );
};

export default TrackBlock;
