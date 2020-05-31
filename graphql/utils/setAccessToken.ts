import { Tokens } from './Tokens';

export const setAccessToken = (token: string) =>
    localStorage.setItem(Tokens.Access, token);
