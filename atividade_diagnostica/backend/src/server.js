const express = require("express");
const cors = require("cors");
const prisma = require("./prisma");

const userRoutes = require("./routes/userRoutes")


const app = express();

app.use(cors());
app.use(express.json());

app.use("/usuarios", userRoutes)

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});