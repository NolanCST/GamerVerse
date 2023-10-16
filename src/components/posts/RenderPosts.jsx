import React from "react";
import { Avatar, Box, IconButton, Typography, Card, CardHeader, CardMedia, CardContent, CardActions, Checkbox } from "@mui/material";
import { red } from "@mui/material/colors";
import { Favorite, Share, FavoriteBorder, MoreVert } from "@mui/icons-material";
import { useState } from "react";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import Comments from "./actions/Comment";

function RenderPosts(props) {
   const [content, setContent] = useState("");
   const [showCommentBox, setShowCommentBox] = useState(false); // État pour afficher ou masquer la zone de commentaire

   const handleCommentChange = (e) => {
      setContent(e.target.value);
   };

   const submitComment = () => {
      props.inputComments(content);
      setContent(""); // Réinitialise le champ de commentaire après l'envoi
   };

   const toggleCommentBox = () => {
      setShowCommentBox(!showCommentBox); // Inverser l'état pour afficher ou masquer la zone de commentaire
   };

   return (
      <>
         <div className="infosPosts"></div>
         <Card sx={{ margin: 5 }}>
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
               <IconButton aria-label="Comments" onClick={toggleCommentBox}>
                  <ChatBubbleOutlineRoundedIcon />
                  {props.numberComments}
               </IconButton>
               <IconButton aria-label="share">
                  <Share />
               </IconButton>
            </CardActions>
            {showCommentBox && ( // Afficher le champ de commentaire et le bouton si showCommentBox est true
               <div>
                  <input type="text" value={content} onChange={handleCommentChange} placeholder="Commenter" />
                  <button onClick={submitComment}>Poster</button>
                  {props.comments.map((items, index) => {
                     return (
                        <div key={index}>
                           <Comments contentComment={items.content} firstnameComment={items.firstname} lastnameComment={items.lastname} />
                        </div>
                     );
                  })}
               </div>
            )}
         </Card>
      </>
   );
}
export default RenderPosts;
