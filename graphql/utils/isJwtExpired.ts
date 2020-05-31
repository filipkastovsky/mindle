import jwtDecode from 'jwt-decode';
import { IDecodedJwt } from '../../interfaces/IDecodedJwt';
export const isJwtExpired = (jwt: string): boolean =>
    (jwtDecode(jwt) as IDecodedJwt).exp < Date.now() / 1000;
