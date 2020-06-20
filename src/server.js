const exprees = require("express") //Chamando o express
const server = exprees() //Executando a função exprees no servidor

//pegar o banco de dados
const db = require("./database/db.js")


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

    // pegar os dados do banco de dados
    db.all(`SELECT * FROM places`, function(err, rows) {
                if(err) {
                    return console.log(err)
                }
                console.log("Aqui estão os registros: ")
                console.log(rows)

                // contar quantos elementos tenho dentro do array
                const total = rows.length

                //mostrar a página HTML com os dados do banco de dados
                return res.render("search-results.html", { places: rows, total: total})
            })
})

//npm install nodem: para reiniciar o servidor automaticamente
//ligar o servidor
server.listen(3000)//executar o servidor
