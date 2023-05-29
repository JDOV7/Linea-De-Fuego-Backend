import validarLongitudCadena from "../helpers/validarLongitudCadena.js";
const comprarProductosMiddleware = (req, res, next) => {
  try {
    const {
      body: {
        v_direcion,
        v_ciudad,
        v_codigo_postal,
        v_numero_tarjeta,
        v_exp,
        v_ccv,
      },
    } = req;
    console.log(req.body);
    console.log("comprarProductosMiddleware");
    if (!v_direcion || !validarLongitudCadena(v_direcion, 10)) {
      console.log("comprarProductosMiddleware: v_direcion");
      throw new Error("Error: dirrecion invalida");
    } else if (
      !v_ciudad ||
      !validarLongitudCadena(v_ciudad, 4) ||
      v_ciudad === "DEFAULT"
    ) {
      console.log("comprarProductosMiddleware: v_ciudad");
      throw new Error("Error: ciudad invalida");
    } else if (!v_codigo_postal || v_codigo_postal.length !== 5) {
      console.log("comprarProductosMiddleware: v_codigo_postal");
      throw new Error("Error: codigo postal invalido");
    } else if (!v_numero_tarjeta || v_numero_tarjeta.length !== 16) {
      console.log("comprarProductosMiddleware: v_numero_tarjeta");
      throw new Error("Error: numero de tarjeta invalido");
    } else if (!v_exp || v_exp.length !== 4) {
      console.log("comprarProductosMiddleware: v_exp");
      throw new Error("Error: exp invalido");
    } else if (!v_ccv || v_ccv.length !== 3) {
      console.log("comprarProductosMiddleware: v_ccv");
      throw new Error("Error: cvv invalido");
    }
    console.log("comprarProductosMiddleware: next");
    next();
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
export default comprarProductosMiddleware;
