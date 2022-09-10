const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://admin:ShWHwg8sbYCstOsW@cluster0.fnwlj.mongodb.net/omdb-project?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("db is connected!");
  })
  .catch((ex) => {
    console.log("db connection failed: ", ex);
  });
