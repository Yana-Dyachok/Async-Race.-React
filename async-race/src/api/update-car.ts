import { IBody, ICar } from '../types/interface';
import { GARAGE__LINK } from '../types/const';

const updateAPICar = async (id: number, body: IBody): Promise<ICar> => {
  try {
    const response = await fetch(`${GARAGE__LINK}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error('Failed to update a car.');
    }
    return response.json();
  } catch (er) {
    throw new Error(`Failed to update a car: ${er}`);
  }
};
export default updateAPICar;
