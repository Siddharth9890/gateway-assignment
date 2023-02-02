import { Badge, Drawer } from "@mui/material";
import Cart from "./Cart";
import { CartItemType } from ".";
import { ShoppingCart } from "@mui/icons-material";

export default function AddToCart({
  cartItems,
  cartOpen,
  handleAddToCart,
  setCartItems,
  setCartOpen,
  getTotalItems,
  handleRemoveFromCart,
}: {
  handleAddToCart: (clickedItem: CartItemType) => void;
  cartOpen: boolean;
  cartItems: CartItemType[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>;
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleRemoveFromCart: (id: number) => void;
  getTotalItems: (items: CartItemType[]) => number;
}) {
  return (
    <>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <Badge
        badgeContent={getTotalItems(cartItems)}
        onClick={() => setCartOpen(true)}
        color="error"
      >
        <ShoppingCart />
      </Badge>
    </>
  );
}
