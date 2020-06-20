//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()//Verbose mostrar informações no terminal

//criar o objeto que ira operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

//Exporta o banco de dados
module.exports = db
//utilizar o objeto de banco de dados para nossas operações
//db.serialize(() => {
    //Com comandos SQL

    // 1º Criar uma tabela com comandos SQL
    //db.run(`
        //CREATE TABLE IF NOT EXISTS places (
            //id INTEGER PRIMARY KEY AUTOINCREMENT,
            //image TEXT,
            //name TEXT,
            //address TEXT,
            //address2 TEXT,
            //state TEXT,
            //city TEXT,
            //items TEXT
        //)
    //`)
    //2º inserir dados na tabela
    //const query = `
        //INSERT INTO places (
            //image,
            //name,
            //address,
            //address2,
            //state,
            //city,
            //items
        //) //VALUES (?,?,?,?,?,?,?);
    //`
    //const values = [
        //"https://images.unsplash.com/photo-1526951521990-620dc14c214b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
        //"Papersider",
        //"Guilherme Gemballa, Jardim América",
        //"Nº 260",
        //"Santa Catarina",
        //"Rio do Sul",
        //"Papéis e Papelão"
    //]

    //function afterInsertData(err) {
        //if (err) {
            //return console.log(err)
        //}
        //console.log("Cadastrado com sucesso")
        //console.log(this)
    //}

    //db.run(query, values, afterInsertData)

    //3º consultar dados na tabela
    //   db.all(`SELECT name FROM places`, function(err, rows) {
    //        if(err) {
    //            return console.log(err)
    //        }
    //        console.log("Aqui estão os registros: ")
    //        console.log(rows)
    //    })
    //4º deletar um dado na tabela

    //    db.run(`DELETE FROM places WHERE id = ?`, [1], function(err) {
    //        if(err) {
    //            return console.log(err)
    //       }

    //        console.log("Registro deletado com sucesso !")
    //   })
//})
