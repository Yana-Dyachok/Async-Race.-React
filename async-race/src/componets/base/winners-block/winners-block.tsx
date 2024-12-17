import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import { AppDispatch, RootState } from '../../../lib/store/store';
import { getWinners } from '../../../lib/slices/winners-slice';
import WinnersTable from '../../elements/winners-table/winners-table';
import Loader from '../../ui/loader/loader';
import styles from '../winners-block/winners-block.module.scss';

const WinnersBlock: React.FC = () => {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const urlParams = useMemo(() => new URLSearchParams(search), [search]);
  const [page, setPage] = useState(Number(urlParams.get('page')) || 1);
  const dispatch = useDispatch<AppDispatch>();
  const { items, totalItems, loading } = useSelector(
    (state: RootState) => state.winners,
  );

  useEffect(() => {
    const initialPage = urlParams.get('page');

    if (initialPage && !isNaN(Number(initialPage))) {
      setPage(Number(initialPage));
    } else {
      setPage(1);
      navigate(`${pathname}?page=1`, { replace: true });
    }

    const currentPage = urlParams.get('page') || '1';
    localStorage.setItem('winnersPage', currentPage);
  }, [urlParams, navigate, pathname]);

  useEffect(() => {
    const sorted = JSON.parse(localStorage.getItem('sorted') || '[]');
    dispatch(getWinners({ page, sort: sorted[0], order: sorted[1] }));
  }, [dispatch, page, totalItems]);

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    navigate(`${pathname}?page=${value}`);
  };

  const sortWinsASC = () => {
    dispatch(getWinners({ page, sort: 'wins', order: 'ASC' }));
    localStorage.setItem('sorted', JSON.stringify(['wins', 'ASC']));
  };

  const sortWinsDESC = () => {
    dispatch(getWinners({ page, sort: 'wins', order: 'DESC' }));
    localStorage.setItem('sorted', JSON.stringify(['wins', 'DESC']));
  };

  const sortTimeASC = () => {
    dispatch(getWinners({ page, sort: 'time', order: 'ASC' }));
    localStorage.setItem('sorted', JSON.stringify(['time', 'ASC']));
  };

  const sortTimeDESC = () => {
    dispatch(getWinners({ page, sort: 'time', order: 'DESC' }));
    localStorage.setItem('sorted', JSON.stringify(['time', 'DESC']));
  };

  return (
    <div className={styles.winnersBlock}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2 className={styles.title}>{`Winners(${totalItems})`}</h2>
          <h3 className={styles.title}>{`Page#${page}`}</h3>
          {+totalItems > 0 ? (
            <>
              <WinnersTable
                winners={items}
                sortWinsASC={sortWinsASC}
                sortWinsDESC={sortWinsDESC}
                sortTimeASC={sortTimeASC}
                sortTimeDESC={sortTimeDESC}
              />
              <Pagination
                className={styles.pagination}
                count={Math.ceil(+totalItems / 10)}
                page={page}
                onChange={handleChange}
              />
            </>
          ) : (
            <h2 className={styles.title}>There are no winners</h2>
          )}
        </>
      )}
    </div>
  );
};

export default WinnersBlock;
