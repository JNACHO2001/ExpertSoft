

import mysql from "mysql2"


const conection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"pd_jose_gomez_tayrona"

})

conection.connect((error)=>{
    if (error) {
        console.log("no se pudo conectar",error)
        
    }
    console.log("conectada")
    
}

)


