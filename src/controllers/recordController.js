const recordService = require("../services/recordService");

const getRecordForWorkout = (req, res) => {
    const {
        params: { workoutId },
      } = req;
      if (!workoutId) {
        return;
      }
      const workoutRecord = recordService.getRecordForWorkout(workoutId);
      res.send({ status: "OK", data: workoutRecord });
};

module.exports = {getRecordForWorkout};