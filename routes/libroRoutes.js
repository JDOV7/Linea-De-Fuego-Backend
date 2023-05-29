import express from "express";
import {
  obtenerLibro,
  crearResenia,
  obtenerLibros,
  subirObjecto,
  buscarLibros,
  obtenerLibrosNuevos,
  obtenerLibrosMasVendidos,
} from "../controllers/libroController.js";
import buscarLibrosMiddleware from "../middleware/buscarLibrosMiddleware.js";

const router = express.Router();

router.get("/obtener-libro/:l_id_libro", obtenerLibro);
router.post("/crear-resenia", crearResenia);
router.post("/obtener-libros/:l_genero", obtenerLibros);
router.post("/subir-objecto", subirObjecto);
router.post("/buscar-libros", buscarLibrosMiddleware, buscarLibros);
router.post("/obtener-libros-nuevos", obtenerLibrosNuevos);
router.post("/obtener-libros-mas-vendidos", obtenerLibrosMasVendidos);
// checkAuth
export default router;
