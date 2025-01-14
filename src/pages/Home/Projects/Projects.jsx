/* eslint-disable react/prop-types */
import "./Projects.scss";
import { useMemo, useState } from "react";
import { Timeline } from "antd";
import { CaretRightFilled } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";

import DATA from "@/data";

export default function Projects() {
  const isResBelow100px = useMediaQuery({ query: "(max-width: 1400px)" });

  const timelineItems = useMemo(
    () =>
      DATA.PROJECTS.map((project, index) => {
        return {
          key: crypto.randomUUID(),
          // position: index % 2 === 0 ? "left" : "right",
          color: index == 0 ? "green" : "blue",
          label: isResBelow100px ? undefined : (
            <div className="project-label">{project.duration}</div>
          ),
          children: <ProjectDescription {...project} />,
        };
      }),
    [isResBelow100px, DATA.PROJECTS]
  );

  return (
    <div className="projects">
      <h1 className="section-title center">Projects</h1>
      <Timeline
        mode={isResBelow100px ? "left" : "alternate"}
        items={timelineItems}
      />
    </div>
  );
}

function ProjectDescription({
  company,
  logoPath,
  title,
  client,
  duration,
  teamSize,
  environment,
  description,
  responsibilities,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="project-description-container"
      onClick={() => setIsExpanded((cur) => !cur)}
    >
      <div className={"project-description " + (isExpanded ? "" : "minimized")}>
        {company && (
          <h2 className="company">
            {/* <b>Company: </b> */}
            <img className="company-logo" src={logoPath} alt="compamy-logo" />
          </h2>
        )}
        {title && (
          <div className="project-title">
            <p><b>Project: </b></p>
            <h3>{title}</h3>
          </div>
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
              onClick={() => {
                e.stopPropagation();
                setIsExpanded(false);
              }}
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
