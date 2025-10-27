import app from './app.js'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './db/connectDB.js'


connectDB()
.then(() => {
    app.listen(process.env.PORT, async () => {
        console.log(`App listening on http://localhost:${process.env.PORT}`)
    })    
})
.catch((error) => {
    console.log(error)
})