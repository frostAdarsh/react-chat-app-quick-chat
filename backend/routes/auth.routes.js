// routes/auth.routes.js
import express from "express";
import { login, logout, signup } from "../controller.js/auth.controller.js";


const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);

export default router;
