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


module.exports = app;