import "./TechnicalSkills.scss";

import DATA from "@/data"

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
        {DATA.TECHNICAL_SKILLS.map((skills, index) => {
          return <SkillBox key={index} imgSrc={skills.skillLogoImgPath} title={skills.title} />
        })}
      </div>
    </div>
  );
}
