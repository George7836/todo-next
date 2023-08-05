const express = require('express')
const todoRouter = require('./routes/todo.routes')
const PORT = process.env.PORT || 8080
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api', todoRouter)

app.listen(PORT, () => console.log(`server started on port ${PORT}`))