const express    = require('express');
const basicAuth  = require('express-basic-auth');
const path       = require('path');

const app  = express();
const PORT = process.env.PORT || 3000;

const USERNAME = process.env.SITE_USER || 'admin';
const PASSWORD = process.env.SITE_PASS || 'changeme';

app.use(basicAuth({
  users: { [USERNAME]: PASSWORD },
  challenge: true,
  realm: 'Extreme Dashboard',
}));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
