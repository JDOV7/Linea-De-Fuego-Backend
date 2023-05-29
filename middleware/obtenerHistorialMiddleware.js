import validarLongitudCadena from "../helpers/validarLongitudCadena.js";
const obtenerHistorialMiddleware = (req, res, next) => {
  try {
    const {
      headers: { tokenjwt },
    } = req;
    if (!tokenjwt || !validarLongitudCadena(tokenjwt, 10)) {
      throw new Error("Error: No existe el usuario");
    } else {
      next();
    }
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
export default obtenerHistorialMiddleware;
