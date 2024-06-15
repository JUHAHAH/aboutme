import React from 'react';
import CodeTyped from './CodeTyped';
import { aboutMe } from '@/constants';
import { Portrait } from './SplineViewer';

const AboutMe = () => {
  return (
    <div>
      <div className="title">
        <CodeTyped />
      </div>

      <div className="flex crt">
        <div>
          <Portrait />
        </div>

        <div>
          <div className="title-second">ABOUT ME</div>
          {aboutMe.bio.map((info) => {
            return (
              <div className="content">
                <span>{info.name}</span>
                <span>:</span>
                <span className="font-galmuri11">{info.detail}</span>
              </div>
            );
          })}
          <div className="title-second">SKILLS</div>
          <div className="title-third">FRONT</div>
          {aboutMe.skills.front.map((info) => {
            return (
              <div className="content">
                <span>{info.name}</span>
                <span>:</span>
                <span className="font-galmuri11">{info.detail}</span>
              </div>
            );
          })}
          <div className="title-third">BACKEND</div>
          {aboutMe.skills.back.map((info) => {
            return (
              <div className="content">
                <span>{info.name}</span>
                <span>:</span>
                <span className="font-galmuri11">{info.detail}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
