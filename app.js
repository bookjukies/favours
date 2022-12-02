const express = require(`express`);
const app = express();
const port = 3002;

app.listen(port, () => console.log(`server is running on port ${port}`));

app.get(`/get-started`, (req, res) => {
  res.json({ role: ['buyer', 'seller'] });
});
