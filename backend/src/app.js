const express = require('express');
const multer = require("multer");
const uploadFile = require("./services/storage.service");
const postModel = require("./models/post.model");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({storage:multer.memoryStorage()});

app.post("/create-post", upload.single("image"), async(req,res)=>{
       
       const result = await uploadFile(req.file.buffer);

       const post = await postModel.create({
            imageUrl:result.url,
            caption:req.body.caption
       })

      return  res.status(201).json({
             msg:"post created succuessfully",
             post
       })
       
})

app.get("/get-post",async(req,res)=>{
      const post = await postModel.find();
       res.status(200).json({
            msg:"data fetched successfully",
            post

       })
})

// DELETE /api/posts/:id
app.delete("/get-post/:id", async (req, res) => {
  try {
    const deletedPost = await postModel.findByIdAndDelete(req.params.id);

    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = app;