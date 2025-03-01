const express = require("express");
//// Import v1 routes module.
//const v1Router = require("./v1/routes")
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");

const app = express();

const PORT = process.env.PORT || 3000;

// remove because Avoids Mixing App-Level and Router-Level Code, Prevents Duplicate Route Definitions, and Ensures API Versioning and Route Organization
// app.get("/", (req, res) => {
//     res.send("<h2>It's Working!</h2>");
// });


// Mount v1 API routes under `/api/v1` || Keeps routes modular, versioned, and organized & Allows adding /api/v2 
// later without affecting /api/v1. || statement in Express.js is used to mount 
// a router (v1Router) under a specific route prefix (/api/v1)
//app.use("/api/v1", v1Router);

app.use("/api/v1/workouts", v1WorkoutRouter);


app.listen(PORT, () => {
    console.log("API is listening on port ${PORT}");
});