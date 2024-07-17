const toDo = require("../models/todo");

exports.updateToDo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, desc } = req.body;
        const updatedTodo = await toDo.findByIdAndUpdate(
            id,
            { title, desc },
            { new: true, runValidators: true }
        );

        if (!updatedTodo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found"
            });
        }

        res.status(200).json({
            success: true,
            data: updatedTodo,
            message: "Todo updated successfully"
        });
    } catch (e) {
        console.error(e);
        res.status(500).json({
            success: false,
            error: e.message,
            message: "Chud Gye Guru"
        });
    }
};
