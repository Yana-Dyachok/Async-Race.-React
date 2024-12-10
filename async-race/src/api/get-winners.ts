import { WINNERS__LINK } from '../types/const';
import { IWinnersResponse, IWinner, IWinnerCars } from '../types/interface';
import getAPICar from './get-car';

const getAPIWinners = async (page: number): Promise<IWinnersResponse> => {
  const response: Response = await fetch(
    `${WINNERS__LINK}?_page=${page}&_limit=${10}`,
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
