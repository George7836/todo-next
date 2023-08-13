const Router = require("express");
const router = new Router();
const taskController = require("../controllers/task.controllers");

router.get("/task", taskController.getAllTasks);
router.post("/task", taskController.addTask);
router.delete("/task/:id", taskController.removeTask);
router.put("/task/:id", taskController.updateTask);

module.exports = router;
