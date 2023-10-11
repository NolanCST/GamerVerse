import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function RenderHome() {
  return (
    <div className="cardContainer">
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid display="flex" justifyContent="center" item xs={6}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia component="img" image="/images/playstation.jpg" alt="PlayStation" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Channel:
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    PlayStation
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid display="flex" justifyContent="center" item xs={6}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia component="img" image="/images/Xbox.jpg" alt="Xbox" />
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
          </Grid>
          <Grid display="flex" justifyContent="center" item xs={6}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia component="img" image="/images/Switch.jpg" alt="Switch" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Channel:
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Switchn
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid display="flex" justifyContent="center" item xs={6}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia component="img" image="/images/PC.jpg" alt="Computer" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Channel:
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    PC
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default RenderHome;