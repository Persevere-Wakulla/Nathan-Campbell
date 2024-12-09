import express from "express";
import mongoose from "mongoose";
import cors from 'cors'

const DB = 'mongodb://127.0.0.1/s-mart'
const PORT = 3000
const app = express()

app.use(express.json())
app.use(cors())

app.post('/', async (req, res) => {
    const user = User.find({
        username: req.body.username,
        password: req.body.password
    })
    
})

mongoose.connect(DB).then(() => {
    console.log(`Connected to ${DB}`);
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}! http://localhost:${PORT}`);
    })
})