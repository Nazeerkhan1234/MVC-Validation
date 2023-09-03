const express = require("express");
const app = express();
const env = require("dotenv");
env.config();
const { adminRoute } = require("./src/routes/admin/adminRoute");
app.use(adminRoute);
let port = process.env.PORT;
app.listen(port, () => {
  console.log("listening on port", port);
});
