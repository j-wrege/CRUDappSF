const mongoose = require("mongoose");

async function connectToDb() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to database :D");
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectToDb;