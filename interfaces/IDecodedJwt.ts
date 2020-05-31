export interface IDecodedJwt {
    exp: number;
    iat: number;
    iss: string;
    stitch_devId: string;
    stitch_domainId: string;
    sub: string;
    typ: string;
}
