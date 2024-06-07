import { Router } from "express";
import * as userController from "./user.controller.js";
const router = Router();

router.post("/register", userController.signup);
router.post("/login", userController.login);

export default router;
