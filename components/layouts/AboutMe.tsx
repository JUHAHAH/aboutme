import React from 'react';
import CodeTyped from './CodeTyped';
import { aboutMe } from '@/constants';
import { Portrait } from './SplineViewer';

const AboutMe = () => {
  return (
    <div className="flex flex-col w-screen justify-center items-center">
      <div className="title">
        <CodeTyped />
      </div>
      <div className="flex">
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
          <div className="title-third">FRONTEND</div>
          {aboutMe.skills.front.map((info) => {
            return (
              <div className="content">
                <span>{info.name}</span>
                <span>:</span>
                <span className="font-galmuri11">{info.detail}</span>
              </div>
            );
          })}
          <div className="title-third mt-4">BACKEND</div>
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
