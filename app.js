const express = require('express');
const path = require('path');
const app = express();

// تحديد المسار إلى node_modules للوصول إلى Bootstrap وملفات أخرى
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});