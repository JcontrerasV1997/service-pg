const express=require('express');
const pool = require("../src/pool");

class Server {
  constructor() {
    this.app = express();
    this.paths={ users: '/api',}
    // conexion
    this.conectarDB();
    // Middlewares()
    this.middlewares();
    this.routes();
  }
  
  async conectarDB() {
    pool.connect({
        host: 'localhost',
        port:5432,
        database: 'SOCIAL_NETWORK_MG',
        user:'postgres',
        password:'admin123'
      });
  }

  middlewares() {
 
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.paths.users, require("../src/routes/usersRoutes"));
  }

  listen() {
    this.app.listen(3005, () => {
      console.log("servidor corriendo 3005 jeje");
    });
  }
}

module.exports = Server;