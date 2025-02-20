
const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

// we will build out our router logic here

module.exports = router;









router.get('/' , async (req,res) => {
    try {
        res.render('applications/index.ejs');
    } catch (error) {
        console.log(error);
        res.redirect('/')
    }
})

// adding new route and a create function

router.get('/new', async (req,res) => {
    res.render('applications/new.ejs');
});
router.put('/new', async (req,res) => {})

