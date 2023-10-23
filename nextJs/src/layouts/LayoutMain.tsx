"use client";
import React from "react";
import Menu from '../components/Menu/Menu';
interface LayoutMainProps {
  children: React.ReactNode;
}

const LayoutMain: React.FC<LayoutMainProps> = ({ children }) => {
 
  return (
    <div>
        <Menu />
        {children}
    </div>
  );
};

export default LayoutMain;
