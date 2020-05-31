import React, { createContext, FC, useContext, useState } from 'react';
import LoadingOverlay from 'react-loading-overlay';

export interface LoadingContextState {
    active: boolean;
    setActive: (active: boolean) => void;
}

const defaultValue: LoadingContextState = {
    active: false,
    setActive: () => null,
};

interface ContextProps {}

export const LoadingContext = createContext<LoadingContextState>(defaultValue);

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider: FC<ContextProps> = ({ children }) => {
    const [active, setActive] = useState(defaultValue.active);

    return (
        <LoadingContext.Provider value={{ active, setActive }}>
            <LoadingOverlay active={active} spinner text="Loading...">
                {children}
            </LoadingOverlay>
        </LoadingContext.Provider>
    );
};
