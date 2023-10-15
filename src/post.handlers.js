import fakePosts from "./fakePosts.db.js";
import { v4 as uuidv4 } from "uuid";

// home route
export async function homeRoute(req, res) {
  return res.send(
    '<button style="display: block; margin: 10px auto;"><a href="http://localhost:5000/posts" style="font-size:2rem; text-decoration: none;">See all posts</a></button>'
  );
}

// get all posts
export async function getAllPost(req, res) {
  return res.send(fakePosts);
}

// get post by ID
export async function getPostById(req, res) {
  const { postId } = req.params;
  const post = fakePosts.find((p) => p.id === postId);
  return res.send(post);
}

// add a new post
export async function addPost(req, res) {
  const newPost = {
    id: uuidv4(),
    username: req.body.username,
    content: req.body.content,
    likes: req.body.likes,
    comments: req.body.comments,
  };

  fakePosts.push(newPost);
  return res.send(newPost);
}

// update a post
export async function updatePost(req, res) {
  const { postId } = req.params;

  let index;
  let post;
  for (let i = 0; i < fakePosts.length; i++) {
    if (fakePosts[i].id === postId) {
      index = i;
      post = fakePosts[i];
      break;
    }
  }

  if (index === -1) {
    return res.status(404).send({ message: "Post not found" });
  }

  // if any property of the post is changed then 👇
  for (const property in req.body) {
    if (post.hasOwnProperty(property)) {
      post[property] = req.body[property];
    }
  }

  fakePosts.splice(index, 1, post);
  return res.send(post);
}

// delete a post
export async function deletePost(req, res) {
  const { postId } = req.params;
  const index = fakePosts.findIndex((p) => p.id === postId);
  fakePosts.splice(index, 1);
  return res.send({ message: "Post has been deleted." });
}
