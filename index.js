const { urlencoded } = require("express");
const express = require("express");

const app = express();

require("./db");

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.send("Hola Mundo");
});

app.listen(3000, () => {
	console.log("Servidor iniciado!");
});
