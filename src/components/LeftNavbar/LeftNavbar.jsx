import "./LeftNavbar.scss";
import dilipImg from "../../assets/dilip.jpg";
import {
  HomeOutlined,
  RocketOutlined,
  UserOutlined,
  MessageOutlined,
  EnvironmentOutlined,
  BulbOutlined,
  CloudDownloadOutlined,
} from "@ant-design/icons";

export default function LeftNavbar() {
  return (
    <div id="left-navbar">
      <div className="title">
        <div className="logo">
          <img src={dilipImg} alt="portrait pic" />
        </div>
        <div className="name">DILIP KUMAR</div>
        <div className="location">
          <EnvironmentOutlined />
          <span>Chennai, India</span>
        </div>
      </div>
      <div className="body">
        <a href="#home">
          <span className="icon">
            <HomeOutlined />
          </span>
          <span className="text">Home</span>
        </a>
        <a href="#projects">
          <span className="icon">
            <RocketOutlined />
          </span>
          <span className="text">Projects</span>
        </a>
        <a href="#technical-skills">
          <span className="icon">
            <BulbOutlined />
          </span>
          <span className="text">Technical Skills</span>
        </a>
        <a href="#about-me">
          <span className="icon">
            <UserOutlined />
          </span>
          <span className="text">About Me</span>
        </a>
        <a href="#contact">
          <span className="icon">
            <MessageOutlined />
          </span>
          <span className="text">Contact</span>
        </a>
        <a href="#contact">
          <span className="icon">
            <CloudDownloadOutlined />
          </span>
          <span className="text">Download Resume</span>
        </a>
      </div>
    </div>
  );
}
