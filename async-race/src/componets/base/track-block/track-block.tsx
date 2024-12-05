import React, { useState } from 'react';
import { generateHundredCars } from '../../../utils/random-generate-cars';
import Button from '../../ui/button/button';
import RenderTrack from './render-track';
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
    <>
      {cars.map((car) => (
        <RenderTrack car={car} key={car.id} />
      ))}
      <Button onClick={generate}>Generate</Button>
    </>
  );
};

export default TrackBlock;
