const express = require('express');
const cors = require('cors');
const app = express();
const { PORT } = require('./config/environment');

// Connection
require('./config/mongo');

// Settings
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE');
    res.header('Allow', 'GET,POST,OPTIONS,PUT,DELETE');
    next();
});

// Routes
app.use('/api', require('./routes/api'));

app.listen(PORT, () => console.log(`Server on port ${PORT}`));