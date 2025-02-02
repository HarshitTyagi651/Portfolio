import ecom from './ecom.png';
import fitness from './fitness.png';
import buildui from './huildui.png';
import talktome from './talktome.png';

let projects = [
    {
        id: 1,
        title: "E-Shop",
        techUsed: "React",
        desc: "E-Shop is platform where users can explore products and buy them online. It is a fully responsive frontend of an e-commerce website. Backend is not developed yet but will be integrated soon.",
        image: ecom,
        techStack: ['HTML','CSS','React'],
        netlifyLink: 'https://candid-begonia-970315.netlify.app/',
        githubLink: 'https://github.com/HarshitTyagi651/E-Shop',
    },
    {
        id: 2,
        title: "Tyagi Fitness Club",
        techUsed: "React",
        desc: "Tyagi Fitness Club is website that provides a detailed guide related to physical health. Multiple categories of wotkout tutorials are available. Users can also check their physical health such as BMI, etc.",
        image: fitness,
        techStack: ['HTML','CSS','React'],
        netlifyLink: 'https://majestic-babka-9af4f5.netlify.app/',
        githubLink: 'https://github.com/HarshitTyagi651/TyagiFitnessClub',
    },
    {
        id: 3,
        title: "Build UI",
        techUsed: "React",
        desc: "Build UI provides a platform that helps new developers to learn development from professional developers, users can also dvevelop components and designs and can upload on the website. In progress!",
        image: buildui,
        techStack: ['HTML','CSS','React'],
        githubLink: 'https://github.com/HarshitTyagi651/Build-UI',
        netlifyLink: '',
    },
    {
        id: 4,
        title: "Talk To Me",
        techUsed: "React | Node (socket.io)",
        desc: "A group chat web application where multiple users can login and talk to the strangers and other person. It is developed by using react.js for frontend and node.js for backend. It uses the concept of socket.io provided by websocket",
        image: talktome,
        techStack: ['HTML','CSS','react.js','express.js','node.js','cors'],
        githubLink: 'https://github.com/HarshitTyagi651/TalkToMe',
        netlifyLink: '',
    },
    {
        id: 5,
        title: "Make Notes",
        techUsed: "React",
        desc: "Make Notes is website that provides a platform to its users to make notes and save them. Users can create notes and delete them. In future some extra futures will be added like imporatant notes, share notes, etc",
        image: '',
        techStack: ['HTML','CSS','react.js'],
        githubLink: '',
        netlifyLink: 'https://makenotes-here.netlify.app/',
    },


]

export default projects ;