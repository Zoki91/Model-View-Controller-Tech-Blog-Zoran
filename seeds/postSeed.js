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
        text: "CoinDesk on Friday unveiled a new index of digital-asset prices, saying it hopes the broad gauge of crypto markets could become an industry benchmark similar to the stock market's Dow Jones Industrial Average or Standard & Poor's 500",
        user_id: 2

    },
    {
        title: "Microsoft is testing its tablet-friendly taskbar again in Windows 11",
        text: "Microsoft is reintroducing its tablet-friendly taskbar in the latest preview of Windows 11. The taskbar was first introduced in February alongside other new features included for eventual rollout in Windows 11, but it was later pulled for more internal development",
        user_id: 5
    },
    {
        title: "Here's how the new Apple Watches compare to each other on paper",
        text: "At the bottom of the new lineup, the new Apple Watch SE continues the 2020 SE's formula. It's the “bargain” model, sacrificing niceties like an always-on display for the sake of a much lower price",
        user_id: 4
    }
]

const postSeed = () => {
  return Post.bulkCreate(postData)
}

// Exports the Module
module.exports = postSeed;