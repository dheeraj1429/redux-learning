const initalState = 10;
const ChangeTheNumber = (state = initalState, action) => {
  switch (action.type) {
    case "Inc":
      return state + action.payload;
    case "Dec":
      return state - 1;
    default:
      return state;
  }
};

export default ChangeTheNumber;
