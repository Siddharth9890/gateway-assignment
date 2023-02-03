import useUser from "@/hooks/useUser";
import {
  Grid,
  Typography,
  Divider,
  Button,
  Box,
  CardMedia,
} from "@mui/material";

export default function Description() {
  
  return (
    <Grid container direction={"column"} style={{ height: "100%" }}>
      <Typography variant="subtitle1">test</Typography>
      <Divider />
      <Box sx={{ display: "flex", flexDirection: "row" }} mt={2}>
        <CardMedia
          component="img"
          height="200"
          sx={{ width: 200 }}
          image="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
          alt="green iguana"
        />

        <Typography variant="subtitle1">test</Typography>
        <Typography variant="body2" component="p">
          test
        </Typography>
      </Box>
      <Button variant="contained" color="primary" style={{ marginTop: "auto" }}>
        Purchase
      </Button>
    </Grid>
  );
}
