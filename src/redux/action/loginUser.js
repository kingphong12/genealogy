export const loginUser = (data) => {
  return {
    type: "LOGIN__USER",
    payload: data,
  };
};
