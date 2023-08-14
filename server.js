const express = require('express');
const app = express();
const port = process.env.PORT || 3031;
const bodyParser = require('body-parser');
const connectDb = require('./config/db.config')
require('dotenv').config()
connectDb();
app.use(bodyParser.json());

const userRoutes = require('./routes/route')
app.use('/api/user', userRoutes);

app.listen(port, () => {
    console.log(`Listening on: http://localhost:${port}`);
})