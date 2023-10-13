import { useEffect, useState } from "react";
import RenderPosts from "./RenderPosts";

function Posts() {
   const [posts, setPosts] = useState([]);

   const getPosts = async () => {
      const options = {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
      };
      const response = await fetch(`https://social-network-api.osc-fr1.scalingo.io/gamer-verse/posts`, options);
      const data = await response.json();
      setPosts(data.posts);
   };

   console.log(posts);

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

export default Posts;
