const express = require("express");
const cors = require("cors");
const connect = require("./db/connect");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");
const cartRouter = require("./routes/cartRouter");
const favouriteRouter = require("./routes/favouriteRouter");
const orderRouter = require("./routes/orderRouter");
const mailRouter = require("./routes/mailRouter");
const ipfilter = require("express-ipfilter").IpFilter;
require("dotenv").config();

const app = express();

const PORT = process.env.PORT;

//we can use one of them to allow ip addresses
// app.use((req, res, next) => {
//   let validIps = ["192.168.1.67", "::ffff:192.168.1.67"]; // Put your IP whitelist in this array

//   if (validIps.includes(req.socket.remoteAddress)) {
//     // IP is ok, so go on
//     console.log("IP ok");
//     next();
//   } else {
//     // Invalid ip
//     console.log("Bad IP: " + req.socket.remoteAddress);
//     const err = new Error("Bad IP: " + req.socket.remoteAddress);
//     next(err);
//   }
// });

// const whitelist = [["192.168.1.67", "192.168.0.2"]]; // Replace with your own list of IP addresses

// const ipWhitelist = ipfilter(whitelist, { mode: "allow" });
// app.use(ipWhitelist);

app.use(express.json());
app.use(cors());
app.use(usersRouter);
app.use(productsRouter);
app.use(cartRouter);
app.use(favouriteRouter);
app.use(orderRouter);
app.use(mailRouter);

connect();

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
