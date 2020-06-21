import IBakalariBody from '../pages/api/services/bakalari/interfaces/IReqBody';
import SecureLS from 'secure-ls';
import Services from './Services';

export interface ICredentialStorage {
    bakalari: IBakalariBody;
}

const credentialStorage = new SecureLS({
    encodingType: 'aes',
    isCompression: false,
});

export default class CredentialStorage {
    get getBakalari() {
        return credentialStorage.get(Services.Bakalari);
    }

    set setBakalari(bakalari: IBakalariBody) {
        credentialStorage.set(Services.Bakalari, bakalari);
    }
}
