//importar a dependencia do Sqlite 3
//const sqlite3 = require("sqlite3").verbose()

//Criar o objeto de banco de dados que vai fazer operações.
//const db = new sqlite3.Database("./src/database/database.db")

//utilizar objeto de banco de dados, para operações
//db.serialize(() => {
    //criar uma tabela 1°
  //  db.run(`
    //    CREATE TABLE IF NOT EXISTS places (
    //        id INTEGER PRIMARY KEY AUTOINCREMENT,
    //        image TEXT,
    //        name TEXT,
    //        address TEXT,
    //        address2 TEXT,
     //       state TEXT,
     //       city TEXT,
     //       items TEXT
     //   );
    //`)
    //inserir dados na tabela 2°
    //const query = `
    //INSERT INTO places (
     //   image,
     //   name,
     //   address,
     //   address2,
     //   state,
    //    city,
    //    items
   // ) VALUES (?,?,?,?,?,?,?);
  // `
   // const values =  [
    //    "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    //    "Papersider",
     //   "Guilherme Gemballa, Jardim América",
    //    "N° 260",
    //    "Santa Catarina",
     //   "Rio do Sul",
     //   "Resíduos Eletrônicos, Lâmpadas"
    //]
//
    //function afterInsertData(err) {
    //    if(err){
    //        return console.log(err)
    //    }
//
    //    console.log("Cadastrado com sucesso")
    //    console.log(this)
    //}

    
   // db.run(query, values,  afterInsertData)

    //consultar os dados da tabela 3°

    //db.all(`SELECT * FROM places`, function(err, rows){
    //    if(err){
    //       return console.log(err)
    //   }
        
    //  console.log("Aqui estão os registros")
    //    console.log(rows)
    //})
    //deletar um dado da tabela 4°
   // db.run(`DELETE FROM places WHERE id = ?`, [1], function(err){
    //    if(err){
   //         return console.log(err)
    //    }
   //     console.log("Registro deletado com sucesso!")
   // })
//})

//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar o objeto que vai fazer as operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db