// fs_lab.js

const fs = require("fs");

console.log("Start reading file...");

fs.readFile("largefile.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("File content length:", data.length);
  }
});

console.log("End of script");
