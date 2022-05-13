import React from "react";

const PostDetails = ({post, onPostClick, currentPost}) => {
  
  const handleClick = () => {
    onPostClick(post.data);
  }

  return (
    <li onClick={handleClick}>
      {post.data.title}
    </li>
  )
}

export default PostDetails;