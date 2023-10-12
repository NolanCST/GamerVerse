import { useEffect, useState } from "react";
import RenderPosts from "./RenderPosts";

function POSTPosts() {
   const [posts, setPosts] = useState([]);

   const getPosts = async () => {
      let options = {
         method: "POST",
         Headers: {
            "Content-Type": "application/json",
         },
      };
      try {
         const response = await fetch("https://social-network-api.osc-fr1.scalingo.io/gamer-verse/posts?limit=20", options);
         if (response.ok) {
            const data = await response.json();
            console.log(data);
            setPosts(data);
         } else {
            console.error("Échec de la requête HTTP");
         }
      } catch (error) {
         console.error("Erreur lors de la requête : ", error);
      }
   };

   useEffect(() => {
      getPosts();
   }, []);

   const renderPosts = () => {
      return posts?.map((element, index) => {
         return (
            <div key={index}>
               <RenderPosts title={element.title} content={element.content} />
            </div>
         );
      });
   };

   return (
      <>
         <div className="getPostsContainer">{renderPosts()}</div>
      </>
   );
}

export default POSTPosts;
