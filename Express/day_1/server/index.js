
const express         = require('express');
const register_routes = require('./register_routes');

const app = express();

// Config
const PORT = process.env.PORT || 3000;

// Bunch of middlewares
// next tutorial...

// Set up routes
const router = express.Router();
register_routes(router);

app.use(router);
app.get('/', (req, res) => res.send('<h1>Welcome!</h1>'));
app.get('*', (req, res) => res.status(404).end());

app.listen(PORT, () => console.log(`Example app listening on port: ${PORT}!`));
