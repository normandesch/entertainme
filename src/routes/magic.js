const express = require("express");
const router = express.Router();

const talentsController = require("../controllers/talentsController");
const magicController = require("../controllers/magicController");

router.get("/talents", talentsController.index);
router.get("/magic", magicController.index);

module.exports = router;
