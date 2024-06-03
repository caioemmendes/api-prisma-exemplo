import express  from "express"
import dotenv from 'dotenv'
import mainRoutes from './routes/main.js'
import cors from 'cors'
import userRoutes from './routes/userRoutes.js'

dotenv.config()

const server = express()
server.use(express.json())
server.use(cors())

server.use(mainRoutes)
server.use(userRoutes)

server.listen(process.env.PORT)