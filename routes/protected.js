const express = require('express')
const router = express.Router()

function authorizeMiddleware(req, res, next) {
    if (!req.session.currentUser) res.send('You should not be here')
    else next()
}

router.use(authorizeMiddleware)

router.get('/main', (req, res, next) => {
    res.render("/main")
})

router.get('/private', (req, res, next) => {
    res.render("private")
})

module.exports = router
