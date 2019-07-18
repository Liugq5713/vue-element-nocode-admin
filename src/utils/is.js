export const isObject = obj => {
  return obj !== null && typeof obj === "object";
};

export const isArray = obj => {
  return Array.isArray(obj);
};
