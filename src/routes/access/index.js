"use strict";

const express = require("express");
const accessController = require("../../controller/access.controller");
const { asyncHandler } = require("../../auth/checkAuthen");
const router = express.Router();

router.post("/signup", accessController.signup);
router.post("/api-key", accessController.apiKey);
router.post("/login", asyncHandler(accessController.login));

module.exports = router;
