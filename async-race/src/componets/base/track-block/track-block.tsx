import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import { AppDispatch, RootState } from '../../../lib/store/store';
import { fetchCars } from '../../../lib/slices/car-slice';
import RenderTrack from './render-track';
import styles from './track-block.module.scss';

interface TrackBlockProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const TrackBlock: React.FC<TrackBlockProps> = ({ page, setPage }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, totalItems } = useSelector((state: RootState) => state.cars);

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
      {items.length > 0 ? (
        <>
          {items.map((car) => (
            <RenderTrack car={car} currentPage={page} key={car.id} />
          ))}
          <Pagination
            className={styles.pagination}
            count={Math.ceil(+totalItems / 7)}
            page={page}
            onChange={handleChange}
          />
        </>
      ) : (
        <h2 className={styles.title}>There are no cars</h2>
      )}
    </div>
  );
};

export default TrackBlock;
