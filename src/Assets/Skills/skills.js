import css from './css.png'
import html from './html.png'
import js from './js.png'
import mongo from './mongodb.png'
import mysql from './mysql.png'
import node from './node.png'
import react from './react.png'

let skills = [
    {
        id: 1,
        title: "React.js",
        perc: "90%",
        image: react,
        bg: {
            background: ``,
            height: `100px`,
        }
    },
    {
        id: 2,
        title: "Html",
        perc: "95%",
        image: html,
        bg: {
            background: `linear-gradient(45deg, rgb(238, 48, 159), rgb(255, 131, 238))`,
            height: `100%`,
        }
        
    },
    {
        id: 3,
        title: "CSS",
        perc: "80%",
        image: css,
        color1: '',
        color2: '',
        bg: {
            background: `linear-gradient(45deg, rgb(219, 216, 216), rgb(60, 60, 60))`,
            height: `60%`,
        }
    },
    {
        id: 4,
        title: "JavaScript",
        perc: "82%",
        image: js,
        color1: '',
        color2: '',
        bg: {
            background: `linear-gradient(45deg, rgb(219, 216, 216), rgb(60, 60, 60))`,
            height: `40%`,
        }
    },
    {
        id: 5,
        title: "Node.js",
        perc: "60%",
        image: node,
        color1: '',
        color2: '',
        bg: {
            background: `linear-gradient(45deg, rgb(238, 48, 159), rgb(255, 131, 238))`,
            height: `100%`,
        }
    },
    {
        id: 6,
        title: "MongoDb",
        perc: "30%",
        image: mongo,
        color1: '',
        color2: '',
        bg: {
            background: `linear-gradient(45deg, rgb(219, 216, 216), rgb(60, 60, 60))`,
            height: `100%`,
        }
    },
    {
        id: 7,
        title: "MySql",
        perc: "83%",
        image: mysql,
        color1: '',
        color2: '',
        bg: {
            background: `linear-gradient(45deg, rgb(238, 48, 159), rgb(255, 131, 238))`,
            height: `100%`,
        }
    },

]

export default skills ;