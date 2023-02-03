import { Badge, Drawer } from "@mui/material";
import Cart from "./Cart";
import { ShoppingCart } from "@mui/icons-material";
import useUser from "@/hooks/useUser";
import { CartItemType } from "@/customTypes";

export default function AddToCart({
  cartItems,
  cartOpen,
  setCartItems,
  setCartOpen,
}: {
  cartOpen: boolean;
  cartItems: CartItemType[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>;
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [user, addItem, removeItem] = useUser();
  return (
    <>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={user}
          addToCart={addItem}
          removeFromCart={removeItem}
        />
      </Drawer>
      <Badge badgeContent={2} onClick={() => setCartOpen(true)} color="error">
        <ShoppingCart />
      </Badge>
    </>
  );
}
