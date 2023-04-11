import React from 'react';
import IconButtonBar from '../icon-button-bar';
import Image from '../image';
import './style.scss';

function Bio({ author, language = 'ko' }) {
  if (!author) return null;
  const { bio, social, name } = author;

  return (
    <div className="bio">
      <div className="thumbnail-wrapper">
        <Image className="myPicture" src={bio.thumbnail} alt="thumbnail" />
      </div>
      {language === 'ko' ? (
        <div className="introduction korean">
          <p className="title">🧑🏻‍💻{name}</p>
          <p className="description">{bio.description}</p>
          <div className="social-links">
            <IconButtonBar links={social} />
          </div>
        </div>
      ) : (
        <div className="introduction english">
          <p className="title">
            🧑🏻‍💻<string>{name}</string>
          </p>
          <p className="description">{bio.description}</p>
          <div className="social-links">
            <IconButtonBar links={social} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Bio;
