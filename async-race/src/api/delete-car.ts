import { GARAGE__LINK } from '../types/const';

const deleteAPICar = async (id: number): Promise<void> => {
  try {
    await fetch(`${GARAGE__LINK}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (er) {
    throw new Error(`Failed to delete a car: ${er}`);
  }
};
export default deleteAPICar;
