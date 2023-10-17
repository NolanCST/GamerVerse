import { Box, Fab, styled, Modal, Tooltip, Typography, Avatar, TextField, ButtonGroup, Button, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import React, { useState } from "react";
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from "@mui/icons-material";
import { Stack, display } from "@mui/system";
import { teal } from "@mui/material/colors";
import { useNavigate } from "react-router";
import "./add.css";

const UpModal = styled(Modal)({
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
});

const UserBox = styled(Box)({
   display: "flex",
   alignItems: "center",
   flexDirection: "row",
   gap: "9px",
   marginBottom: "35px",
});

const ColorButton = styled(Button)(({ theme }) => ({
   color: theme.palette.getContrastText(teal[500]),
   backgroundColor: teal[500],
   "&:hover": {
      backgroundColor: teal[700],
   },
}));

const ColorFab = styled(Fab)(({ theme }) => ({
   color: theme.palette.getContrastText(teal[500]),
   backgroundColor: teal[500],
   "&:hover": {
      backgroundColor: teal[700],
   },
}));

export default function Add() {
   const [open, setOpen] = useState(false);
   const [postTitle, setPostTitle] = useState("");
   const [postContent, setPostContent] = useState("");
   const [navigatePlatform, setNavigatePlatform] = useState("");
   const navigate = useNavigate();

   const handleInputChangeTitle = (e) => {
      setPostTitle(e.target.value);
   };

   const handleInputChangeContent = (e) => {
      setPostContent(e.target.value);
   };

   const handleNavigatePlatformChange = (e) => {
      setNavigatePlatform(e.target.value);
   };

   const postPosts = async () => {
      if (!navigatePlatform) {
         alert("Veuillez sélectionner une plateforme avant de poster.");
         return;
      }

      let options = {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Authorization: "bearer " + localStorage.getItem("@TokenUser"),
         },
         body: JSON.stringify({
            title: postTitle,
            content: postContent,
         }),
      };

      try {
         const response = await fetch("https://social-network-api.osc-fr1.scalingo.io/gamer-verse/post", options);

         const data = await response.json();
         console.log("data: ", data);
         if (data.success) {
            alert("Votre post a été mis en ligne sur le channel " + navigatePlatform);
            navigate("/" + navigatePlatform);
         } else {
            console.error("Échec de la requête HTTP");
         }
      } catch (error) {
         console.error("Erreur lors de la requête : ", error);
      }
   };

   //création d'un event onclick pour enclencher le Tooltip

   return (
      <>
      {/* <div className="app"> */}
         <Tooltip
            onClick={(e) => setOpen(true)}
            title="Crée un post"
            sx={{
               position: "fixed",
               bottom: 30,
               left: { xs: "calc 50%" },
               md: 30,
               ml: 13
            }}
         >
            <ColorFab aria-label="add">
               <AddIcon />
            </ColorFab>
         </Tooltip>
         <UpModal open={open} onClose={(e) => setOpen(false)} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box width={400} height={280} bgcolor="white" borderRadius={9} p={5} sx={{ fontFamily: "Raleway", color: "white", letterSpacing: ".1rem" }}>
               <UserBox>
                  <Typography variant="span" sx={{ fontWeight: 700, color: "blueviolet", fontSize: 20 }}>
                     Réaliser un nouveau Post
                  </Typography>
               </UserBox>
               <div className="infosContainer">
                  <Typography id="modal-modal-title" variant="h6" component="h2" color="gray" textAlign="left">
                     <TextField onChange={handleInputChangeTitle} id="title" label="Titre du post" variant="standard" />
                  </Typography>
                  <FormControl id="select" variant="standard" sx={{ m: 1, minWidth: 120 }}>
                     <InputLabel id="select-standard">Plateforme</InputLabel>
                     <Select labelId="select-standard-label" id="simple-select-standard" value={navigatePlatform} onChange={handleNavigatePlatformChange} label="NavigatePlatform">
                        <MenuItem value="">
                           <em>--Choisissez votre plateforme--</em>
                        </MenuItem>
                        <MenuItem value="Playstation">Playstation</MenuItem>
                        <MenuItem value="Xbox">Xbox</MenuItem>
                        <MenuItem value="Switch">Switch</MenuItem>
                        <MenuItem value="Computer">PC</MenuItem>
                     </Select>
                  </FormControl>
               </div>

               <TextField onChange={handleInputChangeContent} sx={{ width: "100%" }} id="standard-multiline-static" multiline rows={3} placeholder="Qu'est-ce que tu penses ?" variant="standard" color="grey" />
               <Stack direction="row" gap={2} mt={2.5} mb={3}>
                  <EmojiEmotions color="primary" />
                  <Image color="secondary" />
                  <VideoCameraBack color="success" />
                  <PersonAdd color="red" />
               </Stack>
               <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
                  <ColorButton onClick={postPosts}>Post</ColorButton>
               </ButtonGroup>
            </Box>
         </UpModal>
      {/* </div> */}
      </>
   );
}
