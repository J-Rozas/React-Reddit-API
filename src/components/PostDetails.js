import React from "react";

const PostDetails = ({post, onPostClick, currentPost}) => {
  
  const handleClick = () => {
    onPostClick(post.data);
  }

  return (
    <li onClick={handleClick}>
      <p>
        {post.data.title}
      </p>
      {currentPost === post.data.title ? <a href={`https://reddit.com${post.data.permalink}`} target='_blank'>Link</a> : null}
    </li>
  )
}

export default PostDetails;