import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  holguin_univeristy,
  freelance,
  agiledreamteam,
  otnh,
  qualud_logo,
  findacarapp,
  weatherpp,
  _4wtrade,
  movie_searcher
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Mobile Developer',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  // {
  //   name: 'Rails',
  //   icon: rubyrails,
  // },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  // {
  //   name: 'docker',
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: 'Software Developer',
    company_name: 'University of Holguin',
    icon: holguin_univeristy,
    iconBg: '#333333',
    date: 'Oct, 2019 - Jul, 2020',
  },
  {
    title: 'Back End Developer',
    company_name: 'Freelancer',
    icon: freelance,
    iconBg: '#333333',
    date: 'Jul, 2020 - Jul, 2020',
  },
  {
    title: 'Backend Developer',
    company_name: 'Freelancer',
    icon: freelance,
    iconBg: '#333333',
    date: 'Aug, 2021 - Sep, 2023',
  },
  {
    title: 'Backend Developer',
    company_name: 'Agile Dream Team',
    icon: agiledreamteam,
    iconBg: '#333333',
    date: 'Feb, 2022 - May, 2022',
  },
  {
    title: 'Web Master',
    company_name: 'Oficina Territorial de Normalizacion Holguin',
    icon: otnh,
    iconBg: '#333333',
    date: 'Sep, 2020 - Jul, 2022',
  },
  {
    title: 'Mobile Developer',
    company_name: 'Qualud',
    icon: qualud_logo,
    iconBg: '#333333',
    date: 'Jul, 2022 - Nov, 2022',
  },
  {
    title: 'Frontend Developer',
    company_name: 'Vixidev',
    icon: freelance,
    iconBg: '#333333',
    date: 'Mar, 2023 - Nov, 2023',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Find a car app',
    description: "It's a Ionic-Angular mobile app for diverse transportation needs, with a NestJs backend.",
    tags: [
      {
        name: 'ionic',
        color: 'blue-text-gradient',
      },
      {
        name: 'angular',
        color: 'green-text-gradient',
      },
      {
        name: 'graphql',
        color: 'pink-text-gradient',
      },
    ],
    image: findacarapp,
    repo: 'https://github.com/ydgcdeveloper/findacar-app',
    demo: null,
  },
  {
    id: 'project-2',
    name: 'Weather App',
    description:
      'A web app to retrieve global weather information by entering or selecting city names on a map.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: weatherpp,
    repo: 'https://github.com/ydgcdeveloper/weather-app-react',
    demo: 'https://weather-app-react-ydgcdeveloper.netlify.app/',
  },
  {
    id: 'project-3',
    name: 'Four we trade',
    description: 'Track, invest, and manage crypto assets with a landing page, dashboard, and administrative back office.',
    tags: [
      {
        name: 'symfony',
        color: 'blue-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'green-text-gradient',
      },
      {
        name: 'postgresql',
        color: 'pink-text-gradient',
      },
    ],
    image: _4wtrade,
    repo: 'https://github.com/ydgcdeveloper/4wtrade',
    demo: null,
  },
  {
    id: 'project-4',
    name: 'Movie Search',
    description: "A movie search engine by title",
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie_searcher,
    repo: 'https://github.com/ydgcdeveloper/search-movie-react',
    demo: 'https://search-movie-react-ydgcdeveloper.netlify.app/',
  },
];

const emailServiceId = 'service_ssvr2vr';
const templateId = 'template_i5xxwkz';

export { services, technologies, experiences, projects, emailServiceId, templateId };
