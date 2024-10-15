import { Router } from "express";
import * as postController from "../controllers/post.controller.js";
import { authenticate } from "../middleware/authentication.js";

const router = Router();

router.get("/", postController.getAllPosts);
router.get("/user/favourite", authenticate, postController.getAllFavourite);
router.post("/user/favourite", authenticate, postController.addFavourites);
router.get("/filter", postController.getFilteredPosts);
router.get("/:id", postController.getPostDetails);
router.post("/", authenticate, postController.addPost);
router.patch("/:id", authenticate, postController.updatePost);
router.delete("/:id", authenticate, postController.deletePost);
router.post("/:id/comments", postController.addComment);

export default router;
