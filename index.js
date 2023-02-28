import app from "./config/express.js";
import express from "express";

const port = 3000;

const router = express.Router();

router.get("/", async (req, res, next) => {
  res.json({ ola: "mundo" })
})

app.use("/", router);

app.listen(
  port,
  () => console.log("Servidor funcionando!")
)