import React from 'react';
import SectionHeader from '../section-header';
import IconButtonBar from '../icon-button-bar';
import Image from '../image';
import './style.scss';

function ProjectSection({ title, projects }) {
  if (!projects || projects.length < 2) return null;
  return (
    <div className="project-section">
      <SectionHeader title={title} />
      <div className="project-wrapper">
        {projects.map((project, index) =>
          index === 0 ? null : (
            <div className="project" key={index}>
              <div className="body">
                <Image className="thumbnail" src={project.thumbnailUrl} />
                <div className="head">
                  {project.title}&nbsp;&nbsp;
                  {project.links && <IconButtonBar links={project.links} />}
                </div>
                <div className="affiliation">{project.affiliation}</div>
                {project.techStack && (
                  <div className="tech-stack">
                    {project.techStack.map((tech, index) => (
                      <div key={index} className="tech">
                        {tech}
                      </div>
                    ))}
                  </div>
                )}
                <div className="sub-title">{project.subTitle}</div>
                <ul className="project-description">
                  {project.descriptions.map((description, index) => {
                    const splitIndex = description.indexOf(':');
                    if (splitIndex !== -1) {
                      const beforeColon = description.slice(0, splitIndex + 1);
                      const afterColon = description.slice(splitIndex + 1);
                      return (
                        <li className="description" key={index}>
                          <strong>{beforeColon}</strong>
                          {afterColon}
                        </li>
                      );
                    }
                    return (
                      <li className="description" key={index}>
                        {description}
                      </li>
                    );
                  })}
                </ul>
                <div className="description">{project.description}</div>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

export default ProjectSection;
