import React from 'react';
import { StyledErrorMessage } from './styled';

type errorsType = {
  [key: string]: string
}

interface ErrorMessageProps {
  errors: errorsType;
  name: string;
}


const ErrorMessage = (props: ErrorMessageProps) => {
  const {errors, name } = props;
  if (errors[name].length)
    return (
      <StyledErrorMessage>
        {errors[name]}
      </StyledErrorMessage>
    );
  return null;
}
export default ErrorMessage;