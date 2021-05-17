import React from "react";
import { StyledInput } from "./styled";

interface InputProps {
    type: string;
    name: string;
    value?: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  const {
    type,
    name,
    value,
    placeholder,
    onChange
  } = props;
  return (
    <StyledInput
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
