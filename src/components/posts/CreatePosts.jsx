import { useNavigate } from "react-router";
import { useState } from "react";
import NavBar from "../layouts/NavBar";
import "./createPosts.css";
import Footer from "../layouts/Footer";

function CreatePosts() {
   const [postTitle, setPostTitle] = useState("");
   const [postContent, setPostContent] = useState("");
   const navigate = useNavigate();
   const [navigatePlatform, setNavigatePlatform] = useState("");

   const handleInputChangeTitle = (e) => {
      setPostTitle(e.target.value);
   };

   const handleInputChangeContent = (e) => {
      setPostContent(e.target.value);
   };

   const handleNavigatePlatformChange = (e) => {
      setNavigatePlatform(e.target.value);
   };

   const postPosts = async () => {
      if (!navigatePlatform) {
         alert("Veuillez sélectionner une plateforme avant de poster.");
         return;
      }

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
         console.log("data: ", data);
         if (data.success) {
            alert("Votre post a été mis en ligne sur le channel " + navigatePlatform);
            navigate("/" + navigatePlatform);
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
               <select onChange={handleNavigatePlatformChange}>
                  <option value="">--Choisir votre plateforme--</option>
                  <option value="Playstation">Playstation</option>
                  <option value="Xbox">Xbox</option>
                  <option value="Switch">Switch</option>
                  <option value="Computer">PC</option>
               </select>
               <input onChange={handleInputChangeTitle} type="text" placeholder="Titre du post" className="input" />
               <textarea onChange={handleInputChangeContent} className="text"></textarea>
               <button onClick={postPosts} className="button">
                  Poster
               </button>
            </div>
         </div>
         <Footer />
      </>
   );
}

export default CreatePosts;
