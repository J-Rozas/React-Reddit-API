import React, { useEffect, useState } from "react";

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
      <li>Test</li>
    </ul>
  )
}

export default PostContainer;