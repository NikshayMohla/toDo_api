// Import the model
const toDo = require("../models/todo");

// Define route handler
exports.createTodo = async (req, res) => {
    try {
        const { title, desc } = req.body;

        const response = await toDo.create({ title, desc });

        res.status(200).json({
            success: true,
            data: response,
            message: 'Entry Created Successfully'
        });
    } catch (e) {
        console.error(e);
        res.status(500).json({
            success: false,
            data: "internal server error",
            message: e.message
        });
    }
};
