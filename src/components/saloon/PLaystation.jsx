import React from "react";
import { Box } from "@mui/material";
import NavBar from "../layouts/NavBar";
import Posts from "../posts/Posts";
import Footer from "../layouts/Footer";

function PlayStation() {
  return (
    <>
      <NavBar />
      <div className="main-post-title">PLAYSTATION</div>
      <Box flex={4} p={2}>
        <Posts />
      </Box>
      <Footer />
    </>
  );
}

export default PlayStation;
