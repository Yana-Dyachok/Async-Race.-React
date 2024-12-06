import { ICarsResponse } from '../types/interface';
import { GARAGE__LINK } from '../types/const';

const getAPICars = async (pageNumber: number): Promise<ICarsResponse> => {
  try {
    const response = await fetch(
      `${GARAGE__LINK}?_page=${pageNumber}&_limit=7`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    if (!response.ok) {
      throw new Error('Failed to fetch all cars');
    }
    const count: string | null = response.headers.get('X-Total-Count');
    if (!count) {
      throw new Error('X-Total-Count is null');
    }
    return {
      items: await response.json(),
      totalItems: count,
    };
  } catch (er) {
    throw new Error(`Failed to fetch cars: ${er}`);
  }
};

export default getAPICars;
