import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experiences", link: "#experiences" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Graduate in Computer Engineering from the Army Institute of Technology, class of 2024.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm good at Time management and Teamwork.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: [
      "ReactJS",
      "Typescript",
      "JavaScript",
      "HTML",
      "Tailwind CSS",
      "C++",
      "SQL",
      "NodeJS",
      "NextJS",
    ],
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Computer Fundamentals",
    description: [
      "Operating Systems",
      "Data Structures and Algorithms",
      "DBMS",
      "Object Oriented Programming",
      "Git, Github and Version Control",
    ],
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Download My Resume.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Brainwave - Modern UI/UX website",
    des: "Modern UI/UX website, developed using React.js and Tailwind CSS, exemplifies modern UI/UX principles. Its sleek design, seamless animations, and overall user experience set a high standard, serving as a reference or inspiration for future modern applications or websites in general.",
    img: "/p1.jpeg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
  {
    id: 3,
    title: "Yum Meals",
    des: "Web interface for Food delivery app built using React,user can select and add items to cart.",
    img: "/p2.png",
    iconLists: ["/re.svg"],
    link: "https://stranger1710.github.io/food-order/",
  },
  {
    id: 4,
    title: "Spock Lizard Game",
    des: "Stone paper scissors lizard spock game made with React js",
    img: "/p3.png",
    iconLists: ["/re.svg"],
    link: "https://stranger1710.github.io/frontend-game/",
  },
];

// export const testimonials = [
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
// ];

// export const companies = [
//   {
//     id: 1,
//     name: "cloudinary",
//     img: "/cloud.svg",
//     nameImg: "/cloudName.svg",
//   },
//   {
//     id: 2,
//     name: "appwrite",
//     img: "/app.svg",
//     nameImg: "/appName.svg",
//   },
//   {
//     id: 3,
//     name: "HOSTINGER",
//     img: "/host.svg",
//     nameImg: "/hostName.svg",
//   },
//   {
//     id: 4,
//     name: "stream",
//     img: "/s.svg",
//     nameImg: "/streamName.svg",
//   },
//   {
//     id: 5,
//     name: "docker.",
//     img: "/dock.svg",
//     nameImg: "/dockerName.svg",
//   },
// ];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Web Developer Intern",
    desc: "Developed responsive web apps using React, Bootstrap, and Tailwind CSS\nImproved UX for users by optimizing auth systems with MERN\nCollaborated on 9+ projects, delivering 95% of requirements efficiently",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title:
      "Skyscanner Front-End Software Engineering virtual experience programme on Forage",
    desc: "Completed a job simulation where I built a web application using React as a front-end engineer at Skyscanner.\nDeveloped a page for picking a travel date using Skyscanner’s open-source Backpack React library.\nCustomised my application and ran automated tests to ensure it rendered properly.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
    certificationLink:
      "https://www.theforage.com/completion-certificates/skoQmxqhtgWmKv2pm/km4rw7dihDr3etqom_skoQmxqhtgWmKv2pm_8YHaSCTNcigt25PpF_1768668294574_completion_certificate.pdf", // Add your certification URL here
  },
  {
    id: 3,
    title: "Datacom Software Development Job Simulation on Forage",
    desc: "Completed a simulation focussed on how the software development team at Datacom approaches their work\nReviewed a web application and planned for future improvements\nIdentified the root cause of bugs and implemented a fix to improve the application",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp4.svg",
    certificationLink:
      "https://www.theforage.com/completion-certificates/gCW7Xki5Y3vNpBmnn/L3NcyCoAjLno9d3T9_gCW7Xki5Y3vNpBmnn_8YHaSCTNcigt25PpF_1768487638008_completion_certificate.pdf",
  },
  {
    id: 4,
    title:
      "Lloyds Banking Group Technology Engineering Job Simulation on Forage",
    desc: "Completed a job simulation involving technology engineering and user experience design for the Lloyds Banking Group Technology Team\nDeveloped and tested a mortgage calculator, utilising HTML, CSS, and JavaScript, and deployed the tool using Azure, enhancing technical skills in web development and cloud computing\nPresented project outcomes and received feedback, demonstrating proficiency in communication and adaptability while integrating user feedback to refine product features\nEmployed Git for version control, ensuring collaborative coding practices and maintaining a structured project workflow, which improved code management efficiency by 30%",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp4.svg",
    certificationLink:
      "https://www.theforage.com/completion-certificates/Zbnc2o4ok6kD2NEXx/8AFfeg9k5udSCu6r5_Zbnc2o4ok6kD2NEXx_8YHaSCTNcigt25PpF_1768582824045_completion_certificate.pdf", // Add your certification URL here
  },
];

export const socialMedia = [
  {
    id: 1,
    link: "https://github.com/Stranger1710",
    img: "/git.svg",
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/rupender-singh-9b2814200/",
    img: "/link.svg",
  },
];
