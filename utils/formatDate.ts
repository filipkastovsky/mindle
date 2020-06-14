import moment from 'moment';
export const formatDate = (date: number) =>
    moment(date).format('MMMM Do YYYY, HH:mm');
