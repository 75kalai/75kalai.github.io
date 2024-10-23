import "./TechnicalSkills.scss";

import AngularLogo from "../../../assets/logos/angular_gradient.png";
import JavaLogo from "../../../assets/logos/icons8-java.svg";
import JavaScriptLogo from "../../../assets/logos/icons8-javascript.svg";
import SpringLogo from "../../../assets/logos/spring.svg";
import SpringBatchLogo from "../../../assets/logos/spring batch.png";
import SpringBootLogo from "../../../assets/logos/icons8-spring-boot.svg";
import SpringToolsLogo from "../../../assets/logos/spring-tool.svg";
import ReduxLogo from "../../../assets/logos/icons8-redux.svg";
import MySQLLogo from "../../../assets/logos/icons8-mysql.svg";
import PostgresLogo from "../../../assets/logos/icons8-postgres.svg";
import DB2Logo from "../../../assets/logos/ibm db2.svg";
import EclipseLogo from "../../../assets/logos/eclipse.svg";
import GitLogo from "../../../assets/logos/icons8-git.svg";
import GitHubLogo from "../../../assets/logos/icons8-git (1).svg";
import GitLab from "../../../assets/logos/icons8-gitlab.svg";
import TortoiseSVNLogo from "../../../assets/logos/tortoise svn.png";
import VSCodeLogo from "../../../assets/logos/vscode.svg";

function SkillBox({ imgSrc, title }) {
  return (
    <div className="box box-">
      <div className="img-container">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="title">{title}</div>
    </div>
  );
}

export default function TechnicalSkills() {
  return (
    <div className="technical-skill-section">
      <h1 className="section-title center">Technical Skills</h1>

      <div className="technical-skills">
        <SkillBox imgSrc={JavaScriptLogo} title="JavaScript" />
        <SkillBox imgSrc={AngularLogo} title="Angular" />
        <SkillBox imgSrc={ReduxLogo} title="Redux" />
        <SkillBox imgSrc={JavaLogo} title="Java" />
        <SkillBox imgSrc={SpringLogo} title="Spring" />
        <SkillBox imgSrc={SpringBootLogo} title="Spring Boot" />
        <SkillBox imgSrc={SpringBatchLogo} title="Spring Batch" />
        <SkillBox imgSrc={MySQLLogo} title="MySQL" />
        <SkillBox imgSrc={PostgresLogo} title="Postgres" />
        <SkillBox imgSrc={DB2Logo} title="DB2" />
        <SkillBox imgSrc={EclipseLogo} title="Eclipse" />
        <SkillBox imgSrc={SpringToolsLogo} title="Spring Tools" />
        <SkillBox imgSrc={VSCodeLogo} title="VS Code" />
        <SkillBox imgSrc={GitLogo} title="Git" />
        <SkillBox imgSrc={GitHubLogo} title="GitHub" />
        <SkillBox imgSrc={GitLab} title="GitLab" />
        <SkillBox imgSrc={TortoiseSVNLogo} title="Tortoise SVN" />
      </div>
    </div>
  );
}
