import SecureLS from 'secure-ls';

export const createSecureLs = () =>
    new SecureLS({
        isCompression: false,
    });
