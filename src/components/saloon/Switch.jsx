import { Box, Stack, Grid } from "@mui/material";
import NavBar from "../layouts/NavBar";
import Posts from "../posts/Posts";
import Footer from "../layouts/Footer";
import Rightbar from "../layouts/Rightbar";
import Leftbar from "../layouts/Leftbar";

export default function Switch() {
   return (
      <>
         <NavBar />
         <div className="main-post-title">SWITCH</div>
         <Stack spacing={{ xs: 6, sm: 2 }} direction="row" flexWrap="wrap" justify-content="space-between" rowspacing={1} columnpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Leftbar />
            <Grid item xs={2} sm={4} md={4}>
               <Posts />
            </Grid>
            <Rightbar />
         </Stack>

         <Footer />
      </>
   );
}
