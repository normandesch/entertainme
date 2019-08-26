const express = require("express");
const router = express.Router();

const talentsController = require("../controllers/talentsController");
const circusController = require("../controllers/circusController");

router.get("/talents", talentsController.index);
router.get("/circus", circusController.index);

module.exports = router;
