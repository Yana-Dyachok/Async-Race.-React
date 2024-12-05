import { ICar } from '../types/interface';
import { GARAGE__LINK } from '../types/const';

const getAPICars = async (): Promise<ICar[]> => {
  try {
    const response = await fetch(GARAGE__LINK, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch cars.');
    }

    const cars = await response.json();
    return cars;
  } catch (er) {
    throw new Error(`Failed to fetch cars: ${er}`);
  }
};

export default getAPICars;
