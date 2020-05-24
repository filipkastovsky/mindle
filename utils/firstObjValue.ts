export const firstObjValue = <T extends object>(obj: T) =>
  Object.values(obj)[0];
