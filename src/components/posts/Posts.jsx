import { useEffect, useState } from "react";
import RenderPosts from "./RenderPosts";
import Likes from "./actions/Likes";
import Comments from "./actions/Comment";

function Posts() {
   const [posts, setPosts] = useState([]);
   const [content, setContent] = useState("");

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

   const postsComment = async (postId, index, content) => {
      let options = {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Authorization: "bearer " + localStorage.getItem("@TokenUser"),
         },
         body: JSON.stringify({
            postId: postId,
            content: content,
         }),
      };

      try {
         const response = await fetch(`https://social-network-api.osc-fr1.scalingo.io/gamer-verse/post/comment`, options);
         const data = await response.json();
         if (data.success) {
            const updatedComments = [...posts];
            updatedComments[index].comments.push(data.newComment);
            setPosts(updatedComments);
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
               <RenderPosts title={element.title} content={element.content} likes={element.likes.length} />
               <Likes btnLike={() => postsLike(element._id, index)} />
               <Comments inputComments={(content) => postsComment(element._id, index, content)} />
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
