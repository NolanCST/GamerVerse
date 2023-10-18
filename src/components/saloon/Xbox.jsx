import { Box, Stack, Grid } from "@mui/material";
import NavBar from "../layouts/NavBar";
import Posts from "../posts/Posts";
import Footer from "../layouts/Footer";
import Rightbar from "../layouts/Rightbar";
import Leftbar from "../layouts/Leftbar";
import Add from "../posts/actions/Add";

function Xbox() {
   return (
      <>
         <NavBar />
         <div className="main-post-title">Xbox</div>
         <Stack direction="row" flexWrap="wrap" justify-content="space-between">
            <Leftbar />
            {/* <Grid item xs={2} sm={4} md={4}> */}
            <Posts type="Xbox" />
            {/* </Grid> */}
            <Rightbar />
         </Stack>
         <Add />
      </>
   );
}

export default Xbox;
