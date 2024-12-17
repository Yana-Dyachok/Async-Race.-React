import { WINNERS__LINK } from './const';
const deleteAPIWinner = async (id: number): Promise<void> => {
  try {
    await fetch(`${WINNERS__LINK}/${id}`, {
      method: 'DELETE',
    });
  } catch (error) {
    console.error(`Error deleting winner with ID ${id}:`, error);
  }
};

export default deleteAPIWinner;
