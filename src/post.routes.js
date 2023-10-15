import express from "express";
const router = express.Router();
import * as postController from "./post.handlers.js";

// Register the route handlers for different HTTP methods
router.get("/", postController.homeRoute);
router.get("/posts", postController.getAllPost);
router.get("/posts/:postId", postController.getPostById);
router.post("/posts", postController.addPost);
router.patch("/posts/:postId", postController.updatePost);
router.delete("/posts/:postId", postController.deletePost);

// Export the router as the default module
export default router;
