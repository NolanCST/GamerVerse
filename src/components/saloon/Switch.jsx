import React from "react";
import { Box, Stack } from "@mui/material";
import Rightbar from "../layouts/Rightbar";
import NavBar from "../layouts/NavBar";
import Footer from "../layouts/Footer";
import Posts from "../posts/Posts";
import Leftbar from "../layouts/Leftbar";

export default function Switch() {
  return (
    <>
      <NavBar />
      <Stack direction="row" spacing={0}
   useFlexGap flexWrap="wrap">
          {/* <Leftbar /> */}
      <Box flex={5} p={2} mr={20} ml={20}>
        <Posts />
      </Box>
      <Rightbar />
      </Stack>
      {/* <div className="main-post-title">SWITCH</div> */}
      <Footer />
    </>
  );
}
