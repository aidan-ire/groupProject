const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.static('views'));
app.use(express.static('style'));
app.use(express.static('images'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/product', (req, res) => {
    res.render('product');
});

app.get('/sort', (req, res) => {
    res.render('sort');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

