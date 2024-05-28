const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();
const { google } = require('googleapis');
const multer = require('multer');



const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
   
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb connection sucess!!");
})

const shopRouter = require("./routes/shops.js");
app.use("/shop",shopRouter);

const drive = google.drive({
    version: 'v3',
    auth: process.env.GOOGLE_DRIVE_API_KEY // Use your actual API key here
  });
  
  // Multer storage configuration
  const storage = multer.memoryStorage();
  const upload = multer({ storage: storage });
  
  // File upload endpoint
  app.post('/upload', upload.single('image'), async (req, res) => {
    try {
      const fileMetadata = {
        name: req.file.originalname
      };
  
      const media = {
        mimeType: req.file.mimetype,
        body: req.file.buffer
      };
  
      const uploadedFile = await drive.files.create({
        resource: fileMetadata,
        media: media,
        fields: 'id'
      });
  
      const fileId = uploadedFile.data.id;
      res.json({ fileId });
    } catch (error) {
      console.error('Error uploading file:', error);
      res.status(500).json({ error: 'Error uploading file' });
    }
  });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

