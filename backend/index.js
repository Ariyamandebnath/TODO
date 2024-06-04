const express = require("express");
const { createTodo } = require("./types");
const { updateTodo } = require("./types");

const { todo } = require("./db");



const app = express();
port = 8080

app.use(express.json());

app.post('/todo', async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    //put it in mongo db

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,

    })

    res.json({
        msg: " todo created "
    })
})

app.get('/todos', async (req, res) => {


    const todo = await todo.find({});

    res.json({
        todo
    })
    
})

app.put(("/completed", async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inpurts"
        })
        return;
    }

    await todo.update({
        _id: req.body.id,
    }, {
        completed: true
    })

    res.json({
        msg: "TODO marked as complete"
    })
    
}))


app.listen(port, (req, res) => {
    console.log(`app is running on port ${port}`);
})