import React from "react";

import { ProjectsType } from "./Projects";

export const projectComponent = (
  projectData: ProjectsType,
  scrollStatus: number,
  reversed?: boolean
) => {
  const project = projectData;
  const offSetProjectsTopStyle =
    scrollStatus > project.scrollStatus
      ? `${project.container + " " + project.renderStyle}`
      : project.container;
  const mappedFeatures = project.desctiptionFeatures.map((el) => {
    return (
      <React.Fragment key={crypto.randomUUID()}>
        <span>{el}</span>
        <br />
      </React.Fragment>
    );
  });
  const usualJSX = (
    <>
      <h3 className={project.projectTextStyle}>{project.projectName}</h3>
      <span className={project.desctiptionStyle}>
        <h4>Usefull Features: </h4>
        <p>{mappedFeatures}</p>
      </span>
      <div className={project.projectPicture}>
        <a
          className={project.buttonsStyleCode}
          id={project.repo}
          href={project.repo}
        >
          CODE
        </a>
        <a
          className={project.buttonsStyleDemo}
          id={project.demo}
          href={project.demo}
        >
          DEMO
        </a>
      </div>
    </>
  );
  const reversedJSX = (
    <>
      <div className={project.projectPicture}>
        <a
          className={project.buttonsStyleCode}
          id={project.repo}
          href={project.repo}
        >
          CODE
        </a>
        <a
          className={project.buttonsStyleDemo}
          id={project.demo}
          href={project.demo}
        >
          DEMO
        </a>
      </div>
      <span className={project.desctiptionStyle}>
        <h4>Usefull Features: </h4>
        <p>{mappedFeatures}</p>
      </span>
      <h3 className={project.projectTextStyle}>{project.projectName}</h3>
    </>
  );
  return (
    <div className={offSetProjectsTopStyle}>
      {reversed ? reversed && reversedJSX : !reversed && usualJSX}
    </div>
  );
};

export default projectComponent;
