import type React from "react";
import "./Container.css"

type ContainerProps = {
  children: React.ReactNode;
  classname?: string;
  as?: React.ElementType;
};

export default function Container({ children, classname = "", as: Component = "div" }: ContainerProps) {
  return <Component className={`container ${classname}`}>
    {children}
  </Component>;
}
