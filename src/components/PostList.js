import React from "react";
import PostDetails from "./PostDetails";

const PostList = ({posts, onPostClick, currentPost}) => {

  const listOfPosts = posts.map(post => {

    return (
      <PostDetails key={post.data.id} post={post} onPostClick={onPostClick} currentPost={currentPost}></PostDetails>
    )
  })

  return listOfPosts;
}

export default PostList;