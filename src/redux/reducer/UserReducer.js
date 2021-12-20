const innitialState = {};

const reducer = (state = innitialState, action) => {
  switch (action.type) {
    case "LIST": {
      return state;
    }
    default:
      return state;
  }
};

export default reducer;
