import { WINNERS__LINK } from './const';

const getAPIWinnerStatus = async (id: number): Promise<number> =>
  (await fetch(`${WINNERS__LINK}/${id}`)).status;

export default getAPIWinnerStatus;
