const express = require("express");
// *** ADD ***
const apicache = require("apicache");

const workoutControllers = require("../../controllers/workoutController")
const recordController = require("../../controllers/recordController");

const router = express.Router();
// *** ADD ***
const cache = apicache.middleware;

// *** ADD ***
router.get("/", cache("2 minutes"), workoutController.getAllWorkouts);

router.get("/:workoutId", workoutControllers.getOneWokout);

// *** ADD ***
router.get("/:workoutId/records", recordController.getRecordForWorkout);

router.post("/",workoutControllers.createNewWorkout);

router.patch("/:workoutId",workoutControllers.updateOneWorkout);

router.delete("/:workoutId", workoutControllers.deleteOneWorkOut);

module.exports = router;

