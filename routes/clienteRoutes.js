import express from "express";
import {
  registrar,
  confirmar,
  autenticarCliente,
  editarPerfilCliente,
  obtenerPerfil,
  comprarProductos,
} from "../controllers/clienteController.js";
import checkAuth from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/registrar-cliente", registrar);
router.get("/registrar-cliente/:token", confirmar);
router.post("/autenticar-cliente", autenticarCliente);
router.post("/obtener-perfil", obtenerPerfil);
router.put("/editar-perfil-cliente", editarPerfilCliente);
router.post("/comprar-productos-cliente", comprarProductos);
// checkAuth
export default router;
