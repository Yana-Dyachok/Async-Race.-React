import React, { useState, useEffect } from 'react';
import RenderTrack from './render-track';
import getAPICars from '../../../api/get-cars';
import { ICar } from '../../../types/interface';

const TrackBlock: React.FC = () => {
  const [cars, setCars] = useState<ICar[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const newCars = await getAPICars();
        setCars(newCars);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    fetchCars();
  }, []);
  return (
    <>
      {cars.map((car) => (
        <RenderTrack car={car} key={car.id} />
      ))}
    </>
  );
};

export default TrackBlock;
