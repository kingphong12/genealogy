const innitialState = {};

const loginReducer = (state = innitialState, action) => {
  switch (action.type) {
    case "LOGIN__USEER": {
      return {};
    }

    default:
      return state;
  }
};
