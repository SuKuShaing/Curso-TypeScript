import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // Carga las variables de entorno desde el archivo .env

const app = express(); // Inicializa el servidor express
const PORT = process.env.PORT || 3000; // Define el puerto del servidor

app.use(cors()); // Habilita el uso de cors para permitir solicitudes desde otros dominios
app.use(express.json()); // Habilita el uso de json para el body de las peticiones

app.get("/", (req, res) => {
    res.json({ message: "Hola desde la API de Typescript" });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});