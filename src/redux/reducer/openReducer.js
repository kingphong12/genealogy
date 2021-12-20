const innitialState = {
  opened: true,
};

const openReducer = (state = innitialState, action) => {
  switch (action.type) {
    case "SET_SIBAR": {
      return {
        ...state,
        opened: action.payload,
      };
    }
    default:
      return state;
  }
};

export default openReducer;
