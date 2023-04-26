import axios from "axios";

const clienteAxios = axios.create({
  baseURL: `${process.env.URL}/api`,
});

export default clienteAxios;