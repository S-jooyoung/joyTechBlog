import React from 'react';
import SectionHeader from '../section-header';
import './style.scss';

// jobDescriptions 안의 [라벨](url) 표기를 링크로 렌더한다.
const LINK_PATTERN = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g;

function renderWithLinks(text) {
  const nodes = [];
  let lastIndex = 0;
  let match;

  const pattern = new RegExp(LINK_PATTERN.source, 'g');
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index));
    nodes.push(
      <a
        className="description-link"
        key={match.index}
        href={match[2]}
        target="_blank"
        rel="noreferrer"
      >
        {match[1]}
      </a>,
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes.length ? nodes : text;
}

// 라벨 콜론을 찾을 때 링크 구간은 제외한다 — URL의 'https:' 콜론에 걸리면 볼드가 깨진다.
function findLabelColon(text) {
  const masked = text.replace(new RegExp(LINK_PATTERN.source, 'g'), (m) => ' '.repeat(m.length));
  return masked.indexOf(':');
}

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
                    const splitIndex = findLabelColon(jobDescription);
                    if (splitIndex !== -1) {
                      const beforeColon = jobDescription.slice(0, splitIndex + 1);
                      const afterColon = jobDescription.slice(splitIndex + 1);
                      return (
                        <li className="description" key={index}>
                          <strong>{beforeColon}</strong>
                          {renderWithLinks(afterColon)}
                        </li>
                      );
                    }
                    return (
                      <p className="description" key={index}>
                        {renderWithLinks(jobDescription)}
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
