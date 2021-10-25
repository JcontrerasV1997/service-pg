// const app = require("./src/app");
// const pool = require("./src/pool");

// pool.connect({
//     host: 'localhost',
//     port:5432,
//     database: 'SOCIAL_NETWORK_MG',
//     user:'postgres',
//     password:'admin123'
//   })
//   .then(() => {
//     app().listen(3005, () => {
//       console.log("listening en el puerto 3005");
//     });
//   })
//   .catch((err) => console.error(err));

const Server = require('./server/Server');

const server = new Server();

server.listen();