const mongoose = require("mongoose");
// const db = "mongodb+srv://ranjana:ranjana123@bakeryshop.9vlz7wx.mongodb.net/";
const db ="mongodb+srv://rajanathapa98:rajana123@cluster0.058p3fj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
module.exports = connect = async () => {
  try {
    //database = cakeshop
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to mongodb atlas");
  } catch (error) {
    console.error(error);
  }
};
