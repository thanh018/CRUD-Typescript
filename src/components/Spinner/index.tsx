import React from 'react';
import { SpinnerStyled } from './styled';

interface ISpinner {
  loading: boolean;
  children: React.ReactNode;
}

const Spinner = (props: ISpinner) => {
  const { loading = false, children } = props;
  return (
      <SpinnerStyled>
        <div
          className={`${loading ? 'loading' : 'd-none'}`}
        >
          <div className="icon-spinner" />
        </div>
        {children}
      </SpinnerStyled>
  );
}
export default Spinner;