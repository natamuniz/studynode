const mongoose = require("mongoose");

const connectToDatabse = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonode.acy43tz.mongodb.net/?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log("Ocorreu um erro ao se conectar com database");
      }
      return console.log("Conexão bem sucedida");
    }
  );
};

module.exports = connectToDatabse;
