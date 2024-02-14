import React from "react";

type ContainerProps = { children: React.ReactNode };

export const Container: React.FC<ContainerProps> = ({ children }) => (
  <div className="container">{children}</div>
);
