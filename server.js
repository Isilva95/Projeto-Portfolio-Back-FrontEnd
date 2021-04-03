const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  autoescape: false
})

server.get("/", function (req, res) {
  const about = {
    avatar_url: "https://avatars.githubusercontent.com/u/56745096?s=460&u=03fdf19f1cc3ae3ada14eb6aacdf935ef476734d&v=4",
    name: "Isac Santos",
    role: "Aluno - Rocketseat",
    description: 'Desenvolvedor Front End - aprendendo a programar na <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>',
    links: [
      { name: "Github", url: "https://github.com/Isilva95" },
      { name: "Linkedin", url: "https://www.linkedin.com/in/isac-santos-b67b8515a/" }
    ]
  }


  return res.render("about", { about })
})

server.get("/portfolio", function (req, res) {

  return res.render("portfolio", { items: videos })
})

server.listen(5000, function () {
  console.log("server is running")
})