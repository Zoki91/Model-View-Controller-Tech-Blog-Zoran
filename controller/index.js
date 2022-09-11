// Modules to Import
const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const dashBoardRoutes = require('./dashboardRoutes');
const apiRoutes = require('./api');

// Path for Homepage
router.use("/", homeRoutes)

// Path for Dashboard Page
router.use("/dashboard", dashBoardRoutes);

//Path for all API
router.use("/api", apiRoutes);


module.exports = router;