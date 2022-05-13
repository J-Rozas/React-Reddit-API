import React, { useEffect, useState } from "react";
import PostList from "../components/PostList";

const PostContainer = () => {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null)

  useEffect(() => {
    postsFromAPI();
  }, ([]))

  const postsFromAPI = () => fetch('https://www.reddit.com/r/javascript.json')
                              .then(response => response.json())
                              .then(posts => setPosts(posts.data.children))


  const onPostClick = (chosenPost) => {
    setCurrentPost(chosenPost.permalink);
  }

  return (
    <>
      <ul>
        <PostList posts={posts} onPostClick={onPostClick} currentPost={currentPost}></PostList>
      </ul>
      <p>
        {currentPost}
      </p>
    </>
  )
}

export default PostContainer;