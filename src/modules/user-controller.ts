import { Request, Response } from 'express';
import { QueryResult } from 'pg';
import { fileURLToPath } from 'url';
import path, {dirname} from 'path'
import {pool} from './db.js'

const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = dirname(__filename);

export class userController {
    async getUsers(req: Request, res: Response) {
        const q: QueryResult = await pool.query('SELECT * FROM users')
        console.log(q)
    
        res.render('index.ejs', {lox: 'lox1'})
    }

    async logup(req: Request, res: Response) {
        console.log(req.body)

        // const user: QueryResult = await pool.query('INSERT INTO (name, password, time) VALUES ($1, $2, $3)', [name, password, '11:25'])
        // console.log(user)
    }

    async login(req: Request, res: Response) {
        const q: QueryResult = await pool.query('SELECT * FROM users')
    
        console.log(q.rows)
        res.render('index.ejs', {lox: 'lox1'})
    }
}