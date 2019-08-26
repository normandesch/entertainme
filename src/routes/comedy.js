const express = require("express");
const router = express.Router();

const talentsController = require("../controllers/talentsController");
const comedyController = require("../controllers/comedyController");

router.get("/talents", talentsController.index);
router.get("/comedy", comedyController.index);

module.exports = router;
