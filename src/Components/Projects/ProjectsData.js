 const projectsData = [
    {
        title: "Way2B1 Website and CMS",
        year: "2019",
        role: "Full-Stack Developer",
        company: "Way2B1",
        technologies: ["React","Firebase","Sass","Figma"],
        image: "https://images.unsplash.com/photo-1510605395823-530474d7490f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80",
        dark: false,
        gradient: "linear-gradient(-45deg, rgba(142,152,161,1) 0%, rgba(30,48,67,1) 100%)",
        category: "Web Development"
    },
    {
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
        category: "Web Development"

    },
    {
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
        title: "Binary Text Classification",
        year: "2018",
        company: "Personal Project",
        technologies: ["TensorFLow","NumPym","Pandas","Python"],
        image: require("../../assets/projectPhotos/thumbs-up-thumbs-down.jpg"),
        imageTop: "5px",
        dark: true,
        gradient: "linear-gradient(0deg, rgba(239,91,109,1) 0%, rgba(78,175,124,1) 100%)",
        category: "Machine Learning"

    },
    {
        title: "Median Regression Analysis",
        year: "2018",
        company: "Personal Project",
        technologies: ["TensorFLow","NumPym","Pandas","Python"],
        image: "https://static.wixstatic.com/media/abed82_b0e5acddebbe48e4805c5c2603ffcf67~mv2.jpg",
        imageTop: "-64px",
        dark: true,
        gradient: "linear-gradient(326deg, rgba(164,164,152,1) 20%, rgba(255,166,165,1) 49%, rgba(255,255,255,1) 78%)",
        category: "Machine Learning"

    },
    {
        title: "Image classification",
        year: "2018",
        company: "Personal Project",
        technologies: ["TensorFLow","NumPym","Pandas","Python"],
        image: "https://assets.teenvogue.com/photos/5cd305f454a13460a087a609/master/pass/00-story-johns-hopkins.jpg",
        dark: false,
        gradient: "linear-gradient(45deg, rgba(142,152,161,1) 0%, rgba(30,48,67,1) 100%)",
        category: "Machine Learning"

    },
    {
        title: "To Pledge Allegience",
        year: "2018",
        role: "Front-End Developer",
        company: "PBS x the Atlantic",
        technologies: ["jQuery","Javascript","HTML","Sass"],
        image: require("../../assets/projectPhotos/to_pledge_allegiance_header_modified.jpg"),
        dark: true,

        gradient: "linear-gradient(124deg, rgba(255,255,255,1) 27%, rgba(206,187,84,1) 71%, rgba(153,182,187,1) 87%, rgba(246,136,65,1) 97%)",
        category: "Web Development"
    },
    {
        title: "Forevermark Diamonds",
        year: "2018",
        role: "Front-End Developer",
        company: "Forevermark x the Atlantic",
        technologies: ["jQuery","Javascript","HTML","CSS"],
        image: require("../../assets/projectPhotos/forevermark-project-photo1.png"),
        imageLeft: "-37px",
        dark: false,
        gradient: "linear-gradient(52deg, rgba(216,175,183,1) 11%, rgba(216,175,183,1) 61%, rgba(243,232,232,1) 76%)",
        category: "Web Development"
    },
    {
        title: "Hash Map",
        year: "2018",
        role: "Student",
        company: "Johns Hopkins University",
        technologies: ["Java"],
        image: "https://assets.teenvogue.com/photos/5cd305f454a13460a087a609/master/pass/00-story-johns-hopkins.jpg",
        dark: false,
        gradient: "linear-gradient(45deg, rgba(142,152,161,1) 0%, rgba(30,48,67,1) 100%)",
        category: "Data Structures"
    },
    {
        title: "7 Degrees of Kevin Bacon",
        year: "2018",
        role: "Student",
        company: "Johns Hopkins University",
        technologies: ["Java"],
        image: "https://assets.teenvogue.com/photos/5cd305f454a13460a087a609/master/pass/00-story-johns-hopkins.jpg",
        dark: false,
        gradient: "linear-gradient(45deg, rgba(142,152,161,1) 0%, rgba(30,48,67,1) 100%)",
        category: "Data Structures"
    },
    {
        title: "Multilevel Hash Structure",
        year: "2017",
        role: "Student",
        company: "Johns Hopkins University",
        technologies: ["C++"],
        image: "https://assets.teenvogue.com/photos/5cd305f454a13460a087a609/master/pass/00-story-johns-hopkins.jpg",
        dark: false,
        gradient: "linear-gradient(45deg, rgba(142,152,161,1) 0%, rgba(30,48,67,1) 100%)",
        category: "Data Structures"

    },
    {
        title: "Skip List",
        year: "2017",
        role: "Student",
        company: "Johns Hopkins University",
        technologies: ["C++"],
        image: "https://assets.teenvogue.com/photos/5cd305f454a13460a087a609/master/pass/00-story-johns-hopkins.jpg",
        dark: false,
        gradient: "linear-gradient(45deg, rgba(142,152,161,1) 0%, rgba(30,48,67,1) 100%)",
        category: "Data Structures"
    },
 ]

 export default projectsData;