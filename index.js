const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const movieRoute = require('./routes/movies')
dotenv.config();
const PORT = 5000

mongoose.connect(process.env.MONGO_URL).
        then(console.log("connected to mongo db successfully")).
        catch(error => console.log(error))

const app = express()


// middlewares
app.use(express.json())
app.use('/api/route', movieRoute)


app.listen(PORT, () =>{
    console.log(`server running on port ${PORT}`)
})
