import { useState, useEffect } from "react";
import NavBar from "../layouts/NavBar";
import Footer from "../layouts/Footer";
import Posts from "../posts/Posts";

function Computer() {
   return (
      <>
         <NavBar />
         <div className="main-post-title">PC</div>
         <Posts />
         <Footer />
      </>
   );
}

export default Computer;
