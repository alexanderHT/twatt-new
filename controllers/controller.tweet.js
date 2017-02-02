var Twitter = require('twitter')

var client = new Twitter({
  consumer_key: process.env.CUSTOMER_KEY,
  consumer_secret: process.env.CUSTOMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
})

var tweet = {
  postTweet: function (req, res, next) {
    console.log('masuk')
    client.post('statuses/update', {status: req.params.posting}, function (error, tweet, response) {
      if (error) throw error
      console.log(tweet); // Tweet body.
      console.log(response); // Raw response object.
      res.json(tweet)
    })
  }
}

module.exports = tweet
