import { IBody, ICar } from '../types/interface';
import { GARAGE__LINK } from '../types/const';

const createAPICar = async (body: IBody): Promise<ICar> => {
  try {
    const response = await fetch(GARAGE__LINK, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error('Failed to make a car.');
    }
    return response.json();
  } catch (er) {
    throw new Error(`Failed to make a car: ${er}`);
  }
};
export default createAPICar;
