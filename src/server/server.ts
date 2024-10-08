import express from 'express'
import 'dotenv/config'
import './shared/services/translateYup'
import { router } from './router'

const server = express()
server.use(express.json())
server.use(router)

export { server }
