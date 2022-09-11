const router = require("express").Router();
const { Post, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// Home Work - Mini Project 28 & Term 2 Project 

// get all users
router.get('/', (req, res) => {
  Post.findAll({
      attributes: ["id", "title", "text", "created_at"],
    order: [["created_at", "DESC"]],
    include: [
      {
        model: Comment,
        attributes: ["id", "text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"]
      },
    ]
  })
    .then(postData => res.json(postData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// Find Post By ID
router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'text', 'created_at'],
      include: [
      {
        model: User,
        attributes: ["username"]
      },
      {
        model: Comment,
        attributes: ['id', 'text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ["username"]
        },
      },
    ],
  })
    .then(postData => {
      if (!postData) {
        res.status(404).json({ message: 'No post found with this ID' });
        return;
      }
      res.json(postData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.post('/', withAuth, (req, res) => {
  Post.create({
    title: req.body.title,
    text: req.body.text,
    user_id: req.session.user_id
  })
    .then(postData => res.json(postData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", withAuth, (req, res) => {
  Post.update(
    {
      title: req.body.title,
      text: req.body.text,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
  .then(postData => {
    if (!postData) {
      res.status(404).json({ message: 'No post found with this ID' });
      return;
    }
    res.json(postData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', withAuth, 
(req, res) => {
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(postData => {
      if (!postData) {
        res.status(404).json({ message: 'No post found with this ID' });
        return;
      }
      res.json(postData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;