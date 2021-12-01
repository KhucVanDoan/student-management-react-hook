const initialState = [
  {
    id: 0,
    name: "khuc van doan",
    number: " 0868194928",
    email: "doankhuc123@gmail.com",
  },
  {
    id: 1,
    name: "Dam thi Phuong",
    number: " 0383836425",
    email: "phuongdam123@gmail.com",
  },
];
const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_STUDENT":
      state = [...state, action.payload];
      return state;
    case "UPDATE_STUDENT":
      const updateState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updateState;
      return state;
    case "DELETE_STUDENT":
      const fillterStudent = state.filter(
        (contac) => contac.id !== action.payload && contac
      );
      state = fillterStudent;
      return state;
    default:
      return state;
  }
};
export default studentReducer;
