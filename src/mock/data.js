import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'js.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.docdroid.net/uB3UFkc/tobi-oladoja-newcv-1-pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'githubfinder.png',
    title: 'Github User Finder',
    info:
      'A website I built using React Hooks and Context. Data was fetched from the github API, so when a user was searched it was displayed on the screen. ',
    info2: '',
    url: 'https://githubfindermvp.netlify.app/',
    repo: 'https://github.com/TobiOladoja/githubfindernew', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'weatherapp.png',
    title: 'Weather App',
    info:
      'A website I built using Vanilla Javascript. Data was fetched from the AccuWeather API, so when a location was searched it was displayed on the screen with a complimentary image representing the weather type.',
    info2: '',
    url: 'https://tobivanillajsweatherapp.netlify.app/',
    repo: 'https://github.com/TobiOladoja/vanillajs-weatherapp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'breakingbad.png',
    title: 'Breaking Bad Movie',
    info:
      'A website I built using React Hooks. Data was fetched from the Breaking Bad API - Anytime a character is searched it fires off an event and makes a request to the API and narrows it down by the name, we are going to get images of them being displayed.',
    info2: '',
    url: 'https://tobibreakingbad.netlify.app/',
    repo: 'https://github.com/TobiOladoja/react-breakingbad', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/longtermtobi',
    },

    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/tobiprinceoladoja/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/tobioladoja',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
