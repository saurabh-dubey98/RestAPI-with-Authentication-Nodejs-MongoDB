const mongoose = require('mongoose');

const connectMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
    } catch (error) {
        console.log(error);
        process.exit();
    }
}

module.exports = connectMongo;