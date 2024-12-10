import { WINNERS__LINK } from '../types/const';

const getAPIWinnerStatus = async (id: number): Promise<number> =>
  (await fetch(`${WINNERS__LINK}/${id}`)).status;

export default getAPIWinnerStatus;
