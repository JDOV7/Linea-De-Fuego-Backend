import validarLongitudCadena from "../helpers/validarLongitudCadena.js";
const obtenerSiProductoEsFavoritoMiddleware = (req, res, next) => {
  try {
    const {
      headers: { tokenjwt },
      body: { l_id_libro },
    } = req;

    if (!tokenjwt || !validarLongitudCadena(tokenjwt, 10)) {
      throw new Error("Error: No existe el usuario");
    }
    if (
      !l_id_libro ||
      !validarLongitudCadena(l_id_libro + "", 1) ||
      +l_id_libro <= 0
    ) {
      throw new Error("Error: Libro invalido");
    }
    next();
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
export default obtenerSiProductoEsFavoritoMiddleware;
