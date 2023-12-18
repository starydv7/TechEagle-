import express from "express";
import {
  forgotPasswordController,
  loginController,
  registerController,
  testController,
  updateProfileController,
} from "../controller/authController.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
//router object

const router = express.Router();

//router object
//register ||method post
router.post("/register", registerController);
//LOGIN ||POST ||
router.post("/login", loginController);
//forgotPassword
router.post("/forgot-password", forgotPasswordController);

//test routes

router.get("/test", requireSignIn, isAdmin, testController);
//protected Routes
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
// Admin DashBoard
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});
//profile
router.put("/profile", requireSignIn, updateProfileController);
export default router;
