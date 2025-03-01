const getAllWokouts = (req, res) => {
    res.send("Get All Workouts");
};

const getOneWokout = (req, res) => {
    res.send("Get an existing workout");
};

const createNewWorkout = (req, res) => {
    res.send("Create a new Workout");
};

const updateOneWorkout = (req, res) => {
    res.send("Update an existing Workout");
};

const deleteOneWorkOut = (req, res) => {
    res.send("Delete an existing Workout");
};

module.exports = {
    getAllWokouts,
    getOneWokout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkOut
};