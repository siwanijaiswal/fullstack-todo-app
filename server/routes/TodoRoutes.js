//You define routes and route handlers to specify how your server should respond to 
//different URLs.

const { Router } = require("express");
const { getToDo, saveToDo, updateToDo, deleteToDo, searchInTodo } = require("../controllers/ToDocontrollers");

const router = Router()
// router.get('/',(req,res) => {
//    res.json({message: "Hi there..."})
// })

router.get('/', getToDo)
router.post('/save', saveToDo)
router.put('/update', updateToDo)
router.delete('/delete', deleteToDo)
router.get('/search', searchInTodo)

module.exports = router;
