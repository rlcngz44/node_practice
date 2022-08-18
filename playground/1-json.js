const fs = require("fs");
require("./1-json.json");

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
// };

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log("Title:", data.title, " Author:", data.author);

//Challenge!!!
//1. Load and parse the JSON data
//2. Change the name and age property using your info
//3. Stringify the changed object and overwrite the original object
//4. test your work by viewing in the JSON file

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

user.name = "Alona";
user.age = "33";

const userJSON = JSON.stringify(user);
fs.writeFileSync("1-json.json", userJSON);
