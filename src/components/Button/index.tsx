import React from 'react';
import { StyledButton } from './styled';

interface ButtonProps {
  className?: string;
  text: string;
  onClick?: () => void;
};
const Button = (props: ButtonProps) => {
  const { className, text, onClick } = props;
  return (
    <StyledButton
      className={className}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
};

export default Button;