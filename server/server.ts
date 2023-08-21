const express = require('express')
const taskRouter = require('./routes/task.routes')
const PORT = process.env.PORT || 8080
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors({ origin: process.env.ORIGIN, optionsSuccessStatus: 200 }))
app.use('/api', taskRouter)

app.listen(PORT, () => console.log(`server started on port ${PORT}`))
