import { WINNERS__LINK } from './const';

const getAPIWinnerStatus = async (id: number): Promise<number> => {
  const response = await fetch(`${WINNERS__LINK}/${id}`);
  return response.status;
};

export default getAPIWinnerStatus;
