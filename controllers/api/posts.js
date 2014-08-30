var Post = require('../../models/post');
var router = require('express').Router();

// handles HTTP GET requests to /api/posts
router.get('/api/posts', function(req, res, next) {
  Post.find().sort('-date').exec(function(err, posts) {
    if(err) { return next(err); }
    res.json(posts);
  });
});

// handles HTTP POST requests to /api/posts
router.post('/api/posts', function(req, res, next) {
  var post = new Post({
    username: req.body.username,
    body: req.body.body
  });
  post.save(function(err, post) {
    if(err) { return next(err); }
    res.status(201).json(post);
  });
});

module.exports = router;
