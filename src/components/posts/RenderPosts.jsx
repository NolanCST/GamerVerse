import Comments from "./actions/Comment";
import Likes from "./actions/Likes";

function RenderPosts(props) {
   return (
      <>
         <div className="infosPosts">
            <h3>Titre : {props.title}</h3>
            <p>{props.content}</p>
            <Likes />
            <Comments />
         </div>
      </>
   );
}
export default RenderPosts;
