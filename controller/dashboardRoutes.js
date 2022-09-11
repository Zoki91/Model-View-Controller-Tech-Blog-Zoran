const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");
const sequelize = require("../config/connection");

// Home Work - Mini Project 28 & Term 2 Project 

router.get('/', 
 (req, res) => {
    Post.findAll({
      where: {
        user_id: req.session.user_id
      },
      attributes: ['id', 'title', 'created_at', 'text'],
      include: [
        {
          model: Comment,
          attributes: ['id', 'text', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ["username"]
          }
        },
        {
          model: User,
          attributes: ["username"]
        }
      ]
    })
      .then(postData => {
        const posts = postData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


  router.get('/edit/:id', withAuth, (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id', 'title', 'created_at', 'text'],
      include: [
        {
          model: Comment,
          attributes: ['id', 'text', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ["username"]
          }
        },
        {
          model: User,
          attributes: ["username"]
        }
      ]
    })
      .then(postData => {
        if (!postData) {
          res.status(404).json({ message: 'No post found with this ID' });
          return;
        }
          const post = postData.get({ plain: true });
        res.render('edit-post', { post, loggedIn: true});
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// Creating a Post
router.get('/create/', withAuth, (req, res) => {
    Post.findAll({
      where: {
        user_id: req.session.user_id
      },
      attributes: ['id', 'text', 'user_id', 'created_at'],
      include: [
        {
          model: Comment,
          attributes: ['id', 'text', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ["username"]
          }
        },
        {
          model: User,
          attributes: ["username"]
        }
      ]
    })
      .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('create-post', { posts, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


module.exports = router;