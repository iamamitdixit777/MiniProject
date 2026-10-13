import { useState } from "react";
import axios from 'axios';
import {useEffect} from "react";
import { Link } from "react-router-dom";

const Feed = () => {
    const [posts,setPosts] = useState([]);
    const [theme, setTheme] = useState(() => localStorage.getItem("feed-theme") || "light");
  

useEffect(() => {
  localStorage.setItem("feed-theme", theme);
}, [theme]);

useEffect(() => {
  axios.get("http://localhost:3000/get-post").then((res) => {
    setPosts(res.data.post);
  });
}, []);

const handleDelete = async (id) => {
  try {
    await fetch(`http://localhost:3000/get-post/${id}`, {
      method: "DELETE",
     
    });

    // remove the post from state so the UI updates
    setPosts((prev) => prev.filter((post) => post._id !== id));
     alert("Post Deleted Successfully")
  } catch (error) {
    console.error("Delete failed", error);
  }
};



  return (
    <div className={`changeBg feed-page ${theme === "dark" ? "theme-dark" : "theme-light"}`}>
      <div className="feed-heading">
        <Link className="page-home-link" to="/">&larr; Back home</Link>
        <div className="feed-heading-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={() => setTheme((current) => current === "dark" ? "light" : "dark")}
            aria-pressed={theme === "dark"}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            <span aria-hidden="true">{theme === "dark" ? "\u263C" : "\u263E"}</span>
            {theme === "dark" ? "Light mode" : "Dark mode"}
          </button>
          <Link className="feed-create-link" to="/create-post">+ Create a post</Link>
        </div>
      </div>
      <section className = 'feed-section'>
          
          {
            posts.length > 0 ? posts.map((post)=>(
              <div key={post._id} className="post-card">
                <img src = {post.imageUrl} alt={post.caption || "Shared moment"} />
                <p> {post.caption}</p>
                <button onClick = {()=> {
                  handleDelete(post._id)
                } } className="delete-btn">Delete</button>
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
