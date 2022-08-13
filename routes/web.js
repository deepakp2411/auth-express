import express from "express";

const router = express.Router();
import {UserController} from "../controllers/userController.js";

router.get("/", UserController);

export default router;
