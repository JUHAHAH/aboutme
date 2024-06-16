import React, { useRef } from 'react';
import Spline from '@splinetool/react-spline/next';

type AppLayoutProps = {
  children: React.ReactNode;
};

export const Portrait = () => {
  return (
    <div>
      <Spline scene="https://prod.spline.design/K4DB9Kg2XkwlerlE/scene.splinecode" />
    </div>
  );
};

const SplineViewer = ({ children }: AppLayoutProps) => {
  return (
    <div className="w-screen">
      <div className="">{children}</div>
      <Spline
        className="absolute flex justify-center top-0 -z-10 w-full"
        scene="https://prod.spline.design/6pgQTKLMlpd6qqTy/scene.splinecode"
      />
    </div>
  );
};

export default SplineViewer;
