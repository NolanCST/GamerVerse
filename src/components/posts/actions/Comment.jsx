function Comments(props) {
   return (
      <ul>
         <li>
            {props.firstnameComment} {props.lastnameComment}
            <br></br>
            {props.contentComment}
         </li>
      </ul>
   );
}

export default Comments;
