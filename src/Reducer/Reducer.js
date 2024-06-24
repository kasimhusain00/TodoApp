const initialData = 0;

export const numvalue = (state = initialData, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - action.payload;

    default:
      return state;
  }
};

const inidata = {
  data: [],
};
export const tododata = (state = inidata, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, data: [...state.data, action.payload] };
      case "DELETE":
        return {
          ...state,
          data: state.data.filter((todo) => todo.id !== action.payload),
        };
      //   case "EDIT":
      // const { id, newFirstval } = action.payload;
      // return {
      //   ...state,
      //   data: state.data.map((todo) =>
      //     todo.id === id ? { ...todo, firstval: newFirstval } : todo
      //   ),
      // };
  case "UPDATE":
      return {
        ...state,
        data: state.data.map((item) =>
          item.id === action.payload.id ? { ...item, firstval: action.payload.change.firstval } : item
        )
      };

    default:
      return state;
  }
};
