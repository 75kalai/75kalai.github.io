/* eslint-disable react/prop-types */
import "./Projects.scss";
import { useState } from "react";
import { Timeline } from "antd";
import { CaretRightFilled } from "@ant-design/icons";

import wiproLogo from "../../../assets/Wipro_Logo_Bg.avif";
import ctsLogo from "../../../assets/Cognizant_Logo_Bg.jpg";
import { projectData } from "./projectData";

export default function Projects() {
  const timelineItems = projectData.map((project, index) => {
    return {
      key: crypto.randomUUID(),
      // position: index % 2 === 0 ? "left" : "right",
      color: index == 0 ? "green" : "blue",
      label: <div className="project-label">{project.duration}</div>,
      children: <ProjectDescription {...project} />,
    };
  });

  return (
    <div className="projects">
      <h1 className="section-title center">Projects</h1>
      <Timeline mode="alternate" items={timelineItems} />
    </div>
  );
}

function ProjectDescription({
  company,
  title,
  client,
  duration,
  teamSize,
  environment,
  description,
  responsibilities,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const companyLogo = company === "wipro" ? wiproLogo : ctsLogo;

  return (
    <div
      className="project-description-container"
      onClick={() => setIsExpanded((cur) => !cur)}
    >
      <div className={"project-description " + (isExpanded ? "" : "minimized")}>
        {company && (
          <h2 className="company">
            <b>Company: </b>
            <img
              className="company-logo"
              src={companyLogo}
              alt="compamy-logo"
            />
          </h2>
        )}
        {title && (
          <h3>
            <b>Title: </b>
            {title}
          </h3>
        )}
        {client && (
          <p>
            <b>Client: </b>
            {client}
          </p>
        )}
        {duration && (
          <p>
            <b>Duration: </b>
            {duration}
          </p>
        )}
        {teamSize && (
          <p>
            <b>Team Size: </b>
            {teamSize}
          </p>
        )}
        {environment && (
          <p>
            <b>Environment: </b>
            {environment}
          </p>
        )}
        {description && (
          <p>
            <b>Description: </b>
            {description}
          </p>
        )}
        {responsibilities && (
          <div>
            <h3>Responsibilities</h3>
            <ul>
              {responsibilities.map((responsibility, index) => (
                <p key={index}>
                  <CaretRightFilled style={{ color: "rgb(98 147 250)" }} />
                  {responsibility}
                </p>
              ))}
            </ul>
          </div>
        )}
        <div
          className={
            "container-resizer center " + (isExpanded ? "" : "minimized")
          }
        >
          {isExpanded ? (
            <div
              className="button text-button"
              onClick={() => setIsExpanded(false)}
            >
              Show Less
            </div>
          ) : (
            <div
              className="button text-button"
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(true);
              }}
            >
              Show More{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
