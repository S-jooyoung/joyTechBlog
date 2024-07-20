import React from 'react';
import SectionHeader from '../section-header';
import './style.scss';

function TimeStampSection({ title, timestamps }) {
  if (!timestamps || timestamps.length < 2) return null;
  return (
    <div className="timestamp-section">
      <SectionHeader title={title} />
      <div className="body">
        {timestamps.map((timestamp, index) =>
          index === 0 ? null : (
            <div className="timestamp" key={index}>
              <div className="activity">
                <a className="activity-title" href={timestamp.link} target="_blank">
                  {timestamp.activity}
                </a>
                <p className="activity-description">{timestamp.activityDescription}</p>
              </div>
              <div className="job-wrapper">
                <div className="job">
                  <div className="job-title">{timestamp.job}</div>
                  <div className="job-date">{timestamp.date}</div>
                </div>
                <ul className="job-description">
                  {timestamp.jobDescriptions.map((jobDescription, index) => {
                    const splitIndex = jobDescription.indexOf(':');
                    if (splitIndex !== -1) {
                      const beforeColon = jobDescription.slice(0, splitIndex + 1);
                      const afterColon = jobDescription.slice(splitIndex + 1);
                      return (
                        <li className="description" key={index}>
                          <strong>{beforeColon}</strong>
                          {afterColon}
                        </li>
                      );
                    }
                    return (
                      <p className="description" key={index}>
                        {jobDescription}
                      </p>
                    );
                  })}
                </ul>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

export default TimeStampSection;
