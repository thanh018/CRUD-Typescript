import styled from 'styled-components';

export const StyledEmployeeForm = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;

  input {
    margin: 0;
    width: 92%;
  }

  form {
    > div {
      margin-bottom: 10px;
    }
  }

  .close-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    min-width: 55px;
    font-size: 12px;
    height: 25px;
    margin-right: 0;
  }

  .button-wrap {
    padding-top: 30px;
    text-align: center;
  }
`;