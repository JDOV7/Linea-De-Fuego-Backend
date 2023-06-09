import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import clienteRouter from "./routes/clienteRoutes.js";
import libroRouter from "./routes/libroRoutes.js";
// import veterinarioRoutes from "./routes/veterinarioRoutes.js";
// import pacientesRoutes from "./routes/pacienteRoutes.js";

const app = express();
app.use(express.json({limit: '50mb'}));
// app.use(express.json());


dotenv.config();


const dominiosPermitidos = [process.env.FRONTEND_URL];
const corsOptions = {
  origin: function (origin, callback) {
    if (dominiosPermitidos.indexOf(origin) !== -1) {
      //el origen del request esta permitido
      callback(null, true);
    } else {
      callback(new Error("No permitdo por CORS"));
    }
  },
};

app.use(cors(corsOptions));
// console.log(process.env.MONGO_URI);

app.use("/api/clientes", clienteRouter);
app.use("/api/libros", libroRouter);
// app.use("/api/pacientes", pacientesRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`servidor funcionando en el puerto ${PORT}`);
});
