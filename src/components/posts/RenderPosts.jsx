import React from "react";
import { Avatar, Box, IconButton, Typography, Card, CardHeader, CardMedia, CardContent, CardActions, Checkbox } from "@mui/material";
import { red } from "@mui/material/colors";
import { Favorite, Share, FavoriteBorder, MoreVert } from "@mui/icons-material";
import { useState } from "react";

function RenderPosts(props) {
   const [content, setContent] = useState("");

   const handleCommentChange = (e) => {
      setContent(e.target.value);
      console.log(e.target.value);
   };

   const submitComment = () => {
      props.inputComments(content);
      setContent(""); // Réinitialise le champ de commentaire après l'envoi
   };

   return (
      <>
         <div className="infosPosts"></div>
         <Box flex={4} p={2}>
         <Card>
            <CardHeader
               avatar={
                  <Avatar sx={{ bgcolor: "purple" }} aria-label="recipe">
                     As
                  </Avatar>
               }
               action={
                  <IconButton aria-label="settings">
                     <MoreVert />
                  </IconButton>
               }
               title={props.title}
               subheader={props.date}
            />
            <CardMedia component="img" height="10%" image="https://www.tryagame.fr/wp-content/uploads/2023/05/1676385974-1953-capture-d-ecran.jpg" alt="Zelda tokt" />
            <CardContent>
               <Typography variant="body2" color="text.secondary">
                  {props.content}
               </Typography>
            </CardContent>
            <CardActions disableSpacing>
               <IconButton aria-label="add to favorites" onClick={props.btnLike}>
                  <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "#ff1744" }} />} />
                  {props.likes}
               </IconButton>
               <IconButton aria-label="share">
                  <Share />
               </IconButton>
            </CardActions>
            <input type="text" value={content} onChange={handleCommentChange} placeholder="Commenter" />
            <button onClick={submitComment}>Poster</button>
         </Card>
         </Box>
      </>
   );
}
export default RenderPosts;
