import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import { AppDispatch, RootState } from '../../../lib/store/store';
import { getWinners } from '../../../lib/slices/winners-slice';
import WinnersTable from '../../elements/winners-table/winners-table';
import styles from '../winners-block/winners-block.module.scss';

const WinnersBlock: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [page, setPage] = useState(1);
  const { items, totalItems } = useSelector(
    (state: RootState) => state.winners,
  );

  useEffect(() => {
    dispatch(getWinners({ page }));
  }, [dispatch, page]);

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const sortWinsASC = () => {
    dispatch(getWinners({ page, sort: 'wins', order: 'ASC' }));
  };

  const sortWinsDESC = () => {
    dispatch(getWinners({ page, sort: 'wins', order: 'DESC' }));
  };

  const sortTimeASC = () => {
    dispatch(getWinners({ page, sort: 'time', order: 'ASC' }));
  };

  const sortTimeDESC = () => {
    dispatch(getWinners({ page, sort: 'time', order: 'DESC' }));
  };

  return (
    <div className={styles.winnersBlock}>
      <h2 className={styles.title}>{`Winners(${totalItems})`}</h2>
      <h3 className={styles.title}>{`Page#${page}`}</h3>
      {items.length > 0 ? (
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
    </div>
  );
};

export default WinnersBlock;
