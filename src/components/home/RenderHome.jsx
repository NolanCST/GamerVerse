import * as React from "react";
import { Link } from "react-router-dom";
import "./RenderHome.css";
//-----> import mui

import {
  Box,
  Typography,
  CardMedia,
  Stack,
  Divider,
  Chip,
  Tooltip,
  styled,
  Paper,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// -----> const

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
      <Box bgcolor="white" position="absolute" top="65%" left={0} sx={{opacity:0.5, width:"100%", height:"35%", zIndex:"0"}} ></Box>
      <Stack
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
        useFlexGap
        flexWrap="wrap"
       
      >
        
          <Box className="container">
            <div className="slider-wrapper">
              <div className="slider">
                <img
                  id="slide-1"
                  src="./images/smashbrosultimate.jpeg"
                  alt="3D rendering of an imaginary orange planet in space"
                />
                <img
                  id="slide-2"
                  src="./images/skyrim.png"
                  alt="3D rendering of an imaginary green planet in space"
                />
                <img
                  id="slide-3"
                  src="./images/Warriors.png"
                  alt="3D rendering of an imaginary blue planet in space"
                />
              </div>
              <div className="slider-nav">
                <a href="#slide-1"></a>
                <a href="#slide-2"></a>
                <a href="#slide-3"></a>
              </div>
            </div>
          </Box>
          {/* <Box opacity={0.5} position="absolute" top={50} bgcolor="black" width={50}></Box> */}
          <Box
            sx={{ bgcolor: "white" }}
            spacing={2}
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            zIndex={1}
          >
            {/* <Grid
            container
            rowspacing={2}
            columnspacing={{ xs: 1, sm: 2, md: 3 }}
            > */}
              <Box display="flex"
              //   className="testOne"
              //   display="flex"
              //   justifyContent="space-around"
              //   item
              //   xs={12}
              //   md={3}
              >
                {/* <Card sx={{ maxWidth: 250 }}> */}
                <Link
                  to="/PlayStation"
                  style={{ textDecoration: "none", color: "Black" }}
                >
                  <CardMedia
                    component="img"
                    image="/images/playstation.jpg"
                    alt="PlayStation"
                  />
                </Link>
                {/* </Card> */}
              </Box>

              <Box
                display="flex"
              //   justifyContent="space-around"
              //   item
              //   xs={12}
              //   md={3}
              >
                {/* <Card sx={{ maxWidth: 250 }}> */}
                <Link
                  to="/Xbox"
                  style={{ textDecoration: "none", color: "Black" }}
                >
                  <CardMedia
                    component="img"
                    image="/images/Xbox.jpg"
                    alt="Xbox"
                  />
                </Link>
                {/* </Card> */}
              </Box>

              <Box
                display="flex"
              //   justifyContent="space-around"
              //   item
              //   xs={12}
              //   md={3}
              >
                {/* <Card sx={{ maxWidth: 250 }}> */}
                <Link
                  to="/Switch"
                  style={{ textDecoration: "none", color: "Black" }}
                >
                  <CardMedia
                    component="img"
                    image="/images/Switch.jpg"
                    alt="Switch"
                  />
                </Link>
                {/* </Card> */}
              </Box>

              <Box
                display="flex"
              //   justifyContent="space-around"
              //   item
              //   xs={12}
              //   md={3}
              >
                {/* <Card sx={{ maxWidth: 250, boxShadow: 3 }}> */}
                <Link
                  to="/Computer"
                  style={{ textDecoration: "none", color: "Black" }}
                >
                  <CardMedia
                    component="img"
                    image="/images/PC.jpg"
                    alt="Computer"
                  />
                </Link>
                {/* </Card> */}
              </Box>
            {/*    */}
          </Box>
        
      </Stack>
    </div>
  );
}

export default RenderHome;
