import jwt from "jsonwebtoken";
// import Veterinario from "../models/Veterinario.js";
const checkAuth = async (req, res, next) => {
  console.log("desde mi middleware");
  // console.log(req);
  // console.log(req.headers);
  console.log(req.body);
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        accion: "obtener_perfil",
      },
    };
    // console.log(req.body);
    const { token } = req.body;
    if (!token) {
      const error = new Error("token no valido o inexistente");
      res.status(403).json({ msg: error.message });
    }
    // console.log(token);
    const datos = {
      token,
    };
    const url = `${process.env.URL}/obtener-perfil`;
    const { data } = await axios.post(url, datos, config);
    console.log(data);
    return next();
  } catch (error) {
    const e = new Error("Error: No se pudo autenticar el cliente");
    return res.status(400).json({ msg: e.message });
  }
  next();
  //   let token;
  //   if (
  //     req.headers.authorization &&
  //     req.headers.authorization.startsWith("Bearer")
  //   ) {
  //     console.log("si tiene el token con Bearer");
  //     try {
  //       token = req.headers.authorization.split(" ")[1];
  //         console.log(token);
  //       const decoded = jwt.verify(token, process.env.JWT_SECRET);
  //       //   console.log(decoded);
  //       req.veterinario = await Veterinario.findById(decoded.id).select(
  //         "-password -token -confirmado"
  //       );
  //       //   console.log(veterinario);
  //       return next();
  //     } catch (error) {
  //       const e = new Error("token no valido");
  //       return res.status(403).json({ msg: e.message });
  //     }
  //   }
  //   if (!token) {
  //     const error = new Error("token no valido o inexistente");
  //     res.status(403).json({ msg: error.message });
  //   }
  //   console.log(req.headers.authorization);
  next();
};

export default checkAuth;
