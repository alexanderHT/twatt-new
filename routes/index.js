var express = require('express')
var router = express.Router()
const tweet = require('../controllers/controller.tweet')

/* GET home page. */
router.get('/tweet/post/:posting', tweet.postTweet)

module.exports = router
