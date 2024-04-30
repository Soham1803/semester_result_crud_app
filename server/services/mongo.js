const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/semester-results';

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('Error connecting to MongoDB', err);
});

async function connectMongo() {
    await mongoose.connect(mongoURI);
}

async function disconnectMongo() {
    await mongoose.disconnect();
}

module.exports = {
    connectMongo,
    disconnectMongo
}