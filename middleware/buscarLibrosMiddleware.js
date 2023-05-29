import validarLongitudCadena from "../helpers/validarLongitudCadena.js";
const buscarLibrosMiddleware = (req, res, next) => {
  const {
    body: { dato },
  } = req;
  if (!dato || !validarLongitudCadena(dato, 1)) {
    res.status(400).json({ msg: "Error: No se pudo buscar el libro" });
  } else {
    next();
  }
};
export default buscarLibrosMiddleware;
