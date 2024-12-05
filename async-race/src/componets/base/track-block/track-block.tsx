import React, { useState, useEffect } from 'react';
import RenderTrack from './render-track';
import getAPICars from '../../../api/get-cars';
import Pagination from '@mui/material/Pagination';
import { ICar } from '../../../types/interface';
import styles from './track-block.module.scss';

const TrackBlock: React.FC = () => {
  const [cars, setCars] = useState<ICar[]>([]);
  const [totalCars, setTotalCars] = useState<number>(0);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const newCars = await getAPICars(page);
        setCars(newCars.items);
        setTotalCars(+newCars.count);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    fetchCars();
  }, [page]);

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div>
      <h2 className={styles.title}>{`Garage(${totalCars})`}</h2>
      <h3 className={styles.title}>{`Page#${page}`}</h3>
      {cars.map((car) => (
        <RenderTrack car={car} key={car.id} />
      ))}

      <Pagination
        className={styles.pagination}
        count={Math.ceil(totalCars / 7)}
        page={page}
        onChange={handleChange}
      />
    </div>
  );
};

export default TrackBlock;
