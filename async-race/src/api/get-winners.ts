import { IWinner, IWinnersResponse, IWinnerCars } from '../types/interface';
import { WINNERS__LINK } from './const';
import { Sort, Order } from '../types/types';
import getAPICar from './get-car';
import sortWinners from '../utils/sort-winners';
import deleteAPIWinner from './delete-winner';

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
    throw new Error('X-Total-Count header is missing.');
  }

  const winnersAndCars: IWinnerCars[] = (
    await Promise.all(
      items.map(async (winner: IWinner): Promise<IWinnerCars | null> => {
        try {
          const car = await getAPICar(winner.id);
          if (!car) {
            await deleteAPIWinner(winner.id);
            return null;
          }
          return { ...winner, car };
        } catch (error) {
          console.error('Error fetching car:', error);
          await deleteAPIWinner(winner.id);
          return null;
        }
      }),
    )
  ).filter((winner): winner is IWinnerCars => winner !== null);

  return {
    items: winnersAndCars,
    totalItems: count,
  };
};

export default getAPIWinners;
