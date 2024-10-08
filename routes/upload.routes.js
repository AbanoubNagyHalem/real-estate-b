import express from "express";
import { uploadImage } from "../controllers/image.controller.js"; 
import upload from "../middleware/upload.js";
const router = express.Router();

router.post("/upload-image", upload.single("image"), uploadImage);

export default router;