import { Stack, Grid } from "@mui/material";
import NavBar from "../layouts/NavBar";
import Posts from "../posts/Posts";
import Rightbar from "../layouts/Rightbar";
import Leftbar from "../layouts/Leftbar";
import Add from "../posts/actions/Add";

function Xbox() {
   return (
      <>
         <NavBar />
         <Stack spacing={{ xs: 6, sm: 2 }} direction="row" flexWrap="wrap" justify-content="space-between" rowspacing={1} columnpacing={{ xs: 1, sm: 2, md: 3 }} marginTop={10} marginBottom={10}>
            <Leftbar saloonTitle="XBOX" />
            <Grid item xs={2} sm={4} md={4}>
               <Posts type="Xbox" />
            </Grid>
            <Rightbar />
         </Stack>
         <Add />
      </>
   );
}

export default Xbox;
