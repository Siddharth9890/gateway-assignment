import { CartItemType } from "@/customTypes";
import { ActionType } from "./userActionTypes";

interface AddItemAction {
  type: ActionType.ADD_ITEM;
  payload: CartItemType;
}

interface RemoveItemAction {
  type: ActionType.REMOVE_ITEM;
  payload: CartItemType;
}

interface GetItemsAction {
  type: ActionType.TOTAL_ITEMS;
  payload: null;
}

export type Action = AddItemAction | RemoveItemAction | GetItemsAction;
