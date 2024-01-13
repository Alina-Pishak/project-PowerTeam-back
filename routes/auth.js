const express = require("express");
const auth = require("../controllers/auth");
const { validateBody } = require("../middlewares");
const schemas = require("../schemas");
const { authenticate } = require("../middlewares");

const router = express.Router();

router.post(
  "/register",
  validateBody(schemas.registerJoiSchema),
  auth.register
);

router.post("/login", validateBody(schemas.loginJoiSchema), auth.login);

router.post("/logout", authenticate, auth.logout);

router.get("/current", authenticate, auth.getCurrentUser);

router.post(
  "/profile-settings",
  authenticate,
  validateBody(schemas.profileSettingsSchema),
  auth.profileSettings
);

module.exports = router;
