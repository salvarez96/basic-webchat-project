import express from "express";
import path from "path";

const router = express.Router();

const views = path.join(__dirname, "../views");

router.get("/", (req, res) => {
  res.sendFile(path.join(views, "index.html"));
});

export default router;