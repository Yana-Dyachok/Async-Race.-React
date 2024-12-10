import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import { AppDispatch, RootState } from '../../../lib/store/store';
import { getWinners } from '../../../lib/slices/winners-slice';
import WinnersTable from '../../elements/winners-table/winners-table';
import styles from '../track-block/track-block.module.scss';

const WinnersBlock: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [page, setPage] = useState(1);
  const { items, totalItems } = useSelector(
    (state: RootState) => state.winners,
  );

  useEffect(() => {
    dispatch(getWinners(page));
  }, [dispatch, page]);

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div className={styles.winnersBlock}>
      <h2 className={styles.title}>{`Winners(${totalItems})`}</h2>
      <h3 className={styles.title}>{`Page#${page}`}</h3>
      {items.map((winner) => (
        <WinnersTable key={winner.id} winner={winner} />
      ))}

      <Pagination
        className={styles.pagination}
        count={Math.ceil(+totalItems / 10)}
        page={page}
        onChange={handleChange}
      />
    </div>
  );
};

export default WinnersBlock;
