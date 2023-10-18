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
      <Stack
        spacing={{ xs: 6, sm: 2 }}
        direction="row"
        flexWrap="wrap"
        justify-content="space-between"
        rowspacing={1}
        columnpacing={{ xs: 1, sm: 2, md: 3 }}
        marginBottom={10}
      >
        <Leftbar />
        <Posts />
        <Rightbar />
      </Stack>
      <Add />
    </>
  );
}

export default Xbox;
