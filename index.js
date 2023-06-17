const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

const db = require('./config/connection');

const routes = require('./routes');

// Path: server.js

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
}
);

// Path: config/connection.js

