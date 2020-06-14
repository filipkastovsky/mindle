import { NextApiRequest } from 'next';
import ReqBody from './IReqBody';

export default interface IApiRequest extends NextApiRequest {
    body: ReqBody;
}
