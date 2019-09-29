import { ADD_ITEM, EDIT_ITEM, REMOVE_ITEM, REMOVE_ITEMS } from "./type";

export const addItem = newItem => {
  return {
    type: ADD_ITEM,
    newItem
  };
};

export const deleteItem = id => {
  return {
    type: REMOVE_ITEM,
    id
  };
};

export const editItem = ItemUpdated => {
  return {
    type: EDIT_ITEM,
    ItemUpdated
  };
};
export const deleteItems = () => {
  return {
    type: REMOVE_ITEMS
  };
};
