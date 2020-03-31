export default interface ITask {
    sender: string | null;
    date: string | null;
    body: string | null;
    props?: any;
}
