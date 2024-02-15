import {
  mobile,
  backend,
  creator,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  electronic,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  Kairalee,
  HKBK,
  Deeksha,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "educations",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "AWS Architect",
    icon: backend,
  },
  {
    title: "Github",
    icon: creator,
  },
  {
    title: "Electronics",
    icon: electronic,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Intership",
    company_name: "Entuple Technologies",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2021 - April 2021",
    points: [
      "During my internship at Entuple Technologies, I had the opportunity to delve into various aspects of Python programming, gaining hands-on experience and valuable insights into the world of software development.",
      "Project Involvement: Worked on diverse projects that honed my skills in Python programming.",
      "Collaborative Development: Engaged in collaborative coding with team members, fostering a dynamic and knowledge-sharing environment. This experience not only enhanced my coding proficiency but also improved my ability to work effectively within a team.",
      "Problem Solving: Encountered and successfully resolved challenges related to Python programming.",
      "Learning Opportunities: Participated in workshops and training sessions organized by the company to stay updated with the latest advancements in Python and related technologies. This furthered my understanding of industry best practices.",
      "Documentation: Emphasized the importance of thorough documentation in the development process. Prepared detailed documentation for the projects I worked on, ensuring clarity and ease of understanding for future reference.",
    ],
  },
  {
    title: "Graduate Engineer Trainee",
    company_name: "Pi-Square Technologies",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Present",
    points: [
      "During my tenure as a Graduate Engineer Trainee at Pi Square Technologies, I underwent comprehensive training in Amazon Web Services (AWS) and gained a deep understanding of various AWS services. This immersive experience was complemented by obtaining the AWS Certified Solutions Architect certification.",
      "AWS Training: Acquired hands-on expertise in AWS cloud computing services, covering a spectrum of services such as [mention specific AWS services you were trained on, e.g., EC2, S3, RDS, etc.]. The training equipped me with the skills needed to design scalable and reliable architectures on the AWS platform.",
      "AWS Certified Solutions Architect: Successfully completed the AWS Certified Solutions Architect certification, validating my proficiency in designing distributed systems and architectures on the AWS cloud. This certification serves as a testament to my commitment to excellence in cloud architecture.",
      "Practical Application: Applied theoretical knowledge in real-world scenarios through practical exercises and projects, solidifying my ability to implement AWS solutions effectively.",
      "Collaborative Learning: Engaged in collaborative learning environments, participating in knowledge-sharing sessions and discussions with peers to enhance understanding and problem-solving skills.",
      "Documentation and Reporting: Developed strong documentation and reporting skills by creating comprehensive reports on AWS architecture designs and solutions. This skill set is crucial for effective communication and knowledge transfer within a team.",
      "My time at Pi Square Technologies not only provided a solid foundation in AWS but also instilled in me the importance of continuous learning and practical application of knowledge. The AWS Certified Solutions Architect certification stands as a testament to my dedication to staying at the forefront of cloud technology.",
    ],
  },
  /* {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  */
];

const testimonials = [
  {
    testimonial:
      "Ankit's frontend development skills are simply top-notch. He effortlessly translates complex designs into clean, responsive, and user-friendly interfaces.",
    name: "Uttam C",
    designation: "Program Codinator",
    company: "PI Square Tech",
    image:
      "https://media.licdn.com/dms/image/D5603AQEp7qsQfJAw1g/profile-displayphoto-shrink_800_800/0/1682531842739?e=2147483647&v=beta&t=5G2EdhHSBbSjfwDUjvlHAwjMhn6qeuCAqdCxHR0YJao",
  },
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ankit proved me wrong.",
    name: "Niranjan Boggula",
    designation: "Engineer",
    company: "PI Square Tech",
    image:
      "https://media.licdn.com/dms/image/D5603AQHZKngcuwOBjw/profile-displayphoto-shrink_400_400/0/1692854621147?e=1711584000&v=beta&t=zupml9vI_2GTbtW3l7kWajA151CEXAuHk7CNc4ni4gM",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ankit does.",
    name: "Sumanth M",
    designation: "CEO",
    company: "Rapak",
    image:
      "https://media.licdn.com/dms/image/D5603AQH5vMf8Cu5-rQ/profile-displayphoto-shrink_400_400/0/1672738431252?e=1711584000&v=beta&t=GlaM3bWg8QPw06_6jxWt4y9vu_sECjj-Orly1_MSqvI",
  },
];

const projects = [
  {
    name: "Car Rent Dashboard",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link:
      "https://github.com/ankitkumaran3/Car-Rantal-Dashboard.git",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link:
      "https://github.com/ankitkumaran3/project_react_native_jobs.git",
  },
  {
    name: "Travel Companion",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link:
      "https://github.com/ankitkumaran3/project_travel_advisor.git",
  },
  {
    name: "Admin Dashboard",
    description:
      "The Admin Dashboard is a centralized platform designed to empower administrators with comprehensive control, monitoring, and management capabilities over the system.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://athemes.com/wp-content/uploads/Vue-Black-Dashboard-Pro-PREMIUM-VUEJS-ADMIN-TEMPLATE-768x576.jpg",
    source_code_link: "https://github.com/ankitkumaran3/Admin-Dashboard.git",
  },
  {
    name: "E-Commerce Website",
    description:
      "Our e-commerce platform is a dynamic online marketplace designed to revolutionize the way users discover, purchase, and interact with a diverse range of products and services. With its user-centric design, seamless functionality, and innovative features, our platform offers an unparalleled shopping experience tailored to the modern consumer.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://assets.materialup.com/uploads/dbb92967-5586-4eb8-9675-f0b3c47ff565/preview.png",
    source_code_link:
      "https://github.com/ankitkumaran3/e-commerce-Rappack-.git",
  },
];

const educations = [
  {
    degree:
      "Bachelor of Engineering in Electronics and Communications Engineering",
    institution_name: "HKBK College Of Engineering",
    icon: HKBK, // Replace with your college logo image
    iconBg: "#2c3e50",
    date: "2018 - 2022",
    points: [
      "Developed practical skills through diverse projects like Smart Blink Stick (wearable LED blinker) and Heart Attack Detector using facial expression analysis.",
      "Strong foundation in core electronics and communications concepts.",
      "Experienced collaborative learning and problem-solving within a team environment.",
      "Exposed to cutting-edge technologies and industry trends through workshops and seminars.",
      "Maintained thorough project documentation for future reference and knowledge sharing.",
    ],
  },
  // Add more objects for each of your previous educational institutions and adjust the details accordingly.
  {
    degree: "Pre-University Course (Science & Mathematics)",
    institution_name: "Deeksha Integrated PUC College",
    icon: Deeksha, // Replace with your PUC college logo image
    iconBg: "#34495e",
    date: "2016 - 2018",
    points: [
      "Solidified my grounding in science and mathematics, building a strong foundation for higher studies.",
      "Developed critical thinking and problem-solving skills through challenging coursework.",
      "Engaged in collaborative learning and project work, refining my communication and teamworking abilities.",
      "Participated in extracurricular activities that fostered personal growth and leadership skills.",
    ],
  },
  {
    degree: "High School",
    institution_name: "Kairalee Nilayam Central School",
    icon: Kairalee, // Replace with your high school logo image
    iconBg: "#405d7c",
    date: "2006 - 2016",
    points: [
      "Received a well-rounded education with a strong emphasis on academics and extracurricular activities.",
      "Developed time management, organizational, and study skills that continue to benefit me today.",
      "Participated in various clubs and teams, cultivating leadership, teamwork, and communication skills.",
      "Gained a strong foundation in core subjects like mathematics, science, and humanities.",
    ],
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  educations,
  projects,
};
