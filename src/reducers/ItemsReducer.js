import { ADD_ITEM, EDIT_ITEM, REMOVE_ITEMS, REMOVE_ITEM } from "../action/type";
import uuid from "uuid";
const initialState = [
  {
    title: "kkkff",
    id: uuid()
  },
  {
    title: "kkkxd",
    id: uuid()
  }
];
const ItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.newItem];
    case REMOVE_ITEM:
      return state.filter(item => item.id !== action.id);
    case EDIT_ITEM:
      return state.map(item =>
        item.id === action.ItemUpdated.id ? action.ItemUpdated : item
      );
    case REMOVE_ITEMS:
      return [];
    default:
      return state;
  }
};
export default ItemsReducer;
