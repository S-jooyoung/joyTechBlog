import React from 'react';
import SectionHeader from '../section-header';
import './style.scss';

function TimeStampSection({ title, timestamps }) {
  if (!timestamps || timestamps.length < 2) return null;
  return (
    <div className="timestamp-section">
      <SectionHeader title={title} />
      <div className="body">
        {/* eslint-disable-next-line jsx-a11y/no-redundant-roles -- list-style: none이어도 Safari VoiceOver가 목록으로 읽게 */}
        <ol className="timeline" role="list">
          {timestamps.map((timestamp, index) =>
            index === 0 ? null : (
              <li className="timestamp" key={index}>
                <p className="timestamp-date">{timestamp.date}</p>
                <p className="activity">
                  {timestamp.link ? (
                    <a
                      className="activity-title"
                      href={timestamp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {timestamp.activity}
                    </a>
                  ) : (
                    <span className="activity-title">{timestamp.activity}</span>
                  )}
                </p>
                <p className="job-title">{timestamp.job}</p>
                {timestamp.activityDescription && (
                  <p className="activity-description">{timestamp.activityDescription}</p>
                )}
              </li>
            ),
          )}
        </ol>
      </div>
    </div>
  );
}

export default TimeStampSection;
