const express = require("express");
const router = express.Router();

const talentsController = require("../controllers/talentsController");
const circusController = require("../controllers/circusController");
const comedyController = require("../controllers/comedyController");
const danceController = require("../controllers/danceController");
const dragController = require("../controllers/dragController");
const magicController = require("../controllers/magicController");
const musicController = require("../controllers/musicController");

router.get("/talents", talentsController.index);
router.get("/circus", circusController.index);
router.get("/comedy", comedyController.index);
router.get("/dance", danceController.index);
router.get("/drag", dragController.index);
router.get("/magic", magicController.index);
router.get("/music", musicController.index);

module.exports = router;
