import emoji from 'react-easy-emoji';

export const greetings = {
  name: 'Gautam Singh Chauhan',
  title: "Hi all, I'm Gautam",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    'https://drive.google.com/file/d/1cQRpmySMcHWrYfU1eWdps-FRNPdjb6qm/view?usp=sharing  ',
};

export const openSource = {
  githubUserName: 'gautam120701',
};

export const contact = {};

export const socialLinks = {
  url: '',
  linkedin: 'https://www.linkedin.com/in/gsc120701',
  github: 'https://github.com/gautam120701/',
  instagram: 'https://www.instagram.com/___.freak_bad.__/',
  facebook: 'https://www.facebook.com/profile.php?id=100008384263542',
  twitter: 'https://twitter.com/Gautam_120701',
};

export const skillsSection = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using WordPress'),
        emoji('⚡  Creating application backend in Express & Node'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassname: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassname: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassname: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassname: 'logos:npm-icon',
        },
        
        {
          skillName: 'WordPress',
          fontAwesomeClassname: 'fa-wordpress',
        },
      ],
    }, 

    {
      title: "UI/UX Designer",
      lottieAnimationFile: "/lottie/coding.json",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },

  ],
};

export const SkillBars = [
  {
    Stack: 'Design', //Insert stack or technology you have experience in
    progressPercentage: '80', //Insert relative proficiency in percentage
  },
  {
    Stack: 'FrontEnd',
    progressPercentage: '90',
  },
  {
    Stack: 'Backend',
    progressPercentage: '60',
  },
];

export const educationInfo = [
  {
    schoolName: 'Sagar Institute of Research and Technology',
    subHeader: 'BTech CSE',
    duration: 'September 2020 - july 2024',
    grade: 'Grade A',
  },
];

export const experience = [
  {
    role: 'Frontend Developer',
    company: 'The Hyphn, Bhopal',
    companylogo: '/img/icons/common/Screenshot_20230304-224622-354.png',
    date: 'Jan 2023 – Feb 2023',
    desc: 'Developed and maintained responsive websites using HTML, CSS, and JavaScript. Worked with a team of developers to build and launch a new e-commerce platform. Assisted with front-end design and UI/UX development for multiple client projects.',
  },
 
  {
    role: 'Founder',
    company: 'The-Tech-Roof',
    companylogo: '/img/icons/common/The Tech Roof 20230113_192321.jpg',
    date: 'Jan 2023 - Present',
    desc: 'The Tech Roof is a bootstraped startup in which we provide all kind of web and app services (ui/ux designing, ui/ux development, web hosting, android application development)',
  },

];

export const projects = [
  {
    name: 'Eh-maaya | e-commerce website',
    desc: 'Eh-maaya is an e-commerce website for hair care rituals of Dr. Shweta, a Trichologist in Mumbai. In this website user can easily buy the hair care products.',
    link: 'https://eh-maaya.com',
  },
  {
    name: 'Fitness Hub | Website for tracking & maintaining our health',
    desc: 'Through this project we won the 5th prize in a National Level Hackathon. It is a very unique platform because by using this, user don’t  have to use any other application or website, we integrated all the possible things for tracking & maintaining health & fitness.',
    link:'https://hackathonpw.onrender.com/',
  },
  {
    name: 'Akay Pro Services | service based web application',
    desc: 'Right now this project is under development, it is a fully functional service based web application in which user can book the services like AC repairing, Home appliance servicing, Car washing and what not.',
    github: 'https://github.com/gautam120701/Akay-pro-services',
  },
  {
    name: 'To-Do List',
    desc: 'A To-do list is a application that allows users to manage their daily tasks and keep track of their progress.Functionalities: Add,Edit, Delete, Add  description to the tasks',
    github: 'https://github.com/gautam120701/To-do-List',
  },
];

export const feedbacks = [
 
];

// option to hide or show the ContactUs component
export const showContactUs = false;

// See object prototype on SEO.jsx page
export const seoData = {
  title: 'Gautam Singh Chauhan',
  description:
    'A passionate Full Stack Web Developer',
  author: 'Gautam',
  image: '',
  url: '',
  keywords: [

  ],
};
