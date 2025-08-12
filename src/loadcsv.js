import fs from "fs";
import csv from "csv-parser";
import connection from "../src/bd/db.js";

function loadusers() {
  fs.createReadStream("../public/csv/usuarios.csv")
    .pipe(csv())
    .on("data", (fila) => {
      const {
        nombre,
        identificacion,
        direccion,
        telefono,
        correo,
        plataforma,
      } = fila;

      const sql =
        "INSERT INTO users (name_user,identiti,addres,phone,email,plataform)  VALUES (?,?,?,?,?,?)";

      connection.query(
        sql,
        [nombre, identificacion, direccion, telefono, correo, plataforma],
        (error) => {
          if (error) {
            console.error("error al insertar", error.message);
          }
        }
      );
    })
    .on("end", () => console.log("tabla usuarios poblada  "));
}

function loadtrans() {
  fs.createReadStream("../public/csv/transacciones.csv")
    .pipe(csv())
    .on("data", (fila) => {
      const { id, fecha, monto, estado, tipo } = fila;

      const sql =
        "INSERT INTO transactions (id,date_time,amount,status,tipe)  VALUES (?,?,?,?,?)";

      connection.query(sql, [id, fecha, monto, estado, tipo], (error) => {
        if (error) {
          console.error("error al insertar", error.message);
        }
      });
    })
    .on("end", () => console.log("tabla transacciones poblada "));
}

function loadfactures() {
  fs.createReadStream("../public/csv/facturas.csv")
    .pipe(csv())
    .on("data", (fila) => {
      const {
        numero_de_factura,
        periodo,
        monto_facturado,
        monto_pagado,
        id_usuario,
        id_transaccion,
      } = fila;

      const sql =
        "INSERT INTO facturs(number_facture,period,amount_facture,amount_paid,id_user,id_transaction)  VALUES (?,?,?,?,?,?)";

      connection.query(
        sql,
        [
          numero_de_factura,
          periodo,
          monto_facturado,
          monto_pagado,
          id_usuario,
          id_transaccion,
        ],
        (error) => {
          if (error) {
            console.error("error al insertar", error.message);
          }
        }
      );
    })
    .on("end", () => console.log("tabla facturas  poblada "));
}

loadusers();
loadtrans();

setTimeout(() => {
  loadfactures();
}, 1000);

setTimeout(() => {
  connection.end();
  console.log("la conexion esta cerrada ");
}, 2000);
