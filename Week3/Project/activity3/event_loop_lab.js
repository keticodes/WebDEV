// event_loop_lab.js file

console.log("Script is starting");

setTimeout(() => {
  console.log("Callback number 1: This is a non-blocking operation.");
}, 500);

setTimeout(() => {
  console.log("Callback number 2: This is another non-blocking operation.");
}, 2000);

setTimeout(() => {
  console.log("Callback number 3: Yet another non-blocking operation.");
}, 10000);

console.log("Script has ended"); //Cool
