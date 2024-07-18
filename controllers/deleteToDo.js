const toDo = require("../models/todo");


exports.deleteToDo = async (req, res) => {
    try {
        const { id } = req.params;
        await toDo.findByIdAndDelete(id)
        res.json({
            success: true,
            message: "Sexful"
        })
    } catch (e) {
        console.error(e);
        res.status(500).json({
            success: false,
            error: e.message,
            message: "Chud Gye Guru"
        });
    }
};
