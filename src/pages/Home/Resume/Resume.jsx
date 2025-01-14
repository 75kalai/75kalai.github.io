import "./Resume.scss";
import { ExportOutlined, FileOutlined } from "@ant-design/icons";

import DATA from "@/data";

export default function Resume() {
  return (
    <div id="resume">
      <h1 className="section-title center">Get My Resume!</h1>
      <a href={DATA.RESUME.path} download className="resume-content" target="_blank">
        <div className="icon">
          <FileOutlined />
        </div>
        <p>
          Open Resume <ExportOutlined />
        </p>
      </a>
    </div>
  );
}
