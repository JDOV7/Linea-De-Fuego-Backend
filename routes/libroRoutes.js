import express from "express";
import {
  obtenerLibro,
  crearResenia,
  obtenerLibros,
} from "../controllers/libroController.js";

const router = express.Router();

router.get("/obtener-libro/:l_id_libro", obtenerLibro);
router.post("/crear-resenia", crearResenia);
router.post("/obtener-libros/:l_genero", obtenerLibros);
// checkAuth
export default router;
