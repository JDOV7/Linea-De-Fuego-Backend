// import clienteAxios from "../config/axios.js";
import axios from "axios";
import emailRegistro from "../helpers/emailRegistro.js";
import { enviarCorreo } from "../helpers/emailRegistro.js";

async function registrar(req, res) {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        accion: "registrar-cliente",
      },
    };
    // console.log(req.body);
    const { u_nombre, u_correo, u_contrasena, u_direcion, u_telefono } =
      req.body;
    const datos = {
      u_nombre,
      u_correo,
      u_contrasena,
      u_direcion,
      u_telefono,
    };
    // https://ivlttwq03g.execute-api.us-east-2.amazonaws.com/test?codigo=200
    // https://pyxfr1t9wg.execute-api.us-east-2.amazonaws.com/test
    const url = `${process.env.URL}/registrar-cliente`;
    const { data } = await axios.post(url, datos, config);

    console.log(data);
    const { u_token } = data.body;
    emailRegistro({
      u_correo,
      u_nombre,
      u_token,
    });
    enviarCorreo({
      u_correo,
      u_nombre,
      u_token,
    });
    return res.json(data);
  } catch (error) {
    const e = new Error("Error: No se pudo crear el cliente");
    return res.status(400).json({ msg: e.message });
  }

  // res.send
}

async function confirmar(req, res) {
  try {
    const { token } = req.params;
    const config = {
      headers: {
        "Content-Type": "application/json",
        accion: "token_confirmar",
      },
    };

    const url = `${process.env.URL}/registrar-cliente/${token}`;
    const { data } = await axios.get(url, config);
    console.log(data);
    return res.json({ msg: "Usuario confirmado correctamente" });
  } catch (error) {
    const e = new Error("Error: No se pudo confirmar el cliente");
    return res.status(400).json({ msg: e.message });
  }

  // res.send
}

async function autenticarCliente(req, res) {
  // const { token } = req.params;
  // return res.json(req.body);

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        accion: "autenticar_cliente",
      },
    };
    // console.log(req.body);
    const { u_correo, u_contrasena } = req.body;
    const datos = {
      u_correo,
      u_contrasena,
    };
    const url = `${process.env.URL}/autenticar-cliente`;
    const { data } = await axios.post(url, datos, config);
    console.log(data);
    return res.json(data);
  } catch (error) {
    const e = new Error("Error: No se pudo autenticar el cliente");
    return res.status(400).json({ msg: e.message });
  }

  // res.send
}

async function editarPerfilCliente(req, res) {
  // const { token } = req.params;
  // console.log(req.headers);
  try {
    const { tokenjwt } = req.headers;

    const config = {
      headers: {
        "Content-Type": "application/json",
        accion: "editar_perfil_cliente",
        tokenjwt,
      },
    };
    // console.log(req.body);
    const { u_nombre, u_direcion, u_telefono } = req.body;
    const datos = {
      u_nombre,
      u_direcion,
      u_telefono,
    };
    console.log(req.headers);
    console.log(datos);
    console.log("editando el perfil: backend");
    const url = `${process.env.URL}/editar-perfil-cliente`;
    const { data } = await axios.put(url, datos, config);
    console.log(data);
    return res.json(data);
  } catch (error) {
    const e = new Error("Error: No se pudo editar el cliente");
    return res.status(400).json({ msg: e.message });
  }

  // res.send
}

async function obtenerPerfil(req, res) {
  // const { token } = req.params;
  // return res.json(req.body);

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        accion: "obtener_perfil",
      },
    };
    // console.log(req.body);
    const { token } = req.body;
    // console.log(token);
    const datos = {
      token,
    };
    const url = `${process.env.URL}/obtener-perfil`;
    const { data } = await axios.post(url, datos, config);
    console.log(data);
    return res.json(data);
  } catch (error) {
    const e = new Error("Error: No se pudo autenticar el cliente");
    return res.status(400).json({ msg: e.message });
  }

  // res.send
}
async function comprarProductos(req, res) {
  console.log("comprarProductos");
  try {
    const { tokenjwt } = req.headers;

    const config = {
      headers: {
        "Content-Type": "application/json",
        accion: "comprar_productos_cliente",
        tokenjwt,
      },
    };
    // console.log(req.body);
    const {
      body: { articulos },
    } = req;
    console.log(articulos);
    const datos = {
      articulos,
    };
    // console.log(req.headers);
    // console.log(datos);
    console.log("comprarProductos: backend");
    const url = `${process.env.URL}/cliente/comprar-productos-cliente`;
    const { data } = await axios.post(url, datos, config);
    console.log(data);
    return res.json(data);
  } catch (error) {
    const e = new Error("Error: No se pudo realizar la compra");
    return res.status(400).json({ msg: e.message });
  }
}
export {
  registrar,
  confirmar,
  autenticarCliente,
  editarPerfilCliente,
  obtenerPerfil,
  comprarProductos,
};
