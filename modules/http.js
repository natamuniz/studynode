const http = require("http");
const { getMaxListeners } = require("process");

const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url == "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Home page</h1>");
  }
  if (req.url == "/users") {
    const users = [
      {
        name: "Natã",
        email: "nata@gmail.com",
      },
      {
        name: "Bia",
        email: "bia@gmail.com",
      },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => console.log(`Rodando na porta ${port}!`));
