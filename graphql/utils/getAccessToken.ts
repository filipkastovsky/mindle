import { Tokens } from './Tokens';

export const getAccessToken = () => localStorage.getItem(Tokens.Access);
