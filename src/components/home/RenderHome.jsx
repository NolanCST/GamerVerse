import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box, Stack, Divider, Chip, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import "./RenderHome.css";

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
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
        useFlexGap
        flexWrap="wrap"
      >
        {/* <div className="imageMainHome">
          <img src="https://images2.alphacoders.com/131/1312941.jpg" alt="imageHome" className="imgMainHome"/>
        </div> */}
        {/* <Box sx={{ width: "100%" }}> */}
        <Card >
      <CardMedia
        component="img"
        alt="ImageHome"
        height="300"
        width="400"
        image="https://images2.alphacoders.com/131/1312941.jpg"
      />
      </Card>
      {/* <Tooltip title="Add" placement="right-start">
        <Chip label="PLAYS HAS NO LIMITS" color="primary"/>
        </Tooltip> */}
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>


          <Grid
            className="testOne"
            display="flex"
            justifyContent="space-around"
            item
            xs={12}
            md={3}
          >
            <Card sx={{ maxWidth: 250 }}>
              {/* <CardActionArea> */}
              <Link
                to="/PlayStation"
                style={{ textDecoration: "none", color: "Black" }}
              >
                <CardMedia
                  component="img"
                  image="/images/playstation.jpg"
                  alt="PlayStation"
                />
                {/* <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      "PLAYS HAS NO LIMITS"
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Modérateur : Dennys date dernier post nbre de post
                    </Typography>
                  </CardContent> */}
              </Link>
              {/* </CardActionArea> */}
            </Card>
          </Grid>

          <Grid
            display="flex"
            justifyContent="space-around"
            item
            xs={12}
            md={3}
          >
            <Card sx={{ maxWidth: 250 }}>
              <Link
                to="/Xbox"
                style={{ textDecoration: "none", color: "Black" }}
              >
                <CardMedia
                  component="img"
                  image="/images/Xbox.jpg"
                  alt="Xbox"
                />
                {/* <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      "POWER YOUR DREAMS"
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Modératrice : Zaïnab
                    </Typography>
                  </CardContent>
                </CardActionArea> */}
              </Link>
            </Card>
          </Grid>

          <Grid
            display="flex"
            justifyContent="space-around"
            item
            xs={12}
            md={3}
          >
            <Card sx={{ maxWidth: 250 }}>
              <Link
                to="/Switch"
                style={{ textDecoration: "none", color: "Black" }}
              >
                {/* <CardActionArea> */}
                <CardMedia
                  component="img"
                  image="/images/Switch.jpg"
                  alt="Switch"
                />
                {/* <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      "PLAY TOGETHER ANYTIME, ANYWHERE"
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Modératrice : Aslinn
                    </Typography>
                  </CardContent>
                  <Chip label="Hey ! Listen" style={{color:"red"}}/>
                  <Chip label="Zelda Botw / Zeldat tokt" sx={{bgcolor:"red", color:"white"}}/>
                </CardActionArea> */}
              </Link>
            </Card>
          </Grid>

          <Grid
            display="flex"
            justifyContent="space-around"
            item
            xs={12}
            md={3}
          >
            <Card sx={{ maxWidth: 250, boxShadow: 3 }}>
              <Link
                to="/Computer"
                style={{ textDecoration: "none", color: "Black" }}
              >
                {/* <CardActionArea> */}
                <CardMedia
                  component="img"
                  image="/images/PC.jpg"
                  alt="Computer"
                />
                {/* <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      "THE WAY IT'S MEANT TO BE PLAYED"
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Modérateur : Nono (Wario the winner !)
                    </Typography>
                //   </CardContent> */}
                {/* // </CardActionArea> */}
              </Link>
            </Card>
          </Grid>
        </Grid>
        {/* </Box> */}
      </Stack>
    </div>
  );
}

export default RenderHome;
