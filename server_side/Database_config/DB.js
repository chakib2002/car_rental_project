const mysql = require('mysql');
const config = require ('./config')

const pool = mysql.createPool(config.db)

const query =(sql, values)=>
    new Promise((resolve, reject)=>{
        pool.getConnection((error, connection)=>{
            if(error){
                throw(error)   
            }else{   
                connection.query(sql, values, (err, rows, fields)=>{  
                    if(err){
                        reject(err)
                    }else if(rows){
                        resolve(rows)
                    }else{
                        resolve(fields)
                    }

                    connection.release(); 
                })
            }

        })
    })

module.exports={query}