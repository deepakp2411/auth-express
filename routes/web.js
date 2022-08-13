import express from "express";

const router = express.Router();
import {
  UserController,
  registController,
  loginController,
} from "../controllers/userController.js";

router.get("/", UserController);
router.get("/registration", registController);
router.get("/login", loginController);

export default router;
