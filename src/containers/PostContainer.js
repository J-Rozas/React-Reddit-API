import React, { useEffect, useState } from "react";
import PostList from "../components/PostList";

const PostContainer = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postsFromAPI();
  }, ([]))

  const postsFromAPI = () => fetch('https://www.reddit.com/r/javascript.json')
                        .then(response => response.json())
                        .then(posts => setPosts(posts.data.children))



  return (
    <ul>
      <PostList posts={posts}></PostList>
    </ul>
  )
}

export default PostContainer;