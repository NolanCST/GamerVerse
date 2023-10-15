import { useEffect, useState } from "react";
import RenderPosts from "./RenderPosts";
import Likes from "./actions/Likes";

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

   const postsLike = async (postId, index) => {
      let options = {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Authorization: "bearer " + localStorage.getItem("@TokenUser"),
         },
         body: JSON.stringify({
            postId: postId,
         }),
      };

      try {
         const response = await fetch(`https://social-network-api.osc-fr1.scalingo.io/gamer-verse/post/like`, options);
         const data = await response.json();
         console.log(data);
         if (data.success) {
            const updatedLikes = [...posts];
            updatedLikes[index].likes.push(data.newLike);
            setPosts(updatedLikes);
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
               <RenderPosts title={element.title} date={element.date} content={element.content} likes={element.likes.length} />
               <Likes Like={() => postsLike(element._id, index)} />
            </div>
         );
      });
   };

   useEffect(() => {
      renderPosts();
   }, [posts]);

   return (
      <>
         <div className="getPostsContainer">{renderPosts()}</div>
      </>
   );
}

export default Posts;
