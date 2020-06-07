export default interface ITask {
    _id?: string;
    sender: string | null;
    date?: number | null;
    body: string | null;
    service: string;
    starred: boolean;
    resolved: boolean;
    props?: any;
}
