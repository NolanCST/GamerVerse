import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function RenderHome() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image="/images/playstation.jpg" alt="PlayStation" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Channel:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            PlayStation
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea>
        <CardMedia component="img" height="140" image="/images/Xbox.jpg" alt="Xbox" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Channel:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Xbox
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default RenderHome;
