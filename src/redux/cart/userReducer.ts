import { CartItemType } from "@/customTypes";
import { ActionType } from "./userActionTypes";
import { combineReducers } from "redux";
import { Action } from "./userAction";

const initialState = [
  {
    id: 0,
    title: "",
    description: "",
    price: 0,
    category: "",
    image: "",
    noOfItems: 0,
  },
];

const userReducer = (
  state: CartItemType[] = initialState,
  action: Action
): CartItemType[] => {
  switch (action.type) {
    case ActionType.ADD_ITEM:
      const isItemInCart = state.find((item) => item.id === action.payload.id);

      if (isItemInCart) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, amount: item.price + 1 }
            : item
        );
      }

      return [...state, { ...action.payload, noOfItems: 1 }];
    case ActionType.REMOVE_ITEM:
      state.reduce((acc, item) => {
        if (item.id === action.payload.id) {
          if (item.noOfItems === 1) return acc;
          return [...acc, { ...item, amount: item.noOfItems - 1 }];
        } else {
          return [...acc, item];
        }
      }, [] as CartItemType[]);
    default:
      return state;
  }
};

const reducers = combineReducers({
  user: userReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
