import PORTFOLIO_DATA_TYPE, { _companies } from "./portfolioDataType";
import {
  BulbOutlined,
  ExportOutlined,
  FieldTimeOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import React from "react";

const COMPANY: _companies = {
  i2i: {
    name: "Ideas2It",
    logoPath: "/src/assets/kalai/ideas2it_logo2.jpg",
    imgAltText: "Ideas2It logo",
  },
  zoho: {
    name: "Zoho",
    logoPath: "/src/assets/kalai/zoho_logo2.jpg",
    imgAltText: "Zoho logo",
  },
};

const KALAI_PORTFOLIO_DATA_AI: PORTFOLIO_DATA_TYPE = {
  bio: {
    name: "Kalai.R",
    profilePicPath: "/src/assets/kalai/Kalai-github.jpeg",
    dob: new Date("Dec 15, 1997"),
    motherTounge: "Tamil",
    currentLocation: "Chennai, India",
  },
  introText: "Full stack Web Devlopment Expert",
  SUMMARY: {
    box1: {
      title1: "3",
      title2: "years of IT experience",
    },
    box2: {
      title1: "React + Node",
      title2: <b>Expert</b>,
    },
    box3: {
      title: "Professional Journey",
      content:
        "Valuable experience as a Software Developer at Zoho and Ideas2It. Now seeking a role where I can apply my skills, learn, and grow together with the team.",
    },
    box4: {
      title1: "3+",
      title2: "Rapidly Prototyped Projects",
    },
    box5: {
      title1: "10+",
      title2: `years of coding experience`,
    },
    box6: [
      {
        companyName: COMPANY.zoho.name,
        experience: "2+",
        logoPath: COMPANY.zoho.logoPath,
        imgAltText: COMPANY.zoho.imgAltText,
      },
      {
        companyName: COMPANY.i2i.name,
        experience: "1",
        logoPath: COMPANY.i2i.logoPath,
        imgAltText: COMPANY.i2i.imgAltText,
      },
    ],
    box7: {
      title1: <FieldTimeOutlined />,
      title2: "Always On/Early Time Delivery",
    },
    box8: { title1: <BulbOutlined />, title2: "Critical Thinking, Philosophy" },
    box9: {
      title1: <LinkedinOutlined />,
      title2: (
        <>
          LinkedIn <ExportOutlined />
        </>
      ),
      link: "https://www.linkedin.com/in/r-kalai",
    },
    box10: {
      title1: <GithubOutlined />,
      title2: (
        <>
          Github <ExportOutlined />
        </>
      ),
      link: "https://github.com/75kalai",
    },
  },
  PROJECTS: [
    {
      company: COMPANY.i2i.name,
      title: "ULab Systems",
      logoPath: COMPANY.i2i.logoPath,
      imgAltText: COMPANY.i2i.imgAltText,
      duration: "October 2024 - Present",
      description:
        "Developed a Minimal Viable Product for automation in post-healthcare workflows using Robotic Process Automation (RPA).",
      responsibilities: [
        "Maintained and enhanced the frontend architecture for the web application.",
        "Played a critical role in achieving the project’s first production release as the 3rd team member.",
        "Worked as a key player in a 3-member team.",
      ],
    },
    {
      company: COMPANY.i2i.name,
      title: "EVA (NEOS) MVP",
      logoPath: COMPANY.i2i.logoPath,
      imgAltText: COMPANY.i2i.imgAltText,
      duration: "March 2024 - October 2024",
      description:
        "The uLab Systems software is a comprehensive web application designed for orthodontic practices. It enables users to add patients, upload 3D scans, create treatment plans in collaboration with uAssist doctors, and order aligners, retainers, and other products. The platform streamlines the complete dental treatment process, from initial scans to ongoing patient care. The 3D processing module, built with WebAssembly (WASM) by the China team, integrates seamlessly with the broader workflow developed by the local team.",
      responsibilities: [
        "Built the project from scratch using React, Zustand, and Ant Design.",
        "Integrated the backend using Node.js and Feathers Framework.",
        "Collaborated with backend and 3D software teams to ensure seamless integration.",
        "Actively collaborated with client and helped with resolving the various last minute bugs related to project flow",
      ],
    },
    {
      company: COMPANY.zoho.name,
      title: "Zoho Sign Integration",
      logoPath: COMPANY.zoho.logoPath,
      imgAltText: COMPANY.zoho.imgAltText,
      duration: "2018-2021",
      description:
        "Integrated Zoho Sign with other Zoho Apps like Mail, Desk, Projects, and external apps like Box.",
      responsibilities: [
        "Developed internal features and resolved bugs.",
        "Provided technical support for clients and partners.",
        "Wrote a PHP SDK for Zoho Sign APIs.",
      ],
    },
  ],
  TECHNICAL_SKILLS: [
    {
      title: "JavaScript",
      skillLogoImgPath: "/src/assets/logos/icons8-javascript.svg",
    },
    { title: "React", skillLogoImgPath: "/src/assets/logos/react.webp" },
    {
      title: "Node.js",
      skillLogoImgPath: "/src/assets/logos/nodejsStackedLight.svg",
    },
    { title: "Zustand", skillLogoImgPath: "/src/assets/logos/zustand.svg" },
    { title: "MongoDB", skillLogoImgPath: "/src/assets/logos/mongodb.webp" },
    { title: "MySQL", skillLogoImgPath: "/src/assets/logos/icons8-mysql.svg" },
    { title: "Redux", skillLogoImgPath: "/src/assets/logos/icons8-redux.svg" },
    {
      title: "Postgres",
      skillLogoImgPath: "/src/assets/logos/icons8-postgres.svg",
    },
    { title: "Ant Design", skillLogoImgPath: "/src/assets/logos/antd.png" },
    { title: "MUI", skillLogoImgPath: "/src/assets/logos/mui.png" },
    { title: "@shadcn/ui", skillLogoImgPath: "/src/assets/logos/shadcn.png" },
    { title: "Radix UI", skillLogoImgPath: "/src/assets/logos/radix_ui.svg" },
    {
      title: "Express JS",
      skillLogoImgPath: "/src/assets/logos/express-js.png",
    },
    {
      title: "Feathers JS",
      skillLogoImgPath: "/src/assets/logos/feathersJS.ico",
    },
    { title: "VS Code", skillLogoImgPath: "/src/assets/logos/vscode.svg" },
    {
      title: "GitHub",
      skillLogoImgPath: "/src/assets/logos/icons8-git (1).svg",
    },
    { title: "Mercurial", skillLogoImgPath: "/src/assets/logos/mercurial.png" },
  ],
  ABOUT_ME: [
    {
      position: "left",
      title: "Passion for Coding",
      content: [
        "I find joy in critical thinking, design, and the intricate world of data structuring and analysis.",
      ],
    },
    {
      position:"right",
      title:"Professionally..",
      content:[
          `... I navigate the realm of software development, where I've honed my skills in a variety of Programming Languages, Project Domains, Programming Constructs, Data Structures and Algorithms, Computer Networks, and Software/System design`
      ]
    }
  ],
  CONTACT: [
    { contactMethod: "Location", description: "Chennai, TN, India" },
    { contactMethod: "Email", description: "75kalai@gmail.com" },
    { contactMethod: "Phone", description: "+91 73582 29808" },
  ],
  RESUME: { path: "https://drive.google.com/file/d/1-AcTBwxH9s60-14E2Vla8F9IsS5-c7K_/view?usp=sharing" },
};

export default KALAI_PORTFOLIO_DATA_AI;
