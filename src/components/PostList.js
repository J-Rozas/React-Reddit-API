import React from "react";

const PostList = ({posts, onPostClick}) => {

  const listOfPosts = posts.map(post => {
    
    const handleClick = function() {
      onPostClick(post.data);
    }
    
    return (
      <li key={post.data.id} onClick={handleClick}>
        {post.data.title}
      </li>
    )
  })

  return listOfPosts;
}

export default PostList;