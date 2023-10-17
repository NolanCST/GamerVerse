import {
  Box,
  Fab,
  styled,
  Modal,
  Tooltip,
  Typography,
  Avatar,

} from "@mui/material";
import React, { useState } from "react";
import { Add as AddIcon } from "@mui/icons-material";

const UpModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  gap: 15
});

export default function Add() {
  const [open, setOpen] = useState(false);

  //création d'un event onclick pour enclencher le Tooltip

  return (
    <div className="app">
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Crée un post"
        sx={{ position: "fixed", bottom: 30, left: { xs: "calc 50%" }, right:0, md: 30 }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <UpModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={200}
          bgcolor="white"
          borderRadius={9}
          p={5}
          sx={{ fontFamily: "Raleway", color: "white", letterSpacing: ".1rem" }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            color="gray"
            textAlign="center"
          >
            Get Jinxed !
          </Typography>
          <UserBox>
            <Avatar sx={{ bgcolor: "purple" }} aria-label="recipe">
              As
            </Avatar>
            <Typography
              variant="span"
              sx={{ fontWeight: 500, color: "blueviolet" }}
            >
              Miaaaaouuuussss
            </Typography>
          </UserBox>
        </Box>
      </UpModal>
    </div>
  );
}
