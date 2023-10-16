import React from "react";
import { Box, Stack} from "@mui/material";
import NavBar from "../layouts/NavBar";
import Posts from "../posts/Posts";
import Footer from "../layouts/Footer";

function PlayStation() {
  return (
    <>
      <NavBar />
      <div className="main-post-title">PLAYSTATION</div>
      <Stack spacing={{ xs: 6, sm: 2 }} direction="row" flexWrap="wrap" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Box  item xs={2} sm={4} md={4}>
        <Posts />
      </Box>
      </Stack>

      <Footer />
    </>
  );
}

export default PlayStation;
