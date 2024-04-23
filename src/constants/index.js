import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  prachanda,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About WMCC",
  },
  {
    id: "schedule",
    title: "Schedule",
  },
  {
    id: "speakers",
    title: "Speakers",
  },
  {
    id: "greenawards",
    title: "Green Awards",
  },
  {
    id: "sponsors",
    title: "Sponsors",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Sisdol Landfill Simulation",
    icon: web,
  },
  {
    title: "Panel Discussion",
    icon: mobile,
  },
  {
    title: "Green College Campaign",
    icon: backend,
  },
  {
    title: "Green Awards Ceremony",
    icon: creator,
  },
];

const sponsorsData = [
  {
    title: "Jointly Organized by",
    data: [
      {
        title: "HTML 5",
        icon: starbucks,
      },
      {
        title: "CSS 3",
        icon: css,
      },
    ],
  },
  {
    title: "collaboration with",
    data: [
      {
        title: "HTML 5",
        icon: html,
      },
      {
        title: "CSS 3",
        icon: css,
      },
    ],
  },
  {
    title: "partners",
    data: [
      {
        title: "HTML 5",
        icon: html,
      },
      {
        name: "CSS 3",
        icon: css,
      },
    ],
  },
];

const experiences = [
  {
    title: "Opening",
    // company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "10 AM onwards",
    points: ["Inaguration", "Khanpin"],
  },
  {
    title: "Environmental Discussion",
    // company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "11:30 AM - 01:30 AM",
    points: ["Case Presentation", "Panel Discussion"],
  },
  {
    title: "Environmental Discussion",
    // company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "12 PM - 2 PM",
    points: ["Case Presentation", "Panel Discussion"],
  },
  {
    title: "Environmental Discussion",
    // company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "02:15 PM - 05:00 PM",
    points: ["Case Presentation", "Panel Discussion"],
  },

  {
    title: "Closing",
    // company_name: "Sagarmatha Campaign",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "5:30 PM -7:00 PM",
    points: [
      "Green College Champion: Business Idea Competition Awards.",
      "Closing Networking Dinner",
    ],
  },
];

const testimonials = [
  {
    testimonial: "Media Stuff",
    name: "Sumana Shrestha",
    designation: "Journalist",
    company: "Kantipur Publication",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "Media Stuff",
    name: "Radhe Shyam",
    designation: "Journalist",
    company: "Annapurna eg",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },

  {
    testimonial: "Media Stuff",
    name: "Ram",
    designation: "Journalist",
    company: "Annapurna Media",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "Media Stuff",
    name: "Sita",
    designation: "Media Analyst",
    company: "Press Union",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial: "Media Stuff",
    name: "Bishal",
    designation: "Something Analyst",
    company: "Press Here",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial: "Media Stuff",
    name: "Hari Om",
    designation: "Something Expert",
    company: "Press Here",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Ayush",
    description: "Prime Minister of Nepal description here.",
    tags: [
      {
        name: "",
        color: "blue-text-gradient",
      },
      {
        name: "Ayush",
        description: "Ayush dai",
      },
      {
        name: "",
        color: "green-text-gradient",
      },
      {
        name: "",
        color: "pink-text-gradient",
      },
    ],
    image: prachanda,
    source_code_link: "https://github.com/",
  },
  {
    name: "Sumana Shrestha",
    description: "Sumana Shrestha Description here.",
    tags: [
      {
        name: "",
        color: "blue-text-gradient",
      },
      {
        name: "",
        color: "green-text-gradient",
      },
      {
        name: "",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Binod Chaudhary",
    description: "Binod Chaudhary Description here.",
    tags: [
      {
        name: "",
        color: "blue-text-gradient",
      },
      {
        name: "",
        color: "green-text-gradient",
      },
      {
        name: "",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Sumana Shrestha",
    description: "Sumana Shrestha Description here.",
    tags: [
      {
        name: "",
        color: "blue-text-gradient",
      },
      {
        name: "",
        color: "green-text-gradient",
      },
      {
        name: "",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Sumana Shrestha",
    description: "Sumana Shrestha Description here.",
    tags: [
      {
        name: "",
        color: "blue-text-gradient",
      },
      {
        name: "",
        color: "green-text-gradient",
      },
      {
        name: "",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Sumana Shrestha",
    description: "Sumana Shrestha Description here.",
    tags: [
      {
        name: "",
        color: "blue-text-gradient",
      },
      {
        name: "",
        color: "green-text-gradient",
      },
      {
        name: "",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
];

const speakersPanels = [
  {
    number: 1,
    topic: "first topic",
    objective: "first objective",
    outcome: "first outcome",
    data: projects,
  },
  { number: 2, data: projects },
  { number: 3, data: projects },
  { number: 4, data: projects },
  { number: 5, data: projects },
];

const Highlights = [
  {
    title: "Sisdol Landfill Simulation",
    icon: web,
  },
  {
    title: "Panel Discussion",
    icon: mobile,
  },
  {
    title: "Green College Campaign",
    icon: backend,
  },
  {
    title: "Green Awards Ceremony",
    icon: creator,
  },
];

// const AwardCard = [
//   {
//     title:
//   },
// ]

export {
  services,
  sponsorsData,
  experiences,
  testimonials,
  projects,
  speakersPanels,
  Highlights,
};
