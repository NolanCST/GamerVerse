import {
  Box,
  Fab,
  styled,
  Modal,
  Tooltip,
  Typography,
  Avatar,
  TextField,
  ButtonGroup,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import { Stack } from "@mui/system";
import { teal } from "@mui/material/colors";

const UpModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  gap:"9px",
  marginBottom: "35px"
});

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(teal[500]),
  backgroundColor: teal[500],
  '&:hover': {
    backgroundColor: teal[700],
  },
}));

const ColorFab = styled(Fab)(({ theme }) => ({
  color: theme.palette.getContrastText(teal[500]),
  backgroundColor: teal[500],
  '&:hover': {
    backgroundColor: teal[700],
  },
}));

export default function Add() {
  const [open, setOpen] = useState(false);

  //création d'un event onclick pour enclencher le Tooltip

  return (
    <div className="app">
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Crée un post"
        sx={{
          position: "fixed",
          bottom: 30,
          left: { xs: "calc 50%" },
          md: 30,
        }}
      >
        <ColorFab aria-label="add">
          <AddIcon />
        </ColorFab>
      </Tooltip>
      <UpModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor="white"
          borderRadius={9}
          p={5}
          sx={{ fontFamily: "Raleway", color: "white", letterSpacing: ".1rem" }}
        >
                    <UserBox>
            <Avatar sx={{ bgcolor: "purple" }} aria-label="recipe">
              As
            </Avatar>
            <Typography
              variant="span"
              sx={{ fontWeight: 500, color: "blueviolet" }}
            >
              Aslinn Wyvern
            </Typography>
          </UserBox>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            color="gray"
            textAlign="center"
          >
          Titre de ton post
          </Typography>

          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="Qu'est-ce que tu penses ?"
            variant="standard"
            color="grey"
          />
          <Stack direction="row" gap={2} mt={2.5} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="red" />
          </Stack>
          <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
            <ColorButton>Post</ColorButton>
            <ColorButton sx={{width:"100px"}}><DateRange/></ColorButton>
          </ButtonGroup>
        </Box>
      </UpModal>
    </div>
  );
}
