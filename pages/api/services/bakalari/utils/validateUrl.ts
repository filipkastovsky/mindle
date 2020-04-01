export default (url: string) => /https:\/\/.*[a-z,A-Z,.](?!.*\/)/g.test(url);
