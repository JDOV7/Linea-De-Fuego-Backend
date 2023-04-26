import express from "express";
import { obtenerLibro,crearResenia } from "../controllers/libroController.js";

const router = express.Router();

router.get("/obtener-libro/:l_id_libro", obtenerLibro);
router.post("/crear-resenia", crearResenia);
// checkAuth
export default router;
