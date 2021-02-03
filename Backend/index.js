const { urlencoded } = require("express");
const express = require("express");

const apiRouter = require("./routes/api");

const app = express();

require("./db");

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.listen(3001, () => {
	console.log("Servidor iniciado en el puerto 3000!");
});
