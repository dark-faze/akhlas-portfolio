import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { SiLeetcode , SiCodechef , SiEthereum} from "react-icons/si";
import { GrWordpress,GrReactjs } from "react-icons/gr";
import { IProject, IService, Skill } from "./type";
import { BsCircleFill } from "react-icons/bs";
import { IconType } from 'react-icons'

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I know React.js, Next.js, JavaScript and TypeScript",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "I have made backends using Node.js, Java with MongoDb, MySql",
  },
  {
    Icon: GrReactjs,
    title: "MERN Stack",
    about:
      "I have used MERN stack for a project ",
  },
  {
    Icon: SiLeetcode,
    title: "Practicing DSA",
    about: "I regularly solve problems on <b>Leetcode</b>  and <b>GFG</b> ",
  },
  {
    Icon: SiEthereum,
    title: "Learning BlockChain ",
    about:
      "Learning Solidity and Smart Contracts.",
  },
  {
    Icon: SiCodechef,
    title: "3 ⭐ At Codechef",
    about:
      "Giving Contests to improve DSA Skills",
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
    level: "50",
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

export const projects: IProject[] = [
  { 
    id:1,
    name: "Fake Crypto Trader",
    description:
      "This app can buy , sell cryptos with fake money at realtime prices and books profits or losses",
    image_path: "/semiauto.png",
    deployed_url: "https://semi-automatic-trader-client.herokuapp.com",
    github_url: 'https://github.com/dark-faze/SemiAutomatic-Trader',
    category: ["MERN"],
    key_techs: ["React", "Node.js", "Express.js", "MongoDb" ,"Material UI"],
  },
  { 
    id:2,
    name: "Memagram (Insta Clone)",
    description:
      "This app is an insta clone that has user authentication , image uploading , darkmode and you comment on pictures",
    image_path: "/mema.png",
    deployed_url: "https://memagram-c6ddc.web.app",
    github_url: '#',
    category: ["React"],
    key_techs: ["React", "Firebase", "Cloud FireStore"],
  },
  {
    id:3,
    name: "Music ReviewNRating",
    image_path: "/music.png",
    deployed_url: "#",
    github_url: "https://github.com/dark-faze/Music-Review-And-Rating",
    category: ["Java",'API'],
    description:
      "A app which has user authentication , seach and play songs , rate and review songs .",
    key_techs: ["Java", "JavaScript", "Mysql","Spotify Api"],
  },

  {
    id:4,
    name: "Covid Data Visualization",
    image_path: "/cod.png",
    deployed_url: "#",
    github_url: "https://github.com/dark-faze/Covid-data-Visualization",
    category: ["Python","API"],
    description:
      "Python Script that uses API and folium to show the extent of covid affected countries on map .",
    key_techs: ["Folium","API"],
  },

  {
    id:5,
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
    id:6,
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
    id:7,
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