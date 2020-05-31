export interface IValue {
    value: NavigationTabValues;
    label: string;
}

export enum NavigationTabValues {
    News = '/news',
    Services = '/services',
    Settings = '/settings',
}

export const NavigationTabs: IValue[] = [
    {
        value: NavigationTabValues.News,
        label: 'News',
    },
    {
        value: NavigationTabValues.Services,
        label: 'Services',
    },
    {
        value: NavigationTabValues.Settings,
        label: 'Settings',
    },
];
