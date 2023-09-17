const express = require("express");
const app = express();
const port = 3001;
// Use your user routes
app.use("/api/users", userRoutes);

mongoose.connect("mongodb://localhost/your-database-name", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

// Sample user data array
const users = [];

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// POST /api/users
app.post("/api/users", (req, res) => {
  const { name, bio } = req.body;

  if (!name || !bio) {
    return res
      .status(400)
      .json({ message: "Please provide name and bio for the user" });
  }

  const newUser = {
    id: Date.now().toString(),
    name,
    bio,
  };

  try {
    users.push(newUser);
    res.status(201).json(newUser);
  } catch (error) {
    res
      .status(500)
      .json({ message: "There was an error while saving the user" });
  }
});

// GET /api/users
app.get("/api/users", (req, res) => {
  try {
    res.json(users);
  } catch (error) {
    res
      .status(500)
      .json({ message: "The users information could not be retrieved" });
  }
});

// GET /api/users/:id
app.get("/api/users/:id", (req, res) => {
  const { id } = req.params;

  const user = users.find((u) => u.id === id);

  if (!user) {
    return res
      .status(404)
      .json({ message: "The user with the specified ID does not exist" });
  }

  try {
    res.json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "The user information could not be retrieved" });
  }
});

// DELETE /api/users/:id
app.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;

  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return res
      .status(404)
      .json({ message: "The user with the specified ID does not exist" });
  }

  try {
    const deletedUser = users.splice(index, 1)[0];
    res.json(deletedUser);
  } catch (error) {
    res.status(500).json({ message: "The user could not be removed" });
  }
});

// PUT /api/users/:id
app.put("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, bio } = req.body;

  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return res
      .status(404)
      .json({ message: "The user with the specified ID does not exist" });
  }

  if (!name || !bio) {
    return res
      .status(400)
      .json({ message: "Please provide name and bio for the user" });
  }

  try {
    users[index].name = name;
    users[index].bio = bio;
    res.json(users[index]);
  } catch (error) {
    res
      .status(500)
      .json({ message: "The user information could not be modified" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
