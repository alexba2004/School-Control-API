const mongoose = require("mongoose");
mongoose
    .connect("") // Colocar link de conexión al cluster.
    .then((db) => console.log("===============[MongoDB Atlas]===============\nStatus: Connected"))
    .catch((err) => console.err(err));
