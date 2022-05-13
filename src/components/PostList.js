import React from "react";

const PostList = ({posts}) => {

  const listOfPosts = posts.map(post => {
   return <li key={post.data.id}>{post.data.title}</li>
  })

  return listOfPosts;
}

export default PostList;