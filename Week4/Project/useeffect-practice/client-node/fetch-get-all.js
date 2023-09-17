const apiUrl = "http://localhost:3001/api/blogs/";


let id:
const fetchBlogs = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();

  console.log(data);
};

fetchBlogs();


