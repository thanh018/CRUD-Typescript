import styled from 'styled-components';
import Modal from 'react-modal';

export const StyledEmployeeManagement = styled.div`
  width: 80%;
  .new-wrap {
    text-align: right;
    padding-bottom: 30px;
  }
`;

export const StyledModal = styled(Modal)`
  .modal-inner {
    width: 600px;
    height: 500px;
    background-color: #fff;
    border-radius: 10px;
    padding: 15px;
    margin: 0 auto;
    top: 40%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    border: 1px solid #ddd;
  }
`;
