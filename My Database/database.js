const mongoose = require("mongoose");

const database = async () => {
  await mongoose.connect(process.env.DATABASE_PASS);
  console.log("Database is connected ");
};
module.exports = database;
