/** All routes **/

const router = require("express").Router();
const usersRoutes = require("./users");
const petsRoutes = require("./pets")

router.use("/users", usersRoutes);
router.use("/pets", petsRoutes);

router.use("/", function(request, response) {
    return response.send("Welcome to Adoptapet API");
});

module.exports = router;
