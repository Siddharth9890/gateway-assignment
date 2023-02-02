import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useRouter } from "next/router";

export default function ActionAreaCard({
  id,
  title,
  price,
  description,
  category,
  image,
}: {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}) {
  const router = useRouter();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => router.push(`/products/${id}`)}>
        <CardMedia component="img" height="140" image={image} alt={title} />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
