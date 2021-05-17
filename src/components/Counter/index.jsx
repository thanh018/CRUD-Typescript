import React, { useState } from 'react';
import { CounterStyled } from './styled';
import Button from './../Button/index'

const Counter = () => {
  const [clicks, setClicks] = useState(0);
  return (
    <CounterStyled>
      <h1 className="title">
        Counter:
        <span className="count">{clicks}</span>
      </h1>
      <Button
        className="primary mr-15"
        onClick={() => setClicks(clicks+1)}
        text="Increase"
      />
      <Button
        onClick={() => setClicks(0)}
        text="Reset"
      />
    </CounterStyled>
  );
}
export default Counter;