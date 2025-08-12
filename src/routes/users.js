import express from "express";
import conection from "../bd/db.js";

const router = express.Router();

router.get("/", (req, res) => {
  const sql = "SELECT * FROM users";
  conection.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error obteniendo users" });
    }
    res.json(results);
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM users WHERE id = ?";
  conection.query(sql, [id], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error obteniendo user" });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "user no encontrado" });
    }
    res.json(results[0]);
  });
});

router.post("/", (req, res) => {
  const { name, identiti, addres, phone, email, plataform } = req.body;
  const sql =
    "INSERT INTO users (name_user, identiti,addres,phone,email,plataform) VALUES (?, ?, ?,?,?,?)";
  conection.query(
    sql,
    [name, identiti, addres, phone, email, plataform],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Error creando user" });
      }
      res.status(201).json({ message: "user creado", id: result.insertId });
    }
  );
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name_user, identiti, addres, phone, email, plataform } = req.body;
  const sql =
    "UPDATE users SET name_user = ?, identiti = ?, addres = ?,phone=?,email=? , plataform=?  WHERE id = ?";
  conection.query(
    sql,
    [name_user, identiti, addres, phone, email, plataform, id],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Error actualizando user" });
      }
      if (result.affectedRows === 0) {
        return res
          .status(404)
          .json({ message: "user no encontrado para actualizar" });
      }
      res.json({ message: "user actualizado" });
    }
  );
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM users WHERE id = ?";
  conection.query(sql, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error eliminando user" });
    }
    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ message: "user no encontrado para eliminar" });
    }
    res.json({ message: "user eliminado" });
  });
});

export default router;
