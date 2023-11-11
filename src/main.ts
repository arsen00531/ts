import express, {Express, Request, Response} from 'express'
import ejs from 'ejs'
import {router} from './modules/user-router.js'

const app: Express = express()
const PORT: number = 3000

app.engine('html', ejs.renderFile);
app.use(router)

app.listen(PORT)