import axios from 'axios'
const baseUrl = "https://fullstack-todo-app-backend-2qc9.onrender.com"

const getAllTodo = (setToDo) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            console.log('data --->', data);
            setToDo(data)
        })
        .catch((err) => console.log(err))
    //     .catch((error) => {
    //         console.error('An error occurred:', error);
    // })
}
const searchInTodo = (query, setToDo) => {
    axios
        .get(baseUrl + '/search?q=' + query)
        .then(({ data }) => {
            console.log('data --->', data);
            setToDo(data)
        })
        .catch((err) => console.log(err))
    //     .catch((error) => {
    //         console.error('An error occurred:', error);
    // })
}

const addToDo = (text, setText, setToDo) => {
    axios
        .post(`${baseUrl}/save`, { text })
        .then((data) => {
            console.log(data);
            setText("")
            getAllTodo(setToDo)
        })
        .catch((err) => console.log(err))
}

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
    axios
        .put(`${baseUrl}/update`, { _id: toDoId, text })
        .then((data) => {
            setText("")
            setIsUpdating(false)
            getAllTodo(setToDo)
        })
        .catch((err) => console.log(err))
}
const deleteToDo = (_id, setToDo) => {
    axios
        .delete(`${baseUrl}/delete?_id=${_id}`)
        .then((data) => {
            console.log(data)
            getAllTodo(setToDo)
        })
        .catch((err) => console.log(err))
}

export { getAllTodo, searchInTodo, addToDo, updateToDo, deleteToDo }
