const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// Sample data for blog posts and comments
const posts = [];
const comments = [];

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("api/post", (req, res) => {
  //return an array of all post objests
  res.json(post);
});

app.get("/api/posts/:id", (req, res) => {
  const { id } = req.params;

  // Find the post with the specified ID
  const post = posts.find((p) => p.id === id);

  // If the post is not found, respond with a 404 status code and a message
  if (!post) {
    return res
      .status(404)
      .json({ message: "The post with the specified ID does not exist" });
  }

  // Respond with the post object
  res.json(post);
});

app.post("/api/posts", (req, res) => {
  const { title, contents } = req.body;

  if (!title || !contents) {
    return res
      .status(400)
      .json({ message: "Please provide title and contents for the post" });
  }

  const newPost = {
    //new post objesct
    id: Date.now().toString(),
    title, //HUOMIO TARKISTA TÄTÄ
    contents, //HUOMIO TARKISTA TÄTÄ
    created_at: new Date(),
    updated_at: new Date(),
  };
  post.push(newPost);
  res.status(201).json(newPost);
});

app.put("api/post/:id", (req, res) => {
  const { id } = req.params;
  const { title, contents } = req.body;

  const index = post.findIndex((p) => p.id === id);

  if (index === -1) {
    return res
      .status(404)
      .json({ message: "The post with the given ID is nonexistent." });
  }
  if (!title || !contents) {
    return res
      .status(400)
      .json({ message: "Please give a title and contents for the post." });
  }

  posts[index].title = title;
  posts[index].contents = contents;
  posts[index].updated_at = new Date();

  res.json(posts[index]);
});

app.delete("api/posts/delete", (req, res) => {
  const { id } = req.params;
  const index = posts.findIndex((p) => p.id === id);

  if (index === 1) {
    return res
      .status(404)
      .json({ message: "The post with the specified ID does not exist" });
  }

  const deletedPost = posts.splice(index, 1)[0];
  res.json(deletedPost);
});

app.get("api/posts/:id/comments", (req, res) => {
  const { id } = req.params;
  const post = post.find((p) => p.id === id);

  if (!post) {
    return res
      .status(404)
      .json({ message: "The post with that given ID does not exist" });
  }
  const postComments = comments.filter((comment) => comment.post_id === id);
  res.json(postComments);
});

app.listen(port, () => {
  console.log("Server is running on port ${port}");
});
