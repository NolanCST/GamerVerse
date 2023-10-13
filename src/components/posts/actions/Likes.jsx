import { useState } from "react";

function Likes() {
   const [like, setLike] = useState(0);

   const postsLike = async () => {
      let options = {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Authorization: "bearer " + localStorage.getItem("@TokenUser"),
         },
         body: JSON.stringify({
            postId: "",
         }),
      };

      try {
         const response = await fetch("https://social-network-api.osc-fr1.scalingo.io/gamer-verse/post/like", options);

         const data = await response.json();

         if (data.success) {
            setLike(+1);
         } else {
            console.error("Échec de la requête HTTP");
         }
      } catch (error) {
         console.error("Erreur lors de la requête : ", error);
      }
   };

   return (
      <>
         {like}
         <button onClick={postsLike}>Coeur</button>
      </>
   );
}

export default Likes;
