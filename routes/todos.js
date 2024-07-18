const express = require("express");

const router = express.Router();

const { createTodo } = require("../controllers/createToDo");
const { getTodo, getTodoById } = require("../controllers/getToDo");
const { updateToDo } = require("../controllers/updateTodo");
const { deleteToDo } = require("../controllers/deleteToDo");

router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);
router.get("/getTodo/:id", getTodoById);
router.put("/updateToDo/:id", updateToDo);
router.delete("/deleteToDo/:id", deleteToDo);

module.exports = router;
