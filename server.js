const http = require("http");
const fs   = require("fs");
const path = require("path");

const PORT    = process.env.PORT    || 3000;
const API_URL = process.env.API_URL || "http://localhost:8000";

const template = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");
const page = template.replace("%%API_URL%%", API_URL);

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(page);
}).listen(PORT, "0.0.0.0", () => {
  console.log("Frontend running on port " + PORT);
  console.log("Backend API: " + API_URL);
});
