import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { SiLeetcode , SiCodechef } from "react-icons/si";
import { GrWordpress,GrReactjs } from "react-icons/gr";
import { IProject, IService, Skill } from "./type";
import { BsCircleFill } from "react-icons/bs";
import { IconType } from 'react-icons'

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful websites using <b> HTML</b>,<b>CSS</b> and <b>JavaScript</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "I have experience in <b>Mysql</b> , Java as a Backend , Using APIs",
  },
  {
    Icon: SiLeetcode,
    title: "Practicing DS Algo",
    about: "I regularly solve problems on <b>Leetcode</b>  and <b>CodeForces</b> ",
  },
  {
    Icon: GrReactjs,
    title: "Learning MERN",
    about:
      "Learning how to react and express",
  },
  {
    Icon: GrWordpress,
    title: "Experience with Wordpress ",
    about:
      "I have some experience using wordpress to develop websites .",
  },
  {
    Icon: SiCodechef,
    title: "3 ⭐ At Codechef",
    about:
      "Trying my hands on compititive coding.",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "DSA using C++",
    level: "65",
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
    level: "40",
  },
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "APIs",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Backend",
    level: "50",
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
    level: "55",
  },
  {
    Icon: BsCircleFill,
    name: "Premier Pro",
    level: "60",
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
    id:2,
    name: "Music ReviewNRating",
    image_path: "/music.png",
    deployed_url: "#",
    github_url: "https://github.com/dark-faze/Music-Review-And-Rating",
    category: ["Mysql","Java",'API'],
    description:
      "A app which has user authentication , seach and play songs , rate and review songs .",
    key_techs: ["Java", "JavaScript", "Mysql","Spotify Api"],
  },

  {
    id:3,
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
    id:4,
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
    id:5,
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
    id:6,
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