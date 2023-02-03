import { Dispatch } from "redux";
import { ActionType } from "./userActionTypes";
import { CartItemType } from "@/customTypes";
import { Action } from "./userAction";

export const addItem = (cart: CartItemType) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_ITEM,
      payload: cart,
    });
  };
};

export const removeItem = (cart: CartItemType) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.REMOVE_ITEM,
      payload: cart,
    });
  };
};

export const getItems = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.TOTAL_ITEMS,
      payload: null,
    });
  };
};
