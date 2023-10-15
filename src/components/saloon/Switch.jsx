import React from "react";
import { Box, Stack } from "@mui/material";
import Rightbar from "../layouts/Rightbar";
import NavBar from "../layouts/NavBar";
import Posts from "../posts/Posts";

export default function Switch() {
  return (
    <>
      <NavBar />
      <Stack direction="row" spacing={2}>
      <Box flex={4} p={2}>
        <Posts />
      </Box>
      <Rightbar />
      </Stack>
      {/* <div className="main-post-title">SWITCH</div> */}

    </>
  );
}
