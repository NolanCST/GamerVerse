import { Box } from "@mui/material";
import React from "react";

export default function Leftbar() {
  return (
    <Box
      bgcolor="inherit"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
    </Box>
  );
}
