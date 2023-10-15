import React from "react";
import { Avatar, Box, IconButton, Typography, Card, CardHeader, CardMedia, CardContent, CardActions, Checkbox } from "@mui/material";
import { red } from "@mui/material/colors";
import { Favorite, Share, FavoriteBorder, MoreVert } from "@mui/icons-material";

function RenderPosts(props) {
   return (
      <>
         <div className="infosPosts">
         </div>
         <Card sx={{margin:5}}>
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
          <CardMedia
            component="img"
            height="10%"
            image="https://www.tryagame.fr/wp-content/uploads/2023/05/1676385974-1953-capture-d-ecran.jpg"
            alt="Zelda tokt"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            {props.content}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton  n aria-label="add to favorites">
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"#ff1744"}} />} />
            {props.like}
            </IconButton>
            <IconButton aria-label="share">
              <Share />
            </IconButton>
          </CardActions>
        </Card>
        
      </>
   );
}
export default RenderPosts;
