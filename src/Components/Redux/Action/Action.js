export const Inc = (num) => {
  return {
    type: "Inc",
    payload: num,
  };
};

export const Dec = () => {
  return {
    type: "Dec",
  };
};
