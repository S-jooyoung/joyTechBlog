import React from 'react';
import SectionHeader from '../section-header';
import './style.scss';

function IntroduceSection({ title, descriptions }) {
  return (
    <div className="introduce-section">
      <SectionHeader title={title} />
      <div className="introduce-wrapper">
        <div className="descriptions">
          {descriptions.map((description) => (
            <p className="description">{description}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default IntroduceSection;
