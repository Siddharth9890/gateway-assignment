import { CartItemType } from "@/customTypes";
import { actionCreators } from "@/redux/cart";
import { RootState } from "@/redux/cart/userReducer";
import { useDispatch, useSelector } from "react-redux";
import { Action, bindActionCreators, Dispatch } from "redux";

const useUser = (): [
  CartItemType[],
  (cart: CartItemType) => (dispatch: Dispatch<Action>) => void,
  (cart: CartItemType) => (dispatch: Dispatch<Action>) => void,
  () => (dispatch: Dispatch<Action>) => void
] => {
  const { user } = useSelector((state: RootState) => state);

  const dispatch = useDispatch();

  const { addItem, getItems, removeItem } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return [user, addItem, removeItem, getItems];
};

export default useUser;
