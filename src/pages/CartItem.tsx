import { CartItemType } from "@/customTypes";
import { Button } from "@mui/material";

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (clickedItem: CartItemType) => void;
};

const CartItem = ({ item, addToCart, removeFromCart }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid",
        paddingBottom: "20px",
      }}
    >
      <div style={{ flex: 1 }}>
        <h3>{item.title}</h3>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Price: ${item.price}</p>
          <p>Total: ${(item.noOfItems * item.price).toFixed(2)}</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => removeFromCart(item)}
          >
            -
          </Button>
          <p>{item.noOfItems}</p>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => addToCart(item)}
          >
            +
          </Button>
        </div>
      </div>
      <img
        src={item.image}
        alt={item.title}
        style={{ height: 100, width: 100, margin: 3 }}
      />
    </div>
  );
};

export default CartItem;
