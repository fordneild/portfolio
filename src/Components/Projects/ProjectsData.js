 const projectsData = [
    {
        show: 1,
        title: "Way2B1 Website and CMS",
        year: "2019",
        role: "Full-Stack Developer",
        company: "Way2B1",
        technologies: ["React","Firebase","Sass","Figma"],
        image: "https://images.unsplash.com/photo-1510605395823-530474d7490f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80",
        dark: false,
        gradient: "linear-gradient(-45deg, rgba(142,152,161,1) 0%, rgba(30,48,67,1) 100%)",
        category: "Web Development",
        liveLink: "https://www.way2b1.com/",
        description: {
            Background: "Way2B1 makes software to simplify wealth management and streamline approval for investments. They currently offer a suite of user-friendly products to help do this. Their website, however, was not up to their standards.",
            What_I_Did: {
                bullet1: "I built a clear and sleek React-based website to serve the first point of contact with potential clients.",
                bullet2: "I designed and developed a content management system with Firebase to allow higher-ups to easily change the site’s images and copy without needing to touch the codebase.",
                bullet3: "There were 5 views in total each with custom-made responsive components such as carousels, accordions, and modals.",
                bullet4: "I created two React forms with unobtrusive user validation.",
                bullet5: "I integrated the careers page with the Google Hire API to allow for dynamic job posting and applications."
            }
        }
    },
    {
        show: 1,
        title: "Forager One Website",
        year: "2019",
        role: "Front-End Developer",
        company: "ForagerOne",
        technologies: ["AngularJS", "Bootstrap","Node.js","Express",],
        image: require("../../assets/projectPhotos/ForagerOneHome.jpg"),
        //image: "https://fordneild.github.io/assets/fg1_favicon.png",
        //imageTop: "-20px",
        dark: true,
        gradient: "linear-gradient(135deg, rgba(54,191,255,1) 33%, rgba(246,225,105,1) 65%, rgba(255,255,255,1) 90%)",
        category: "Web Development",
        liveLink: "https://foragerone.com/",
        description: {
            Background: "I worked part-time at a start-up on campus named ForagerOne for 5 months. ForgerOne helps undergraduate students find and apply to research positions. Near the conclusion of my time there, they received a contract from Johns Hopkins University. I left to focus on my studies and learn React in preparation for my summer internship at Way2B1.",
            What_I_Did: {
                bullet1: "I implemented Angular and Bootstrap to maintain and update the site.",
                bullet2: "I built a new sign up process to help distinguish between faculty, university admin, and student accounts.",
                bullet3: "I helped redesign the front page interface to direct traffic towards the search page",
                bullet4: "I Refactored and organized CSS code into the Block Element Modifier methodology."
            }
        }

    },
    {
        show: 0,
        title: "Financial trading CMS",
        year: "2019",
        role: "Data Architect and Developer",
        company: "WebDev Mumbai",
        technologies: ["T-SQL", "ASP.Net","C#"],
        image: "https://images.unsplash.com/photo-1552133457-ce1d2d33cdfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80",
        imageTop: "-268px",
        dark: false,
        gradient: "linear-gradient(225deg, rgba(82,96,98,1) 26%, rgba(155,136,129,1) 70%, rgba(188,139,101,1) 89%)",
        category: "Web Development"

    },
    {
        show: 0,
        title: "Assembler and Disassembler",
        year: "2019",
        role: "Student",
        company: "Johns Hopkins University",
        technologies: ["C","MIPS"],
        image: "https://www.discovercoding.ca/wp-content/uploads/2018/01/mips_assembly.jpg",
        imageLeft: "-25px",
        dark: false,
        gradient: "linear-gradient(122deg, rgba(191,191,191,1) 58%, rgba(36,49,143,1) 70%, rgba(179,39,35,1) 81%, rgba(191,191,191,1) 98%)",
        category: "Data Structures"

    },
    {
        show: 1,
        title: "Binary Text Classification",
        year: "2018",
        company: "Personal Project",
        technologies: ["TensorFLow","NumPym","Pandas","Python"],
        image: require("../../assets/projectPhotos/thumbs-up-thumbs-down.jpg"),
        imageTop: "5px",
        dark: true,
        gradient: "linear-gradient(-90deg, rgba(239,91,109,1) 0%, rgba(78,175,124,1) 100%)",
        githubLink:"https://github.com/fordneild/binary-classification-movies-review",
        category: "Machine Learning"

    },
    {
        show: 1,
        title: "Housing price prediction",
        year: "2018",
        company: "Personal Project",
        technologies: ["TensorFLow","NumPym","Pandas","Python"],
        image: "https://static.wixstatic.com/media/abed82_b0e5acddebbe48e4805c5c2603ffcf67~mv2.jpg",
        imageTop: "-64px",
        dark: true,
        gradient: "linear-gradient(326deg, rgba(164,164,152,1) 20%, rgba(255,166,165,1) 49%, rgba(255,255,255,1) 78%)",
        githubLink:"https://github.com/fordneild/median-price-prediction",
        category: "Machine Learning"

    },
    {
        show: 1,
        title: "Image classification",
        year: "2018",
        company: "Personal Project",
        technologies: ["TensorFLow","NumPym","Pandas","Python"],
        image: require("../../assets/projectPhotos/imageClassification2.jpg"),
        dark: true,
        gradient: "linear-gradient(153deg, rgba(255,255,255,1) 52%, rgba(255,0,0,1) 60%, rgba(0,0,255,1) 68%, rgba(255,255,255,1) 100%)",
        githubLink:"https://github.com/fordneild/clothes-classification",
        category: "Machine Learning"

    },
    {
        show: 1,
        title: "To Pledge Allegience",
        year: "2018",
        role: "Front-End Developer",
        company: "PBS x the Atlantic",
        technologies: ["jQuery","Javascript","HTML","Sass"],
        image: require("../../assets/projectPhotos/to_pledge_allegiance_header_modified.jpg"),
        dark: true,
        gradient: "linear-gradient(124deg, rgba(255,255,255,1) 27%, rgba(206,187,84,1) 71%, rgba(153,182,187,1) 87%, rgba(246,136,65,1) 97%)",
        category: "Web Development",
        liveLink: "https://fordneild.github.io/pbs.html",
        githubLink: "https://github.com/fordneild/to-pledge-allegience"
    },
    {
        show: 1,
        title: "Forevermark Diamonds",
        year: "2018",
        role: "Front-End Developer",
        company: "Forevermark x the Atlantic",
        technologies: ["jQuery","Javascript","HTML","CSS"],
        image: require("../../assets/projectPhotos/forevermark-project-photo1.png"),
        imageLeft: "-37px",
        dark: false,
        gradient: "linear-gradient(52deg, rgba(216,175,183,1) 11%, rgba(216,175,183,1) 61%, rgba(243,232,232,1) 76%)",
        category: "Web Development",
        liveLink: "https://fordneild.github.io/forevermark.html",
        githubLink: "https://github.com/fordneild/forevermark"
    },
    {
        show: 0,
        title: "Hash Map",
        year: "2018",
        role: "Student",
        company: "Johns Hopkins University",
        technologies: ["Java"],
        image: require("../../assets/projectPhotos/hashTable2.jpg"),

        dark: true,
        gradient: "linear-gradient(90deg, rgba(255,255,255,1) 19%, rgba(7,255,255,1) 39%, rgba(170,238,204,1) 51%, rgba(170,238,204,1) 69%, rgba(168,168,255,1) 73%, rgba(156,255,156,1) 77%)",
        category: "Data Structures"
    },
    {
        show: 0,
        title: "7 Degrees of Kevin Bacon",
        year: "2018",
        role: "Student",
        company: "Johns Hopkins University",
        technologies: ["Java"],
        image: require("../../assets/projectPhotos/7DegreesOfKevinBacon.jpg"),
        imageLeft: "-190px",
        dark: true,
        gradient: "linear-gradient(170deg, rgba(255,255,255,1) 19%, rgba(255,216,110,1) 36%, rgba(109,207,158,1) 62%, rgba(255,255,255,1) 86%)",
        category: "Data Structures"
    },
    {
        show: 0,
        title: "Hash Tree",
        year: "2017",
        role: "Student",
        company: "Johns Hopkins University",
        technologies: ["C++"],
        image: require("../../assets/projectPhotos/hashTree4.jpg"),
        dark: false,
        gradient: "linear-gradient(0deg, rgba(239,226,184,1) 12%, rgba(29,206,255,1) 27%, rgba(151,198,76,1) 53%, rgba(97,174,255,1) 99%)",
        category: "Data Structures"

    },
    {
        show: 0,
        title: "Skip List",
        year: "2017",
        role: "Student",
        company: "Johns Hopkins University",
        technologies: ["C++"],
        image: require("../../assets/projectPhotos/skiplist.jpg"),
        dark: true,
        gradient: "linear-gradient(0deg, rgba(255,255,255,1) 25%, rgba(1,237,136,1) 94%, rgba(0,250,247,1) 100%)",
        category: "Data Structures"
    },
 ]

 export default projectsData;