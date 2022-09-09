const router = require('express').Router();

// Path for Homepage
router.use("/", require("./homeRoutes"));

// Path for Dashboard Page
router.use("/dashboard", require("./dashboardRoutes"));

//Path for all API
router.use("/api", require("./api"));


module.exports = router;