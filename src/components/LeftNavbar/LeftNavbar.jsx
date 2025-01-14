import "./LeftNavbar.scss";
import {
  HomeOutlined,
  RocketOutlined,
  UserOutlined,
  MessageOutlined,
  EnvironmentOutlined,
  BulbOutlined,
  CloudDownloadOutlined,
} from "@ant-design/icons";
import DATA from "@/data";
import { Button } from "antd";
import { MenuFoldOutlined } from "@ant-design/icons";

export default function LeftNavbar() {
  const closeNavbar = () => {
    document.getElementById("left-navbar").classList.remove("active");
  };

  const menus = [
    {
      icon: <HomeOutlined />,
      text: "Home",
      link: "#home",
    },
    {
      icon: <RocketOutlined />,
      text: "Projects",
      link: "#projects",
    },
    {
      icon: <UserOutlined />,
      text: "Technical Skills",
      link: "#technical-skills",
    },
    {
      icon: <UserOutlined />,
      text: "About",
      link: "#about-me",
    },
    {
      icon: <MessageOutlined />,
      text: "Contact",
      link: "#contact",
    },
    {
      icon: <CloudDownloadOutlined />,
      text: "Resume",
      link: "#resume",
    },
  ];

  return (
    <div id="left-navbar">
      <div className="close" onClick={closeNavbar}>
        <MenuFoldOutlined />
      </div>
      <div className="title">
        <div className="logo">
          <img src={DATA.bio.profilePicPath} alt="portrait pic" />
        </div>
        <div className="details">
          <div className="name">{DATA.bio.name}</div>
          <div className="location">
            <EnvironmentOutlined />
            <span>{DATA.bio.currentLocation}</span>
          </div>
        </div>
      </div>
      <div className="body">
        {menus.map((menu, index) => (
          <a href={menu.link} key={index} onClick={closeNavbar}>
            <span className="icon">{menu.icon}</span>
            <span className="text">{menu.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
