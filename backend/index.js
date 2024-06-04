const express = require("express");
const { createTodo } = require("./types");
const { updateTodo } = require("./types");


const app = express();
port = 8080

app.use(express.json());

app.post('/todo', (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    //put it in mongo db
})

app.get('/todos', (req, res) => {

    
})

app.put(("/completed", (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inpurts".
        })
        return;
    }
    
}))


app.listen(port, (req, res) => {
    console.log(`app is running on port ${port}`);
})