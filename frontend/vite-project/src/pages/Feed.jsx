import { useState } from "react";
import axios from 'axios';
import {useEffect} from "react";

const Feed = () => {
    const [posts,setPosts] = useState([
        {
        id:"",
        imageUrl:"https://images.unsplash.com/photo-1789758612541-c594f3d3c7e9?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDE%3D",
        caption:""
        }
]);


useEffect(() => {
  axios.get("http://localhost:3000/get-post").then((res) => {
    setPosts(res.data.post);
  });
}, []);


  return (
    <div className ="changeBg">
      <section className = 'feed-section'>
          
          {
            posts.length > 0 ? posts.map((post)=>(
              <div key={post._id} className="post-card">
                <img src = {post.imageUrl}></img>
                <p> {post.caption}</p>
              </div>
            )):(
                <h1>No Available Post </h1>
            )
          }

      </section>
    </div>
  )
}

export default Feed
