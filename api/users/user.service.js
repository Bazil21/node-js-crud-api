const pool = require("../../config/database");

module.exports={
    create: (data, callback)=>{
        pool.query(
            `Insert into users (fname,lname,gender,email,password,phone) values(?,?,?,?,?,?)`,
            [
                data.fname,
                data.lname,
                data.gender,
                data.email,
                data.password,
                data.phone
            ],
            (error,results,fields)=>{
                if(error){
                    return callback(error);
                }
                return  callback(null,results);
            }
        )
    }
}