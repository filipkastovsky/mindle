import { Routes } from '../../Routes';

export const showBottomsNavigation = (value: Routes) =>
    [Routes.News, Routes.Settings, Routes.Services].includes(value);
