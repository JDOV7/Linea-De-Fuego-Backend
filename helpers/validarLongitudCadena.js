const validarLongitudCadena = (cadena = "", longitudMinima = 0) => {
  return cadena && cadena.trim().length >= longitudMinima;
};

export default validarLongitudCadena;
