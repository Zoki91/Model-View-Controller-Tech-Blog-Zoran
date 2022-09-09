// Import the Modules
const { Post } = require('../models');

// Preparing Data
const postData = [
    {
        title: "Tim Cook would rather have you buy an iPhone",
        text: "Tim Cook is not a fan of Rich Communication Services (RCS). The Apple CEO made this clear at the Code 2022 conference, when an audience member asked Apple to adopt RCS so his mother could better see the videos he sends, Cook told him, “Buy your mom an iPhone.”",
        user_id: 3
    },
    {
        title: "Nigerian blockchain payments startup Bitmama closes $2M pre-seed",
        text: "Africa is the world's third fastest-growing crypto market, with crypto adoption increasing by more than 1,200% over the last two years. Countries such as Nigeria, Kenya and South Africa are majorly responsible for skyrocketing adoption rates as citizens try to hedge against currency devaluation and build wealth",
        user_id: 1
    },
    {
        title: "Crypto's biggest powerhouse flexes on its competition",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada luctus sem, at commodo leo",
        user_id: 2

    },
    {
        title: "Microsoft is testing its tablet-friendly taskbar again in Windows 11",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada luctus sem, at commodo leo",
        user_id: 5
    },
    {
        title: "Here's how the new Apple Watches compare to each other on paper",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada luctus sem, at commodo leo",
        user_id: 4
    }
]

const postSeed = () => {
  return Post.bulkCreate(postData)
}

// Exports the Module
module.exports = postSeed;