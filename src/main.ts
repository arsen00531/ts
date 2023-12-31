import express, {Express} from 'express'
import ejs from 'ejs'
import { router } from './modules/user-router.js'
import { ProcessEnv } from './types/processEnv.js'
import bodyParser from 'body-parser'

const app: Express = express()
const PORT: ProcessEnv = process.env.PORT || 3000

app.engine('html', ejs.renderFile);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router)

app.listen(PORT, () => console.log(`Listen on PORT ${PORT}`))