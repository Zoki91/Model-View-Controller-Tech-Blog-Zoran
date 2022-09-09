const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim."
    },
    {
        user_id: 4,
        post_id: 4,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas enim justo."
    },
    {
        user_id: 1,
        post_id: 4,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at tempus magna."
    },
    {
        user_id: 3,
        post_id: 5,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit vehicula justo, vel"
    },
    {
        user_id: 3,
        post_id: 2,
        text: "Lorem ipsum dolor sit amet!"
    },
    {
        user_id: 3,
        post_id: 4,
        text: "Lorem ipsum dolor sit amet, consectetur."
    },
    {
        user_id: 5,
        post_id: 3,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing"
    },
    {
        user_id: 2,
        post_id: 1,
        text: "Nice!"
    }
]

const commentSeed = () => {
  Comment.bulkCreate(commentData);
}

module.exports = commentSeed;