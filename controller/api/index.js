// Modules to Import
const router = require("express").Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

// Path for Users
router.use("/users", userRoutes);

// Path for Posts
router.use("/posts", postRoutes);

// Path for Comments
router.use("/comments", commentRoutes);



module.exports = router;