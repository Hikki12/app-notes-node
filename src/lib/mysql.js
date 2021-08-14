const config = require('../config/index');
var mysql = require('mysql');


class mysqlDB {
    constructor(){
        this.pool = mysql.createPool({
            connectionLimit : 2,
            host            : config.db_host,
            user            : config.db_user,
            password        : config.db_password,
            database        : config.db_name
          });
    }
    
    connect(){
        return this.pool.getConnection((err, connection) => {return connection})
    }

    create(){
        this.connect().
    }

    read(){

    }
    update(){

    }
    delete(){

    }

}