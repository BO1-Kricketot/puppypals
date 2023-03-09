require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes');
require('./db');

const { HOSTNAME } = process.env;

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json({limit: "32mb"}));

app.use('/api', router);

app.listen(3000);
// eslint-disable-next-line
console.log(`Server listening at ${HOSTNAME}:3000`);
