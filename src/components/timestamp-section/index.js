import React from 'react';
import SectionHeader from '../section-header';
import './style.scss';

function TimeStampSection({ timestamps }) {
  if (!timestamps || timestamps.length < 2) return null;
  return (
    <div className="timestamp-section">
      <SectionHeader title="Timestamps" />
      <div className="body">
        {timestamps.map((timestamp, index) =>
          index === 0 ? null : (
            <div className="timestamp" key={index}>
              <div className="date">{timestamp.date}</div>
              <a className="activity" href={timestamp.link} target="_blank">
                {timestamp.activity}
              </a>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

export default TimeStampSection;
