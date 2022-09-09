// Modules to Import
const router = require("express").Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

// Path for Users
router.use("/users", require('./userRoutes'));

// Path for Posts
router.use("/posts", require("./postRoutes"));

// Path for Comments
router.use("/comments", require('./commentRoutes'));



module.exports = router;