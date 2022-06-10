import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { route } from './routes'


// criando o app
export const app = express()

// middlewares
app.use(express())
app.use(cors())
app.use(morgan('dev'))

//implementando endpoint

app.use('/', route)