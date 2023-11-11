import express, {Express} from 'express'
import ejs from 'ejs'
import {router} from './modules/user-router.js'
import { ProcessEnv } from './types/processEnv.js'

const app: Express = express()
const PORT: ProcessEnv = process.env.PORT || 3000

app.engine('html', ejs.renderFile);
app.use(router)

app.listen(PORT, () => console.log(`Listen on PORT ${PORT}`))