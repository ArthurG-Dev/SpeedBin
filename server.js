const express = require('express');
const { connect } = require('mongoose');

const app = express();

connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    err ? console.error(err.stack) : console.info('Conectado ao MongoDB');
});

app.use(express.json());
app.use(express.static('src/public'));
app.set('view engine', 'ejs');

app.use(require('./src/routes'));

app.listen(process.env.PORT, _ => console.info(`Ouvindo a porta: ${process.env.PORT}`));