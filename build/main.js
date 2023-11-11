import express from 'express';
import ejs from 'ejs';
import { router } from './modules/user-router.js';
const app = express();
const PORT = process.env.PORT || 3000;
app.engine('html', ejs.renderFile);
app.use(router);
app.listen(PORT, () => console.log(`Listen on PORT ${PORT}`));
//# sourceMappingURL=main.js.map