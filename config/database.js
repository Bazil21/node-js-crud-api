const {createPool}= require("mysql");

const pool = createPool({
    port:8111,
    host:"localhost",
    password:"",
    database:"node_api",
})

module.exports = pool;