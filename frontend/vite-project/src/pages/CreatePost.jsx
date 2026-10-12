import axios from "axios";
import {useNavigate} from "react-router-dom";
const CreatePost = () => {

  const Navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    axios
      .post("http://localhost:3000/create-post",formData)
      .then((res) => {
        alert("Post Created Successfully");
         Navigate("/feed");
          e.target.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="create-post-page">
      <section className="create-post-section">
        <h1>Create Post</h1>
        <p className="subtitle">Share your moment with the world ✨</p>

        <form onSubmit={handleSubmit}>
          <input type="file" name="image" accept="image/*" />
          <input
            type="text"
            name="caption"
            placeholder="Write a caption..."
            required
          />
          <button type="submit">Post</button>
        </form>
      </section>
    </div>
  );
};

export default CreatePost;
