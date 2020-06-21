import SecureLS from 'secure-ls';

export const createSecureLs = () =>
    new SecureLS({
        encodingType: 'aes',
        isCompression: false,
    });
