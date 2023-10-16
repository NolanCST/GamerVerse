import {
  Box,
  Typography,
  AvatarGroup,
  Avatar,
  ImageList,
  ImageListItem,
  ListItem,
  ListItemText,
  Divider,
  List,
  ListItemAvatar,
} from "@mui/material";
import React from "react";

export default function Rightbar() {
  return (
    <Box
    bgcolor="white"
    width={300}
    flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed">
        {/* <Typography variant="h6" fontWeight={100}>
          Ami(e)s Connecté(e)s
        </Typography>
        <AvatarGroup max={8}>
          <Avatar alt="Taiyo" src="/images/avatar/Taiyo.jpg" />
          <Avatar alt="Mutsumi" src="/images/avatar/Mutsumi.jpg" />
          <Avatar alt="Kyoichiro" src="/images/avatar/Kyoichiro.jpg" />
          <Avatar alt="Trevor Henderson" src="" />
          <Avatar alt="Kengo" src="/images/avatar/Kengo.jpg" />
          <Avatar alt="Goliath" src="/images/avatar/Goliath.jpg" />
          <Avatar alt="Shion" src="/images/avatar/Shion.jpg" />
          <Avatar alt="Futaba" src="/images/avatar/Futaba.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup> */}
        {/* <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Dernières photos
        </Typography>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={100} gap={5}>
          <ImageListItem >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMeXLy05Ns2RDr6opMRCQ1Gr0uYjtGm61-3A&usqp=CAU"
              alt="Xenoblade chronicle 3"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsCoOLXRMpI_DmrIEZo81s8tYSaC2Lpju0Rw&usqp=CAU"
              alt="FF 14"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEIxinghg81EDhR619q3aTVwrEEJHlOQ7Xw&usqp=CAU"
              alt="Zelda"
            />

          </ImageListItem>
        </ImageList> */}
        <Typography variant="h6" color='#272727' fontWeight={400} mt={2}>
          DERNIÈRES CONVERSATIONS
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  );
}
