const express = require('express')
const router = express.Router()

// @desc    landing page
// @route   GET /
router.get('/', (req, res) => {
    res.render('login', { layout: 'login' })
})

// @desc    dashboard
// @route   GET /dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

router.get('/')
module.exports = router