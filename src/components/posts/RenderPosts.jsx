function RenderPosts(props) {
   return (
      <>
         <div className="infosPosts">
            <h3>Titre : {props.title}</h3>
            <p>{props.content}</p>
         </div>
      </>
   );
}
export default RenderPosts;
