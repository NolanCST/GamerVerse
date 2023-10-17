import { useState, useEffect } from "react";
import NavBar from "../layouts/NavBar";
import Posts from "../posts/Posts";

function Computer() {
   return (
      <>
         <NavBar />
         <div className="main-post-title">PC</div>
         <Posts />

      </>
   );
}

export default Computer;
