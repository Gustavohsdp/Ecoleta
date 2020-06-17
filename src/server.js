const exprees = require("express") //Chamando o express
const server = exprees() //Executando a função exprees no servidor


//Configurar pasta publica
server.use(exprees.static("public"))


//utilizando template engine nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//Configurar caminhos para minha aplicação

//Página inicial
//req: requisição
//res: resposta
server.get("/", (req, res) => {
    return res.render("index.html", { title: "Seu marktplace de coleta de resíduos" })
})
server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})
server.get("/search", (req, res) => {
    return res.render("search-results.html")
})


//npm install nodem: para reiniciar o servidor automaticamente
//ligar o servidor
server.listen(3000)//executar o servidor
