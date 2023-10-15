import React, { useState } from "react";

function Comments(props) {
   const [content, setContent] = useState("");

   const handleCommentChange = (e) => {
      setContent(e.target.value);
   };

   const submitComment = () => {
      props.inputComments(content);
      setContent(""); // Réinitialise le champ de commentaire après l'envoi
   };

   return (
      <div>
         <input type="text" value={content} onChange={handleCommentChange} placeholder="Commenter" />
         <button onClick={submitComment}>Poster</button>
      </div>
   );
}

export default Comments;
