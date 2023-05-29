import express from "express";
import {
  registrar,
  confirmar,
  autenticarCliente,
  editarPerfilCliente,
  obtenerPerfil,
  comprarProductos,
  obtenerHistorial,
  obtenerSiProductoEsFavorito,
  crearNuevoFavorito,
  eliminarProductoFavorito,
  obtenerMisFavoritos,
} from "../controllers/clienteController.js";
import checkAuth from "../middleware/authMiddleware.js";
import comprarProductosMiddleware from "../middleware/comprarProductosMiddleware.js";
import obtenerHistorialMiddleware from "../middleware/obtenerHistorialMiddleware.js";
import obtenerSiProductoEsFavoritoMiddleware from "../middleware/obtenerSiProductoEsFavoritoMiddleware.js";

const router = express.Router();

router.post("/registrar-cliente", registrar);
router.get("/registrar-cliente/:token", confirmar);
router.post("/autenticar-cliente", autenticarCliente);
router.post("/obtener-perfil", obtenerPerfil);
router.put("/editar-perfil-cliente", editarPerfilCliente);
router.post(
  "/comprar-productos-cliente",
  comprarProductosMiddleware,
  comprarProductos
);
router.post("/obtener-historial", obtenerHistorialMiddleware, obtenerHistorial);
router.post(
  "/obtener-si-producto-es-favorito",
  obtenerSiProductoEsFavoritoMiddleware,
  obtenerSiProductoEsFavorito
);
router.post(
  "/crear-nuevo-favorito",
  obtenerSiProductoEsFavoritoMiddleware,
  crearNuevoFavorito
);
router.post(
  "/eliminar-producto-favorito",
  obtenerSiProductoEsFavoritoMiddleware,
  eliminarProductoFavorito
);
router.post(
  "/obtener-mis-favoritos",
  obtenerHistorialMiddleware,
  obtenerMisFavoritos
);
// checkAuth
export default router;
