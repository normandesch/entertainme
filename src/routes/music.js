const express = require("express");
const router = express.Router();

const talentsController = require("../controllers/talentsController");
const musicController = require("../controllers/musicController");

router.get("/talents", talentsController.index);
router.get("/music", musicController.index);

module.exports = router;
