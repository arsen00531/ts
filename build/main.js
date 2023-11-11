import express from 'express';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import ejs from 'ejs';
const app = express();
const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render(path.join(__dirname, 'index.ejs'), { lox: 'lox' });
});
app.listen(PORT);
//# sourceMappingURL=main.js.map