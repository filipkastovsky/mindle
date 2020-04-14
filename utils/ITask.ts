export default interface ITask {
    _id: string;
    sender: string | null;
    date: string | null;
    body: string | null;
    props?: any;
}
