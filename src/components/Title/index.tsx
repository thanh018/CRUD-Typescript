import React from 'react';
import { StyledTitle } from './styled';

interface ITitle {
  text: string;
}

const Title = (props: ITitle) => {
  const { text } = props;
  return (
      <StyledTitle>
        {text}
      </StyledTitle>
  );
}
export default Title;