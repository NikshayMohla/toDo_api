
const toDo = require("../models/todo");


exports.getTodo = async (req, res) => {
    try {
        const todos = await toDo.find({})

        res.status(200).json(
            {
                success: true,
                data: todos,
                message: "DATA MIL GAYA"
            }
        )
    } catch (e) {
        console.error(e);
        res.status(500).json({
            success: false,
            error: e.message,
            message: "Chud Gye Guru"
        })
    }
};

exports.getTodoById = async (req, res) => {
    try {
        const id = req.params.id
        const todo = await toDo.findById({ _id: id })
        if (!todo) {
            return res.status(400).json({
                success: false,
                message: "Ni mila data"
            })
        }
        res.status(200).json(
            {
                success: true,
                data: todo,
                message: `todo ${id}DATA MIL GAYA`
            }
        )
    } catch (e) {
        console.error(e);
        res.status(500).json({
            success: false,
            error: e.message,
            message: "Chud Gye Guru"
        })
    }
}