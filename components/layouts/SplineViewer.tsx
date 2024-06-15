import React, { useRef } from 'react';
import Spline from '@splinetool/react-spline/next';

type AppLayoutProps = {
  children: React.ReactNode;
};

export const Portrait = () => {
  return (
    <div className="w-[500px] h-[500px]">
      <Spline scene="https://prod.spline.design/K4DB9Kg2XkwlerlE/scene.splinecode" />
    </div>
  );
};

const SplineViewer = ({ children }: AppLayoutProps) => {
  return (
    <div className="h-screen">
      <div className="">hahaha</div>

      <div className="">{children}</div>
      <div className="absolute justify-center flex self-center w-full mt-[9.6rem]"></div>
      <Spline scene="https://prod.spline.design/6pgQTKLMlpd6qqTy/scene.splinecode" />
    </div>
  );
};

export default SplineViewer;
