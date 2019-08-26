const express = require("express");
const router = express.Router();

const talentsController = require("../controllers/talentsController");
const danceController = require("../controllers/danceController");

router.get("/talents", talentsController.index);
router.get("/dance", danceController.index);

module.exports = router;
