export const emptyFromObject = (obj, ...toBeDeleted) => {
  const newObj = JSON.parse(JSON.stringify(obj));

  toBeDeleted.forEach((item) => (newObj[item] = ""));
  return newObj;
};
