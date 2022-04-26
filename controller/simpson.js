const express = require('express')
const router = express.Router();
const methodOverride = require('method-override');
// const axios = require('axios')


const Simpson = require('../model/simpson-model')
router.use(express.json());
router.use(express.urlencoded({extended: true}))
router.use(express.static('public'))
router.use(methodOverride('_method'))


// HOME PAGE
router.get('/home', (req, res) => {
    res.render('home')
})



// READ
router.get('/', (req, res) => {
    // axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
    // .then(Sdata => console.log(Sdata.data))
    Simpson.find({}) 
    .then(data => res.render('index', { stuff: data }) )
    .catch(console.error)
})


router.get('/edit/:id', (req, res) => {
    const id = req.params.id
    Simpson.findById(id)
    .then(data => res.render('edit', {value: data}))
    .catch(console.error)
})

// READ BY FAV
router.get('/fav', (req, res) => {
    Simpson.find({favorite: true})
    .then(data => res.render("favorites",{ fav: data } ))
    .catch(console.error)
})
// RENDER ADD PAGE 
router.get('/create', (req, res) => {
    res.render('new');
})


// READ BY ID
router.get('/:id', (req, res) => {
    const id = req.params.id
    Simpson.findById(id)
    .then(data => res.render('show', { view: data }))
    .catch(console.error)
})

// CREATE
router.post('/add', (req, res) => {
    Simpson.create(req.body)
    .then(() => res.redirect('/simpsons'))
    .catch(console.error)
    })



// UPDATE
router.put('/:id', (req, res) => {
    const id = req.params.id
    Simpson.findOneAndUpdate(
        {_id: id},
        req.body,
         {new: true})
    .then((data) => res.redirect('/simpsons'))
    .catch(console.error)
})

router.put('/:id/:favValue', (req, res) => {
    const id = req.params.id
    const fav = req.params.favValue === "true"? true : false

    console.log(req.params.favValue)
    console.log(!req.params.favValue)
    Simpson.findOneAndUpdate(
        {_id: id},
        {
            favorite: !fav
        },
         {new: true})
    .then((data) => res.redirect('/simpsons'))
    .catch(console.error)
})


// DELETE
router.delete('/:id', (req, res) => {
    const id = req.params.id
    Simpson.findOneAndDelete({_id: id})
    .then(data => {
        Simpson.find({})
        .then(data => res.redirect('/simpsons'))
        .catch(console.error)
    })
})

module.exports = router;