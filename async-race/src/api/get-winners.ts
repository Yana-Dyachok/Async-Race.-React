import { WINNERS__LINK } from './const';
import { IWinnersResponse, IWinner, IWinnerCars } from '../types/interface';
import { Sort, Order } from '../types/types';
import getAPICar from './get-car';
import sortWinners from '../utils/sort-winners';

const getAPIWinners = async (
  page: number,
  sort?: Sort,
  order?: Order,
): Promise<IWinnersResponse> => {
  const getSort = sort && order ? sortWinners(sort, order) : '';
  const response: Response = await fetch(
    `${WINNERS__LINK}?_page=${page}&_limit=${10}${getSort}`,
  );
  const items: IWinner[] = await response.json();
  const count: string | null = response.headers.get('X-Total-Count');

  if (!count) {
    throw new Error('X-Total-Count is null');
  }

  const winnersAndCars: IWinnerCars[] = await Promise.all(
    items.map(
      async (winner: IWinner): Promise<IWinnerCars> => ({
        ...winner,
        car: await getAPICar(winner.id),
      }),
    ),
  );

  return {
    items: winnersAndCars,
    totalItems: count,
  };
};

export default getAPIWinners;
