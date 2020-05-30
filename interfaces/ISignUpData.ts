export interface ISignupData {
    _id: string;
    identities: any[];
    type: string;
    creation_date: number;
    last_authentication_date: number;
    disabled: boolean;
    data: object;
}
