const express = require("express");
const router = express.Router();

const talentsController = require("../controllers/talentsController");
const dragController = require("../controllers/dragController");

router.get("/talents", talentsController.index);
router.get("/drag", dragController.index);

module.exports = router;
