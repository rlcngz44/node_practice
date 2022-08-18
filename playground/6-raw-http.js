const http = require("http");
const url = `http://api.weatherstack.com/current?access_key=046e2a9cebd90c1a6bfdd729db82ff33&query=40,-75&units=m`;

const request = http.request(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });
  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("an error", error);
});

request.end();
