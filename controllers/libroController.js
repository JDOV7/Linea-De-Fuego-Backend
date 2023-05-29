import axios from "axios";

async function obtenerLibro(req, res) {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        accion: "obtener_informacion_libro",
      },
    };
    // console.log(req.body);
    const { l_id_libro } = req.params;
    // console.log(req.params);

    const url = `${process.env.URL}/libro/obtener-libro/${l_id_libro}`;
    const { data } = await axios.get(url, config);
    console.log(data);
    return res.json(data);
  } catch (error) {
    const e = new Error("Error: No se pudo obtener ese libro");
    return res.status(400).json({ msg: e.message });
  }
}
async function crearResenia(req, res) {
  // return res.json({
  //   msg: "crearResenia",
  // });
  try {
    const {
      body: { r_id_libro, r_res_cli },
      headers: { tokenjwt },
    } = req;
    const config = {
      headers: {
        "Content-Type": "application/json",
        accion: "crear_resenia",
        tokenjwt,
      },
    };

    const datos = {
      r_id_libro,
      r_res_cli,
    };
    const url = `${process.env.URL}/libro/crear-resenia`;
    const { data } = await axios.post(url, datos, config);
    console.log(data);
    return res.status(200).json(data);
  } catch (error) {
    const e = new Error("Error: No se pudo realizar la reseña");
    return res.status(400).json({ msg: e.message });
  }
}

async function obtenerLibros(req, res) {
  try {
    const { l_genero } = req.params;
    const {
      body: { l_tipo },
    } = req;
    console.log(l_genero);
    const config = {
      headers: {
        "Content-Type": "application/json",
        accion: "obtener_libros_por_categoria",
      },
    };

    const datos = {
      l_genero,
      l_tipo,
    };
    const url = `${process.env.URL}/libro/obtener-libros`;
    const { data } = await axios.post(url, datos, config);
    console.log(data);
    console.log("linea 72");
    if (!data || !data.status || data.status !== 200) {
      throw new Error("Error: no se encontraron libros");
    }
    return res.status(200).json(data);
  } catch (error) {
    const e = new Error(
      "Error: No se pudo obtener los libros de esta categoria"
    );
    return res.status(400).json({ msg: e.message });
  }
}

async function subirObjecto(req, res) {
  try {
    const {
      body: { texto, nombre },
    } = req;
    console.log(texto, nombre);
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //     accion: "obtener_libros_por_categoria",
    //   },
    // };

    const datos = {
      texto,
      nombre,
    };
    const url = `https://bd5ynbchaj.execute-api.us-east-2.amazonaws.com/test/subiendo-objecto`;
    const { data } = await axios.post(url, datos);
    // console.log(data);
    console.log("linea 72");

    return res.status(200).json(data);
  } catch (error) {
    const e = new Error(
      "Error: No se pudo obtener los libros de esta categoria"
    );
    return res.status(400).json({ msg: e.message });
  }
}

async function buscarLibros(req, res) {
  try {
    const {
      body: { dato },
    } = req;
    const config = {
      headers: {
        "Content-Type": "application/json",
        accion: "buscar_libros",
      },
    };
    const url = `${process.env.URL}/libro/buscar-libros`;
    const { data } = await axios.post(url, { dato }, config);
    console.log(data);
    console.log("linea 134");
    if (!data || !data.status || data.status !== 200) {
      throw new Error("Error: no se encontraron libros");
    }
    return res.status(200).json(data);
  } catch (error) {
    const e = new Error(
      "Error: No se pudo obtener los libros de esta categoria"
    );
    return res.status(400).json({ msg: e.message });
  }
}
async function obtenerLibrosNuevos(req, res) {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        accion: "obtener_productos_nuevos",
      },
    };
    const url = `${process.env.URL}/libro/obtener-libros-nuevos`;
    const { data } = await axios.post(url, {}, config);
    console.log(data);
    console.log("linea 157");
    if (!data || !data.status || data.status !== 200) {
      throw new Error("Error: no se encontraron libros");
    }
    return res.status(200).json(data);
  } catch (error) {
    const e = new Error("Error: No se pudo obtener los libros");
    return res.status(400).json({ msg: e.message });
  }
}

async function obtenerLibrosMasVendidos(req, res) {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        accion: "obtener_libros_mas_vendidos",
      },
    };
    const url = `${process.env.URL}/libro/obtener-libros-mas-vendidos`;
    const { data } = await axios.post(url, {}, config);
    console.log(data);
    console.log("linea 179");
    if (!data || !data.status || data.status !== 200) {
      throw new Error("Error: no se encontraron libros");
    }
    return res.status(200).json(data);
  } catch (error) {
    const e = new Error("Error: No se pudo obtener los libros");
    return res.status(400).json({ msg: e.message });
  }
}
export {
  obtenerLibro,
  crearResenia,
  obtenerLibros,
  subirObjecto,
  buscarLibros,
  obtenerLibrosNuevos,
  obtenerLibrosMasVendidos,
};
