import { Tokens } from './Tokens';

export const getRefreshToken = () => localStorage.getItem(Tokens.Refresh);
