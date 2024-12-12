import { Order, Sort } from '../types/types';

const sortWinners = (sort: Sort, order: Order): string => {
  if (sort && order) {
    return `&_sort=${sort}&_order=${order}`;
  }
  return '';
};

export default sortWinners;
