import { Routes } from '../../Routes';

export const showSignOut = (value: Routes) =>
    ![Routes.CreateAccount, Routes.SignIn].includes(value);
