const express = require('express');
const http = require('http');
const cors = require('cors');

const { connectMongo } = require('./services/mongo');
const healthRouter = require('./routers/health.router');
const resultRouter = require('./routers/result.router');

const app = express();

app.use(cors({
    origin: '*', // allow to server to accept request from different origin
}));

app.use(express.json());

app.use('/health', healthRouter);
app.use('/result', resultRouter);


const port = 8000;

const server = http.createServer(app);

async function startServer() {

    connectMongo();
 
  server.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
}

startServer();