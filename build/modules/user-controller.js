import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { pool } from './db.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export class userController {
    async getUsers(req, res) {
        const q = await pool.query('SELECT * FROM users');
        console.log(q.rows);
        res.render('index.ejs', { lox: 'lox1' });
    }
}
//# sourceMappingURL=user-controller.js.map