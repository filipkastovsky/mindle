import { useState, useEffect, useCallback } from 'react';
import { createSecureLs } from '../utils/createSecureLs';
import Services from '../utils/Services';
import IBakalariBody from '../pages/api/services/bakalari/interfaces/IReqBody';
import SecureLS from 'secure-ls';

export const useCredentialStorage = () => {
    const [isEnabled, _setIsEnabled] = useState(false);
    const [secureLs, setSecureLs] = useState<SecureLS | undefined>();

    useEffect(() => {
        setSecureLs(createSecureLs());

        if (typeof localStorage !== 'undefined')
            _setIsEnabled(!!localStorage.getItem('saveCredentialsLocally'));
    }, []);

    const getBakalari = useCallback(() => secureLs?.get(Services.Bakalari), [
        secureLs,
    ]);

    const setBakalari = useCallback(
        (bakalari: IBakalariBody) => {
            secureLs?.set(Services.Bakalari, bakalari);
        },
        [secureLs],
    );

    const clearBakalari = useCallback(() => {
        secureLs?.remove(Services.Bakalari);
    }, [secureLs]);

    const setIsEnabled = useCallback(
        (isEnabled: boolean) => {
            _setIsEnabled(isEnabled);
            localStorage?.setItem(
                'saveCredentialsLocally',
                isEnabled ? 'true' : '',
            );
            !isEnabled && clearBakalari();
        },
        [_setIsEnabled, clearBakalari],
    );

    return { isEnabled, setIsEnabled, getBakalari, setBakalari };
};
