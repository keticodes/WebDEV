const apiUrl = "http://localhost:3001/api/blogs/";

const blogId = "650183e169624d2ed63d9982";

const updatedData = {
  title: "Here is a title",
  body: "here is updated body Hello",
  author: "Keti",
};

const updateBlog = async (blogId, updatedData) => {
  try {
    const response = await fetch(`${apiUrl}/${blogId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error("Failed to update the blog");
    }

    const updatedBlog = await response.json();
    console.log("Blog updated:", updatedBlog);
  } catch (error) {
    console.error("Error:", error);
  }
};

updateBlog(blogId, updatedData);
