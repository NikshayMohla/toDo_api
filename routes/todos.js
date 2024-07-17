const express = require("express");

const router = express.Router();

const { createTodo } = require("../controllers/createToDo");
const { getTodo } = require("../controllers/getToDo");

router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo)


module.exports = router;
