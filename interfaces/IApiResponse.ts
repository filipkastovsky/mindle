export interface IApiResponse<D> {
    statusCode: number;
    data?: D;
    message?: string;
}
