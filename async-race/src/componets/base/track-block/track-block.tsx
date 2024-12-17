import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import { AppDispatch, RootState } from '../../../lib/store/store';
import { fetchCars } from '../../../lib/slices/car-slice';
import RenderTrack from './render-track';
import { PageStateProps } from '../../../types/interface';
import styles from './track-block.module.scss';

const TrackBlock: React.FC<PageStateProps> = ({ page, setPage }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, totalItems } = useSelector((state: RootState) => state.cars);
  const navigate = useNavigate();
  const { pathname, search } = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(search);
    const initialPage = urlParams.get('page');
    if (initialPage && !isNaN(Number(initialPage))) {
      setPage(Number(initialPage));
    } else {
      setPage(1);
      navigate(`${pathname}?page=1`, { replace: true });
    }
    const currentPage = urlParams.get('page') || '1';
    localStorage.setItem('garagePage', currentPage);
  }, [search, navigate, pathname, setPage]);

  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    navigate(`${pathname}?page=${value}`);
  };

  return (
    <div>
      <h2 className={styles.title}>{`Garage(${totalItems})`}</h2>
      <h3 className={styles.title}>{`Page#${page}`}</h3>
      {+totalItems > 0 ? (
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
