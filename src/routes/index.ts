import express from "express";
import path from "path";
import { isLoggedIn } from "../middlewares/isLoggedIn";

const router = express.Router();

const joinViewsPath = (htmlDocumentName: string) => path.join(__dirname, "../views", `${htmlDocumentName}.html`)

router.get("/", isLoggedIn, (req, res) => {
  res.sendFile(joinViewsPath("index"));
});

router.get("/register", isLoggedIn, (req, res) => {
  res.sendFile(joinViewsPath("register"));
});

export default router;