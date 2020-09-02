export const queryString = (obj) =>
  Object.keys(obj)
    .map((key) => key + "=" + obj[key])
    .join("&");
export const isEqual = (...objects) =>
  objects.every((obj) => JSON.stringify(obj) === JSON.stringify(objects[0]));
export const toObject = (arr, key) => arr.reduce((a, b) => ({ ...a, [b[key]]: b }), {});

export const renameKeys = (keysMap, obj) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] },
    }),
    {}
  );
