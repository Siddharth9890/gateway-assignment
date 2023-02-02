import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Drawer, Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import MediaCard from "./Card";
import ActionAreaCard from "./Card";
import ResponsiveAppBar from "./AppBar";
import Description from "./Description";
import { useState } from "react";
import Cart from "./Cart";
import axios from "axios";
import { useQuery } from "react-query";
import AddToCart from "./AddToCart";

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

export default function FullWidthGrid() {
  const [cartOpen, setCartOpen] = React.useState(false);
  const [cartItems, setCartItems] = React.useState<CartItemType[]>([
    {
      amount: 10,
      category: "mens",
      description: "test",
      id: 1,
      image: "",
      price: 100,
      title: "test hai",
    },
    {
      amount: 10,
      category: "mens",
      description: "test",
      id: 1,
      image: "",
      price: 100,
      title: "test hai",
    },
  ]);
  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((acc, item) => acc + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }

      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, [] as CartItemType[])
    );
  };

  const fetchProducts = () =>
    axios.get(`https://fakestoreapi.com/products`).then(({ data }) => data);
  const {
    isSuccess,
    data: products,
    isLoading,
    isError,
  } = useQuery(["getProducts"], () => fetchProducts());
  if (isSuccess) {
    return (
      <>
        <AddToCart
          cartItems={cartItems}
          cartOpen={cartOpen}
          getTotalItems={getTotalItems}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
          setCartItems={setCartItems}
          setCartOpen={setCartOpen}
        />
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={2}
            margin={2}
            columns={{ xs: 1, sm: 2, md: 12 }}
          >
            {products.map(
              (p: {
                category: string;
                description: string;
                id: number;
                image: string;
                price: number;
                title: string;
              }) => (
                <Grid item xs={1} md={3} key={p.id}>
                  <ActionAreaCard
                    category={p.category}
                    description={p.description}
                    id={p.id}
                    image={p.image}
                    price={p.price}
                    title={p.title}
                  />
                </Grid>
              )
            )}
          </Grid>
        </Box>
      </>
    );
  }
  if (isLoading) {
    return <div className="center">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="center">
        We cannot find your products
        <span role="img" aria-label="sad">
          😢
        </span>
      </div>
    );
  }
}
