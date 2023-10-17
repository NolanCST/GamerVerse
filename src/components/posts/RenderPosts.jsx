import * as React from "react";
import {
  Avatar,
  Box,
  IconButton,
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Checkbox,
  TextField,
  Tooltip,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { Favorite, Share, FavoriteBorder, MoreVert } from "@mui/icons-material";
import { useState } from "react";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import Comments from "./actions/Comment";
import NeedConnexionAlert from "../Alerts/NeedConnexionAlert";
import SendIcon from "@mui/icons-material/Send";
import "./renderPosts.css";
import { format } from "date-fns";

function RenderPosts(props) {
  const [content, setContent] = useState("");
  const [showCommentBox, setShowCommentBox] = useState(false); // État pour afficher ou masquer la zone de commentaire
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("@TokenUser"));

  const handleButtonClick = () => {
    setIsButtonClicked(true);
  };

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
      <Box flex={4} p={2}>
        <Card>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "purple" }} aria-label="recipe">
                {props.firstname.charAt(0)}
                {props.lastname.charAt(0)}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <Tooltip
                  title="Suppression (future upgrade)"
                ><MoreVert /></Tooltip>
                
              </IconButton>
            }
            title={props.title}
            subheader={format(new Date(props.date), "MM-dd-yyyy HH:mm")}
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
            {!token ? (
              <>
                <IconButton
                  aria-label="add to favorites"
                  onClick={handleButtonClick}
                >
                  <FavoriteBorder sx={{ fontSize: 30 }} />
                  {props.likes}
                </IconButton>
                {isButtonClicked && <NeedConnexionAlert />}
              </>
            ) : (
              <IconButton aria-label="add to favorites" onClick={props.btnLike}>
                <Checkbox
                  icon={<FavoriteBorder sx={{ fontSize: 30 }} />}
                  checkedIcon={<Favorite sx={{ color: "#ff1744" }} />}
                />
                {props.likes}
              </IconButton>
            )}

            <IconButton aria-label="Comments" onClick={toggleCommentBox}>
              <ChatBubbleOutlineRoundedIcon sx={{ fontSize: 30 }} />
              {props.numberComments}
            </IconButton>
            <IconButton aria-label="share">
              <Share sx={{ fontSize: 30 }} />
            </IconButton>
          </CardActions>
          {showCommentBox && ( // Afficher le champ de commentaire et le bouton si showCommentBox est true
            // Methode : si l'utilisateur n'est pas connecté, il ne voit pas l'input pour commenter
            // <div>
            //    {!token ? (
            //       <>
            //          {props.comments.map((items, index) => {
            //             return (
            //                <div key={index}>
            //                   <Comments contentComment={items.content} firstnameComment={items.firstname} lastnameComment={items.lastname} />
            //                </div>
            //             );
            //          })}
            //       </>
            //    ) : (
            //       <>
            //          <input type="text" value={content} onChange={handleCommentChange} placeholder="Commenter" />
            //          <button onClick={submitComment}>Poster</button>
            //          {props.comments.map((items, index) => {
            //             return (
            //                <div key={index}>
            //                   <Comments contentComment={items.content} firstnameComment={items.firstname} lastnameComment={items.lastname} />
            //                </div>
            //             );
            //          })}
            //       </>
            //    )}
            // </div>
            // Methode : si l'utilisateur n'est pas connecté et qu'il appuie sur envoyé, ça le renvoie sur la page de connexion
            <div>
              {!token ? (
                <>
                  <div className="sendComment">
                    <TextField
                      value={content}
                      onChange={handleCommentChange}
                      id="outlined-basic"
                      label="Envoyer un commentaire"
                      variant="outlined"
                    />
                    <IconButton onClick={handleButtonClick} aria-label="send">
                      <SendIcon sx={{ fontSize: 40 }} />
                    </IconButton>
                  </div>

                  <div className="scrollComments">
                    {props.comments.map((items, index) => {
                      return (
                        <div key={index}>
                          <Comments
                            contentComment={items.content}
                            firstnameComment={items.firstname}
                            lastnameComment={items.lastname}
                          />
                        </div>
                      );
                    })}
                  </div>
                </>
              ) : (
                <>
                  <div className="sendComment">
                    <TextField
                      value={content}
                      onChange={handleCommentChange}
                      id="outlined-basic"
                      label="Envoyer un commentaire"
                      variant="outlined"
                    />
                    <IconButton onClick={submitComment} aria-label="send">
                      <SendIcon sx={{ fontSize: 40 }} />
                    </IconButton>
                  </div>

                  <div className="scrollComments">
                    {props.comments.map((items, index) => {
                      return (
                        <div key={index}>
                          <Comments
                            contentComment={items.content}
                            firstnameComment={items.firstname}
                            lastnameComment={items.lastname}
                          />
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          )}
        </Card>
      </Box>
    </>
  );
}
export default RenderPosts;
