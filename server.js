const express = require('express');
const app = express();
const methodOverride = require('method-override');
const simpsonsController = require('./controller/simpson')

const PORT = process.env.PORT || 3005;

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.use('/simpsons', simpsonsController)

app.get("/home", (req, res) => {
    res.send("hello world")
    
})
app.listen(PORT, () => {
    console.log(`Express is listening on port: ${PORT} `)
})
