import { Box, Stack, Grid } from "@mui/material";
import Rightbar from "../layouts/Rightbar";
import NavBar from "../layouts/NavBar";
import Footer from "../layouts/Footer";
import Posts from "../posts/Posts";
import Leftbar from "../layouts/Leftbar";

export default function Switch() {
   return (
      <>
         <NavBar />
         <div className="main-post-title">
            SWITCH
            <Stack direction="row" spacing={2} justify-content="space-between" useFlexGap flexWrap="wrap">
               <Leftbar />

               <Posts />

               <Rightbar />
            </Stack>
            <Footer />
         </div>
      </>
   );
}
