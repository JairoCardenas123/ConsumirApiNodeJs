import express from "express";
import categoriaRoutes from "./routes/categorias.routes.js"
import cors from "cors"

const app = express();
console.log(app);

//Middleware
app.set("port", 4000);

app.use(express.json());
app.use(cors());

//Routes
app.use("/api/categorias",categoriaRoutes);
export default app;