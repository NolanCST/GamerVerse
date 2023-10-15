import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box, Stack, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import "./RenderHome.css";

const Item = styled(Paper)(({ theme }) => ({
   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
   ...theme.typography.body2,
   padding: theme.spacing(1),
   textAlign: "center",
   color: theme.palette.text.secondary,
}));

function RenderHome() {
   return (
      
      <div className="cardContainer">
         <Stack direction="column" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
         <Box sx={{ width: "100%" }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
               <Grid className="testOne" display="flex" justifyContent="center" item xs={6}>
                  <Card sx={{ maxWidth: 345 }}>
                     <Link to="/PlayStation" style={{ textDecoration: "none", color: "Black" }}>
                        <CardActionArea>
                           <CardMedia component="img" image="/images/playstation.jpg" alt="PlayStation" />
                           <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                                 Modérateur : Dennys
                              </Typography>
                              <Typography variant="body2" >
                              </Typography>
                           </CardContent>
                        </CardActionArea>
                     </Link>
                  </Card>
               </Grid>
               <Grid display="flex" justifyContent="center" item xs={6}>
                  <Card sx={{ maxWidth: 345 }}>
                     <Link to="/Xbox" style={{ textDecoration: "none", color: "Black" }}>
                        <CardActionArea>
                           <CardMedia component="img" image="/images/Xbox.jpg" alt="Xbox" />
                           <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                              Modératrice : Zaïnab
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                              </Typography>
                           </CardContent>
                        </CardActionArea>
                     </Link>
                  </Card>
               </Grid>
               <Grid display="flex" justifyContent="center" item xs={6}>
                  <Card sx={{ maxWidth: 345 }}>
                     <Link to="/Switch" style={{ textDecoration: "none", color: "Black" }}>
                        <CardActionArea>
                           <CardMedia component="img" image="/images/Switch.jpg" alt="Switch" />
                           <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                                 Modératrice : Aslinn
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                              </Typography>
                           </CardContent>
                        </CardActionArea>
                     </Link>
                  </Card>
               </Grid>
               <Grid display="flex" justifyContent="center" item xs={6}>
                  <Card sx={{ maxWidth: 345 }}>
                     <Link to="/Computer" style={{ textDecoration: "none", color: "Black" }}>
                        <CardActionArea>
                           <CardMedia component="img" image="/images/PC.jpg" alt="Computer" />
                           <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                              Modérateur : Nono
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                              </Typography>
                           </CardContent>
                        </CardActionArea>
                     </Link>
                  </Card>
               </Grid>
            </Grid>
         </Box>
         </Stack>
      </div>
   );
}

export default RenderHome;
