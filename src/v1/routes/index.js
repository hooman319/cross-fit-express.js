const express = require("express");
//we can make a router seperately from main express app route
const router = express.Router();

//The .route("/") method in Express.js is a way to define multiple HTTP methods 
// (e.g., GET, POST, PUT, DELETE) for the same route in a chained manner. 
router.route("/").get((req, res) => {
    res.send(`<h2>Hello from ${req.baseUrl}</h2>`);
});

//In Node.js, module.exports is used to export a module so that it can be imported and used in another file. 
// In the case of Express.js, module.exports = router; is used to export the router instance, allowing us to keep routes 
// modular and organized.
module.exports =router;