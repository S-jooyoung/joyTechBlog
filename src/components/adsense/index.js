import React from 'react';
import AdSense from 'react-adsense';
import './style.scss';

const Adsense = ({ client, slot }) => {
  return (
    <div className="adsense-wrapper">
      <AdSense.Google
        client={client}
        slot={slot}
        style={{ display: 'block', maxWidth: '100%' }}
        format="auto"
        responsive="true"
      />
    </div>
  );
};

export default Adsense;
