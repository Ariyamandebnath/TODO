const mongoose = require(" mongoose");

mongoose.connect(process.env.MonogoDB_Url);

const todoSchema = mongoose.Schema({
    title: string,
    description: string,
    completed: Boolean,
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}