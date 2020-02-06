/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

export interface ButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  link?: string;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, link, ...other }) => {
  return (
    <a href={link} {...other}>
      {children}
    </a>
  );
};

export default Button;
