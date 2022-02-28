const express = require('express');
const port = 3000;
const app = express();
const path = require('path');

app.all('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'src/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
