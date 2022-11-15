import { RiComputerLine } from "react-icons/ri";
import { FaServer , FaFireAlt , FaReact , FaNodeJs, FaCss3} from "react-icons/fa";
import { SiLeetcode , SiEthereum , SiNextDotJs , SiMongodb , SiPython , SiRedux, SiTypescript , SiJavascript, SiJava, SiFirebase, SiMysql} from "react-icons/si";
import { GrWordpress,GrReactjs } from "react-icons/gr";
import { IProject, IService, Skill , WorkedWith} from "./type";
import { BsCircleFill } from "react-icons/bs";
import { IconType } from 'react-icons'
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I have worked with React.js, Next.js , JS and TS.",
  },
  {
    Icon: FaServer,
    title: "Backend & DataBase",
    about:
      "I worked with Node.js, Java with MongoDb, MySql.",
  },
  {
    Icon: GrReactjs,
    title: "MERN Stack",
    about:
      "I have worked with MERN Stack the most.",
  },
  {
    Icon: SiLeetcode,
    title: "Practicing DSA",
    about: "I regularly solve problems on <b>Leetcode</b> and <b>GFG</b>. ",
  },
  {
    Icon: SiEthereum,
    title: "Learning BlockChain ",
    about:
      "Exploring the newest tech and useCases.",
  },
  {
    Icon: FaFireAlt,
    title: "Working with new tech",
    about:
      "I like to use and build projects with new tech.",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "DSA",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "HTML CSS JS",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "MYSQL",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Backend",
    level: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "VS Code",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Premier Pro",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Wordpress",
    level: "60",
  },
];

export const techWorkedWith: WorkedWith[] = [
  {
    Icon: FaReact,
    name: "React.js",
  },
  {
    Icon: SiNextDotJs,
    name: "Next.js",
  },
  {
    Icon: FaNodeJs,
    name: "Node.js",
  },
  {
    Icon: SiMongodb,
    name: "MongoDb",
  },
  {
    Icon: SiRedux,
    name: "Redux",
  },
  {
    Icon: SiMongodb,
    name: "MongoDb",
  },
  {
    Icon: SiJavascript,
    name: "JavaScript",
  },
  {
    Icon: SiTypescript,
    name: "Typescript",
  },
  {
    Icon: SiPython,
    name: "Python",
  },
  {
    Icon: SiJava,
    name: "Java",
  },
  {
    Icon: AiFillGithub,
    name: "Github",
  },
  {
    Icon: SiFirebase,
    name: "Firebase",
  },
  {
    Icon: SiMysql,
    name: "MySql",
  },
  {
    Icon: AiFillHtml5,
    name: "HTML",
  },
  {
    Icon: FaCss3,
    name: "CSS",
  },
  {
    Icon: SiEthereum,
    name: "Solidity",
  },
  

];

export const projects: IProject[] = [
  { 
    id:1,
    name: "Fake Crypto Trader",
    description:
      "This app can buy , sell cryptos with fake money at realtime prices and books profits or losses",
    image_path: "/semiauto.png",
    deployed_url: "https://semi-automatic-trader-client.herokuapp.com",
    github_url: 'https://github.com/dark-faze/SemiAutomatic-Trader',
    category: ["React","JS/TS"],
    key_techs: ["React", "Node.js", "Express.js", "MongoDb" ,"Material UI"],
  },
  { 
    id:2,
    name: "DishPoll",
    description:
      "This app can be used to vote for favourite dishes and has leaderboard (user:john pass:john123)",
    image_path: "/Dishpoll.png",
    deployed_url: "https://reactdishpolice.netlify.app/dishlist",
    github_url: 'https://github.com/dark-faze/react-dishpoll-challenge',
    category: ["React", "JS/TS"],
    key_techs: ["React", "Redux", "Css"],
  },
  { 
    id:3,
    name: "TokensDapp (Hackathon Winner)",
    description:
      "Redeem 3 types of token , blacklist feature , metamask auth",
    image_path: "/solidity.png",
    deployed_url: "#",
    github_url: 'https://github.com/dark-faze/hackerthon-iitj',
    category: [ "React", "JS/TS", "BlockChain"],
    key_techs: ["React", "Solidity", "JavaScript/TypeScript"],
  },
  { 
    id:4,
    name: "Memagram (Insta Clone)",
    description:
      "This app is an insta clone that has user authentication , image uploading , darkmode and you comment on pictures",
    image_path: "/mema.png",
    deployed_url: "https://memagram-c6ddc.web.app",
    github_url: '#',
    category: ["React", "JS/TS"],
    key_techs: ["React", "Firebase", "Cloud FireStore"],
  },
  { 
    id:5,
    name: "InstaGram poster Express",
    description:
      "This app can be used to make instagram post every 4 hours using cron job",
    image_path: "/express.png",
    deployed_url: "#",
    github_url: 'https://github.com/dark-faze/Insta_Poster_JS',
    category: ["JS/TS"],
    key_techs: ["Express", "Node", "JavaScript/TypeScript"],
  },
  { 
    id:6,
    name: "NFTHERO",
    description:
      "This app can be used to redeem hero nft.",
    image_path: "/solidity.png",
    deployed_url: "https://nifty-hypatia-67c3a9.netlify.app/",
    github_url: 'https://github.com/dark-faze/nft-minting-site',
    category: [ "React", "JS/TS", "BlockChain"],
    key_techs: ["React", "Solidity", "JavaScript/TypeScript"],
  },
  {
    id:7,
    name: "Music ReviewNRating",
    image_path: "/music.png",
    deployed_url: "#",
    github_url: "https://github.com/dark-faze/Music-Review-And-Rating",
    category: ["Other"],
    description:
      "A app which has user authentication , seach and play songs , rate and review songs .",
    key_techs: ["Java", "JavaScript", "Mysql","Spotify Api"],
  },
  { 
    id:8,
    name: "Fractionalize NFT",
    description:
      "Fractionalize an NFT for some tokens , the locked nft can be redeemed with the same amount of generated tokens",
    image_path: "/solidity.png",
    deployed_url: "#",
    github_url: 'https://github.com/dark-faze/Quillhash-FractionalizeNFT',
    category: [ "BlockChain"],
    key_techs: ["Solidity" , "Ethereum"],
  },
  {
    id:9,
    name: "Django Fish API",
    image_path: "/django.png",
    deployed_url: "#",
    github_url: "https://github.com/dark-faze/Benzen-Django-FishAPI",
    category: ["Python"],
    description:
      "Server written with Django which has add , getall , get records",
    key_techs: ["Python","Django","API"],
  },
  {
    id:10,
    name: "Covid Data Visualization",
    image_path: "/cod.png",
    deployed_url: "#",
    github_url: "https://github.com/dark-faze/Covid-data-Visualization",
    category: ["Python"],
    description:
      "Python Script that uses API and folium to show the extent of covid affected countries on map .",
    key_techs: ["Folium","API"],
  },

  {
    id:11,
    name: "BlackClover Chapter-Notifier",
    image_path: "/chapter.png",
    deployed_url: "#",
    github_url: "https://github.com/dark-faze/Black-Clover-Chapter-Notifier",
    category: ["Python"],
    description:
      "Python Script that sends notification to windows aaction center when a new chapter is released .",
    key_techs: ["Toast notifier","Html Session"],
  },
  {
    id:12,
    name: "Flappy Nero",
    image_path: "/nero.png",
    deployed_url: "#",
    github_url: "https://github.com/dark-faze/Flappy-Nero",
    category: ["Python"],
    description:
      "Flappy bird like game made using pygame  .",
    key_techs: ["Pygame"],
  },
  {
    id:13,
    name: "Titanic Survival",
    image_path: "/titanic.jpg",
    deployed_url: "#",
    github_url: "https://github.com/dark-faze/Titanic-Survival-Prediction",
    category: ["Python"],
    description:
      "Tells weather a person would have survived titanic incident or not .",
    key_techs: ["Python"],
  },

];