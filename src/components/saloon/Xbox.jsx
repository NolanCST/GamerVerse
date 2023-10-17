import NavBar from "../layouts/NavBar";
import Footer from "../layouts/Footer";
import Posts from "../posts/Posts";

function Xbox() {
   return (
      <>
         <NavBar />
         <div className="main-post-title">XBOX</div>
         <Posts />
         <Footer />
      </>
   );
}

export default Xbox;
