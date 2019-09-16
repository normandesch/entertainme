const express = require("express");
const router = express.Router();

const talentsController = require("../controllers/talentsController");

router.get("/talents", talentsController.index);


module.exports = router;
