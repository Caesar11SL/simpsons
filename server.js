const express = require('express');
const app = express();
const methodOverride = require('method-override');
const simpsonsController = require('./controller/simpson')


app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.use('/simpsons', simpsonsController)
const port = process.env.PORT || 3005;

app.listen(port, () => {
    console.log(`Express is listening on port: ${port} `)
})web: npm start
