import { Tokens } from './Tokens';

export const setRefreshToken = (token: string) =>
    localStorage.setItem(Tokens.Refresh, token);
