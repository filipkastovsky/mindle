import { NextApiRequest } from 'next';
import IReqBody from './IReqBody';

export default interface IApiRequest extends NextApiRequest {
    body: IReqBody;
}
