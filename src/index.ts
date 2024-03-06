import 'dotenv/config';
import express from 'express';
import {router} from './route/router';
import path from 'path';
const app = express();

app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname.replace('src', 'statics')));

const PORT = process.env.PORT || 3003;
app.use(router);
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
})