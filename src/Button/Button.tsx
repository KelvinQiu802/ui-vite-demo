import React from 'react';

interface Props {
  text: string;
}

export const Button: React.FC<Props> = ({ text }) => {
  return <button>{text}</button>;
};
