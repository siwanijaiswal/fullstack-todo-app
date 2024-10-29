// how data is saved to our database is done by controllers
const todoSchema = require('../models/ToDoModels')

console.log(todoSchema)

module.exports.getToDo = async (req, res) => {
    const toDo = await todoSchema.find();
    res.send(toDo)
}

module.exports.searchInTodo = async (req, res) => {
    const q = req.query.q;
    const data = await todoSchema.find({ text: { $regex: q, $options: 'i' } });
    res.send(data)
}

module.exports.saveToDo = async (req, res) => {
    const { text } = req.body
    todoSchema
        .create({ text })
        .then((data) => {
            console.log("Added successfully...");
            console.log(data);
            res.send(data)
        })
}

module.exports.updateToDo = async (req, res) => {
    const { _id, text } = req.body
    todoSchema
        .findByIdAndUpdate(_id, { text })
        .then(() => res.set(201).send("Updated Successfully...."))
        .catch((err) => console.log(err))
}

module.exports.deleteToDo = async (req, res) => {
    const _id = req.query._id;
    console.log(_id)
    todoSchema
        .findByIdAndDelete(_id)
        .then(() => res.set(201).send("Deleted Successfully...."))
        .catch((err) => console.log(err))
}