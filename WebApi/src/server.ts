import http from 'http';
import app from './app';



const server=http.createServer(app);

server.listen(app.get('port'),()=>{console.log("Api start listning")});

export default server;