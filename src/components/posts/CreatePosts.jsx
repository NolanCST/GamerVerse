import { useNavigate } from "react-router";
import { useState } from "react";
import NavBar from "../layouts/NavBar";
import "./createPosts.css";

function CreatePosts() {
   const [postTitle, setPostTitle] = useState("");
   const [postContent, setPostContent] = useState("");
   const navigate = useNavigate();

   const handleInputChangeTitle = (e) => {
      setPostTitle(e.target.value);
   };

   const handleInputChangeContent = (e) => {
      setPostContent(e.target.value);
   };

   const postPosts = async () => {
      let options = {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Authorization: "bearer " + localStorage.getItem("@TokenUser"),
         },
         body: JSON.stringify({
            title: postTitle,
            content: postContent,
         }),
      };

      try {
         const response = await fetch("https://social-network-api.osc-fr1.scalingo.io/gamer-verse/post", options);

         const data = await response.json();

         if (data.success) {
            alert("Votre post a la con qui vous a juste permis de vous sentir un peu mieux vient d'etre mis en ligne");
            navigate("/PlayStation");
         } else {
            console.error("Échec de la requête HTTP");
         }
      } catch (error) {
         console.error("Erreur lors de la requête : ", error);
      }
   };

   return (
      <>
         <NavBar />
         <div className="postPostsContainer">
            <div className="subContainer">
               <input onChange={handleInputChangeTitle} type="text" placeholder="Titre du post" className="input" />
               <textarea onChange={handleInputChangeContent} className="text"></textarea>
               <button onClick={postPosts} className="button">
                  Poster
               </button>
            </div>
         </div>
      </>
   );
}

export default CreatePosts;
