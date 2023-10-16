import { Box, Typography, AvatarGroup, Avatar, ImageList, ImageListItem } from "@mui/material";
import React from "react";

export default function Rightbar() {
  return (
    <Box
      bgcolor="white"
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed">
        <Typography variant="h6" fontWeight={100}>
          Ami(e)s Connecté(e)s
        </Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Taiyo" src="/images/avatar/Taiyo.jpg" />
          <Avatar alt="Mutsumi" src="/images/avatar/Mutsumi.jpg" />
          <Avatar alt="Kyoichiro" src="/images/avatar/Kyoichiro.jpg" />
          <Avatar alt="Kengo" src="/images/avatar/Kengo.jpg" />
          <Avatar alt="Goliath" src="/images/avatar/Goliath.jpg" />
          <Avatar alt="Shion" src="/images/avatar/Shion.jpg" />
          <Avatar alt="Futaba" src="/images/avatar/Futaba.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100}>
          Dernières photos
        </Typography>
        <ImageList>
        <ImageListItem>
      <img src='https://images.unsplash.com/photo-1518756131217-31eb79b20e8f'
      alt= 'Fern'
      />
    </ImageListItem>
    </ImageList>
      </Box>
    </Box>
  );
}
