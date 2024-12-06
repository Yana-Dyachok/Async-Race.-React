import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../lib/store/store';
import { fetchCars } from '../../../lib/slices/car-slice';
import RenderTrack from './render-track';
import Pagination from '@mui/material/Pagination';
import styles from './track-block.module.scss';

const TrackBlock: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, totalItems } = useSelector((state: RootState) => state.cars);
  const [page, setPage] = React.useState(1);

  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div>
      <h2 className={styles.title}>{`Garage(${totalItems})`}</h2>
      <h3 className={styles.title}>{`Page#${page}`}</h3>
      {items.map((car) => (
        <RenderTrack car={car} key={car.id} />
      ))}

      <Pagination
        className={styles.pagination}
        count={Math.ceil(+totalItems / 7)}
        page={page}
        onChange={handleChange}
      />
    </div>
  );
};

export default TrackBlock;
