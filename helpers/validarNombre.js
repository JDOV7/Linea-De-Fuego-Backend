const validarNombre = (nombre = "") => {
  let regex = /^[a-zA-Z\s]+$/;
  return regex.test(nombre.trim());
};
export default validarNombre;
