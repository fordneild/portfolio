 const way2b1ShowcaseData = {
    image: "https://images.unsplash.com/photo-1516675302207-722c37ce2f71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2800&q=80"
 }

 const binaryTextClassificationShowcaseData = {
     backgroundPositionY: "-315px",
     backgroundSize: "125%",
     projectImage: require("../../assets/projectPhotos/Way2B1SolutionsLanding.png"),
 }

 const pbsShowcaseData = {
     backgroundSize: "80%",
     backgroundColor: "#EBEBE8"
 }
 const webDevelopment = "Web Development"
 const academia = "Academia"
 const ML = "Machine Learning"
 const categories = [webDevelopment,ML,academia]


 const projectsData = [
    {
        show: 0,
        // showcase: way2b1ShowcaseData,
        title: "Product Developer on Source Team",
        year: "2019",
        role: "Full-Stack Developer",
        company: "Way2B1",
        technologies: ["React","MobX","Postgres", "Sass"],
        image: "https://images.unsplash.com/photo-1516675302207-722c37ce2f71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80",
        secondaryImages: ["https://images.unsplash.com/photo-1516675302207-722c37ce2f71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"],
        dark: false,
        gradient: "linear-gradient(150deg, rgba(255,136,119,1) 1%, rgba(124,124,149,1) 45%, rgba(125,99,91,1) 100%)",
        // gradient: "linear-gradient(-45deg, rgba(142,152,161,1) 0%, rgba(30,48,67,1) 100%)",
        category: webDevelopment,
        addMask: true,
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
        show: 0,
        title: "Le Chiffre",
        year: "2019",
        company: "Personal Project",
        technologies: ["React","Firebase"],
        image: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80",
        dark: false,
        gradient: "linear-gradient(0deg, rgba(127,154,153,1) 0%, rgba(13,64,63,1) 100%)",
        category: webDevelopment,
        addMask: true,
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
        showcase: way2b1ShowcaseData,
        title: "Way2B1 Website and CMS",
        year: "2019",
        role: "Full-Stack Developer",
        company: "Way2B1",
        technologies: ["React","Firebase","Sass","Figma"],
        image: "https://images.unsplash.com/photo-1516675302207-722c37ce2f71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80",
        secondaryImages: ["https://images.unsplash.com/photo-1516675302207-722c37ce2f71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"],
        dark: false,
        gradient: "linear-gradient(150deg, rgba(255,136,119,1) 1%, rgba(124,124,149,1) 45%, rgba(125,99,91,1) 100%)",
        // gradient: "linear-gradient(-45deg, rgba(142,152,161,1) 0%, rgba(30,48,67,1) 100%)",
        category: webDevelopment,
        addMask: true,
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
        category: webDevelopment,
        liveLink: "https://foragerone.com/",
        description: {
            Background: "I worked part-time at a start-up on campus named ForagerOne for 5 months. ForgerOne helps undergraduate students find and apply to research positions. Near the conclusion of my time there, they received a contract from Johns Hopkins University. I left to focus on my studies and learn React in preparation for my summer internship at Way2B1.",
            What_I_Did: {
                bullet1: "I implemented Angular and Bootstrap to maintain and update the site.",
                bullet2: "I built a new sign up process to help distinguish between faculty, university admin, and student accounts.",
                bullet3: "I helped redesign the front page interface to direct traffic towards the search page",
                bullet4: "I refactored and organized CSS code into the Block Element Modifier methodology."
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
        category: webDevelopment

    },
    {
        show: 1,
        title: "Cache Simulator",
        year: "2018",
        role: "Student",
        company: "Johns Hopkins University",
        technologies: ["C++"],
        image: "https://www.cbronline.com/wp-content/uploads/2016/06/what-is-cache-memory.jpg",
        dark: false,
        addMask: true,
        gradient: "linear-gradient(49deg, rgba(75,130,98,1) 20%, rgba(106,116,108.1) 58%, rgba(75,130,98,1) 93%)",
        category: academia,
        githubLink: "https://github.com/fordneild/cache-simulator",
        description: {
            Background: "This was my final project for my Computer System Fundamentals class. Using C++ we implemented different versions of a cache and observed thier preformance against various datasets. See the PDF on my github for the full assignment breakdown.",
            // What_I_Did: {
            //     bullet1: "I tested small, medium and large neural networks to determine the optimal size.",
            //     bullet2: "The medium performed the best and achieved 85% accuracy.",
            //     bullet3: "I created two variations of the medium network to try and reduce overfitting.",
            //     bullet4: "By implementing a drop-out layer, which randomly resets the neuron's weights, I was able to achieve a final accuracy of 87%."
            // }
        }
    },
    {
        show: 1,
        title: "Assembler and Disassembler",
        year: "2019",
        role: "Student",
        company: "Johns Hopkins University",
        technologies: ["C","MIPS"],
        image: "https://www.discovercoding.ca/wp-content/uploads/2018/01/mips_assembly.jpg",
        dark: false,
        addMask: true,
        gradient: "linear-gradient(122deg, rgba(191,191,191,1) 58%, rgba(36,49,143,1) 70%, rgba(179,39,35,1) 81%, rgba(191,191,191,1) 98%)",
        category: academia,
        githubLink: "https://github.com/fordneild/SCRAM-assembler-and-simulator",
        description: {
            Background: "This was my second project for my Computer System Fundamentals class. A MIPS set of command instructions are parsed and translated into binary data and then simulated. See the PDF on my github for a full assingment breakdown.",
            // What_I_Did: {
            //     bullet1: "I tested small, medium and large neural networks to determine the optimal size.",
            //     bullet2: "The medium performed the best and achieved 85% accuracy.",
            //     bullet3: "I created two variations of the medium network to try and reduce overfitting.",
            //     bullet4: "By implementing a drop-out layer, which randomly resets the neuron's weights, I was able to achieve a final accuracy of 87%."
            // }
        }

    },
    
    {
        show: 1,
        title: "Binary Text Classification",
        showcase: binaryTextClassificationShowcaseData,
        year: "2018",
        company: "Personal Project",
        technologies: ["TensorFLow","NumPym","Pandas","Python"],
        image: require("../../assets/projectPhotos/thumbs-up-thumbs-down.jpg"),
        imageTop: "5px",
        dark: true,
        gradient: "linear-gradient(-90deg, rgba(239,91,109,1) 0%, rgba(78,175,124,1) 100%)",
        githubLink:"https://github.com/fordneild/binary-classification-movies-review",
        category: ML,
        description: {
            Background: "This was my third and most recent project using TensorFlow, a python machine learning library. The models were tasked with determining if a movie review was positive or negative. The models were trained with a dataset of 60,000 reviews for 20 epochs.",
            What_I_Did: {
                bullet1: "I tested small, medium and large neural networks to determine the optimal size.",
                bullet2: "The medium performed the best and achieved 85% accuracy.",
                bullet3: "I created two variations of the medium network to try and reduce overfitting.",
                bullet4: "By implementing a drop-out layer, which randomly resets the neuron's weights, I was able to achieve a final accuracy of 87%."
            }
        }

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
        category: ML,
        description: {
            Background: "This was my second project using TensorFlow, a python machine learning library. The goal was to predict the cost of a house in Boston based off ten features",
            // What_I_Did: {
            //     bullet1: "I tested small, medium and large neural networks to determine the optimal size.",
            //     bullet2: "The medium performed the best and achieved 85% accuracy.",
            //     bullet3: "I created two variations of the medium network to try and reduce overfitting.",
            //     bullet4: "By implementing a drop-out layer, which randomly resets the neuron's weights, I was able to achieve a final accuracy of 87%."
            // }
        }

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
        category: ML,
        description: {
            Background: "This was my first project using TensorFlow, a python machine learning library. The models were tasked with categorizing images of clothing into 10 categories. The model achieved 91% accuracy. This is a classic example of image classification with nueral networks",
            // What_I_Did: {
            //     bullet1: "I tested small, medium and large neural networks to determine the optimal size.",
            //     bullet2: "The medium performed the best and achieved 85% accuracy.",
            //     bullet3: "I created two variations of the medium network to try and reduce overfitting.",
            //     bullet4: "By implementing a drop-out layer, which randomly resets the neuron's weights, I was able to achieve a final accuracy of 87%."
            // }
        }

    },
    {
        show: 1,
        title: "To Pledge Allegience",
        showcase: pbsShowcaseData,
        year: "2018",
        role: "Front-End Developer",
        company: "PBS x the Atlantic",
        technologies: ["jQuery","Javascript","HTML","Sass"],
        image: require("../../assets/projectPhotos/to_pledge_allegiance_header_modified.jpg"),
        dark: true,
        gradient: "linear-gradient(124deg, rgba(255,255,255,1) 27%, rgba(206,187,84,1) 71%, rgba(153,182,187,1) 87%, rgba(246,136,65,1) 97%)",
        category: webDevelopment,
        liveLink: "https://fordneild.github.io/pbs.html",
        githubLink: "https://github.com/fordneild/to-pledge-allegience",
        description: {
            Background: "This was my final assignment while working at The Atlantic, Re:Think. I built an interactive single page website for a new Ken Burns Documentary on Netlfix.",
            What_I_Did: {
                bullet1: "I collaborated with a designer to create a beautiful, yet responsive web experience.",
                bullet2: "I manipulated an imported audio player, thus saving significant amounts of time on a otherwise complicated component.",
                bullet3: "I implemented jQuery to create appealing transitions between modals and pages.",
                bullet4: "I sought CSS-first solutions to prioritize preformance and code simplicity."
            }
        }
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
        category: webDevelopment,
        liveLink: "https://fordneild.github.io/forevermark.html",
        githubLink: "https://github.com/fordneild/forevermark",
        description: {
            Background: "This was my second assignment while working at The Atlantic, Re:Think. I developed a single page website for Forevermark Diamonds. The website was a multimedia article showcasing Diana Rau, a young entrepreneurial women.",
            What_I_Did: {
                bullet1: "I displayed unobstrusive video content using a content management system.",
                bullet2: "I built the wesbite with a mobile-first methodology, ensuring a smooth responsive page at all window sizes."
            }
        }
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
        category: academia
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
        category: academia
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
        category: academia

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
        category: academia
    },
 ]

 export default projectsData;
 export {categories}