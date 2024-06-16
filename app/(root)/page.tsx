import AboutMe from '@/components/layouts/AboutMe';
import SplineViewer, { Portrait } from '@/components/layouts/SplineViewer';
import React from 'react';

const Home = () => {
  return (
    <div>
      <div className="h-screen">
        <AboutMe />
      </div>
      <div>
        <SplineViewer>dasd</SplineViewer>
      </div>
    </div>
  );
};

export default Home;
