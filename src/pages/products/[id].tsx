import { useRouter } from "next/router";
import {
  Grid,
  Typography,
  Divider,
  Button,
  Box,
  CardMedia,
} from "@mui/material";
import axios from "axios";
import { useQuery } from "react-query";
export default function Product() {
  const router = useRouter();
  const productId = typeof router.query?.id === "string" ? router.query.id : "";
  const fetchProduct = (id: string) =>
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then(({ data }) => data);
  const {
    isSuccess,
    data: product,
    isLoading,
    isError,
  } = useQuery(["getProduct", productId], () => fetchProduct(productId));
  if (isSuccess) {
    return (
      <Grid
        container
        direction={"column"}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "100px",
        }}
        style={{ height: "100%" }}
      >
        <Divider />
        <CardMedia
          component="img"
          height="300"
          sx={{ width: 200 }}
          image={product.image}
          alt={product.title}
        />
        <Box
          sx={{
            flexBasis: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
            gap: "25px",
          }}
          mt={2}
        >
          <Typography variant="subtitle1">{product.category}</Typography>
          <Typography variant="subtitle1">{product.title}</Typography>
          <Typography variant="body2" component="p">
            {product.description}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "10px",
            }}
          >
            {product.price}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
            }}
          >
            Add to cart
          </Button>
        </Box>
      </Grid>
    );
  }
  if (isLoading) {
    return <div className="center">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="center">
        We cannot find your pokemon{" "}
        <span role="img" aria-label="sad">
          😢
        </span>
      </div>
    );
  }
}
