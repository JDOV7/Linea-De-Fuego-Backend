import nodemailer from "nodemailer";
// import * as SibApiV3Sdk from "@sendinblue/client";

import SibApiV3Sdk from "sib-api-v3-sdk";

import axios from "axios";

const emailRegistro = async (datos) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  console.log(datos);
  const { u_correo, u_nombre, u_token } = datos;
  //
  const info = await transporter.sendMail({
    from: "Libreria Linea De Fuego",
    to: u_correo,
    subject: "Comprueba tu cuente de Linea De Fuego",
    text: "Comprueba tu cuenta en Linea De Fuego",
    html: `<p>Hola: ${u_nombre}, comprueba tu cuenta en Linea De Fuego.</p>
        <p>Tu cuenta ya esta lista, solo debes comprobarla en el siguiente enlace:
            <a href="${process.env.FRONTEND_URL}/confirmar/${u_token}">Comprobar Cuenta</a></p>
            <p>Si tu no creaste esta cuenta, puedes ignorar este enlace</p>
    `,
  });
  // console.log(`Mensaje enviado : ${info}`);
};
// jesusmarzo7@outlook.com     jesusmarzo7@gmail.com
const enviarCorreo = async (datos) => {
  console.log("coreeooooooooo");
  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
  const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
  var defaultClient = SibApiV3Sdk.ApiClient.instance;

  var apiKey = defaultClient.authentications["api-key"];
  apiKey.apiKey =
    "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";
  const { u_correo, u_nombre, u_token } = datos;
  const sendSmtpEmail2 = {
    sender: {
      name: "Contacto",
      email: "jesusmarzo7@gmail.com",
    },
    to: [
      {
        email: u_correo,
        name: u_nombre,
      },
    ],
    subject: "Comprueba tu cuente de Linea De Fuego",
    htmlContent: `<p >Hola: ${u_nombre}, comprueba tu cuenta en Linea De Fuego.</p>
    <p>Tu cuenta ya esta lista, solo debes comprobarla en el siguiente enlace:
        <a href="${process.env.FRONTEND_URL}/confirmar/${u_token}">Comprobar Cuenta</a></p>
        <p>Si tu no creaste esta cuenta, puedes ignorar este enlace</p>
`,
    headers: {
      "X-Mailin-custom":
        "custom_header_1:custom_value_1|custom_header_2:custom_value_2",
    },
  };

  apiInstance.sendTransacEmail(sendSmtpEmail2).then(
    function (data) {
      console.log("API called successfully. Returned data: ");
    },
    function (error) {
      console.error(error);
    }
  );
};

const enviarDatosCompra = async (datos) => {
  console.log("compraaaaaaaaaaa");
  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
  const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
  var defaultClient = SibApiV3Sdk.ApiClient.instance;

  var apiKey = defaultClient.authentications["api-key"];
  apiKey.apiKey =
    "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";
  const {
    respuesta: { u_correo, u_nombre, articulosCompradros, total },
  } = datos;
  let productosCompra = "";
  articulosCompradros.forEach((articulo) => {
    const { l_nombre, cantidad, precioSubTotal } = articulo;
    const articuloDatos = `<p>Titulo: ${l_nombre} | Piezas: ${cantidad}  | Subtotal: ${precioSubTotal}</p>`;
    productosCompra += articuloDatos;

    console.log(articulo);
  });
  const sendSmtpEmail2 = {
    sender: {
      name: "Contacto",
      email: "jesusmarzo7@gmail.com",
    },
    to: [
      {
        email: u_correo,
        name: u_nombre,
      },
    ],
    subject: "Compra Realizada Correctamente",
    htmlContent: `<p >Hola: ${u_nombre}, tu compra en Linea De Fuego se llevo con Exito!!.</p>
      <p>Aqui los datos de tu compra: </p>
      ${productosCompra}
      Total: ${total}
  `,
    headers: {
      "X-Mailin-custom":
        "custom_header_1:custom_value_1|custom_header_2:custom_value_2",
    },
  };

  apiInstance.sendTransacEmail(sendSmtpEmail2).then(
    function (data) {
      console.log("API called successfully. Returned data: ");
    },
    function (error) {
      console.error(error);
    }
  );
};

export default emailRegistro;
export { enviarCorreo, enviarDatosCompra };
