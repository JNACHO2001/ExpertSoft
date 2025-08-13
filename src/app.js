import express from "express";
import cors from "cors";
import usersRoutes from "./routes/users.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", usersRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Servidor preparado" });
});


app.use((req, res) => {
  res.status(404).json({ message: "Ruta no encontrada" });
});

app.listen(3000, () => {
  console.log(`Servidor corriendo en http://localhost:3000`);
});
