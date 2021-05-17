import styled from 'styled-components';

export const StyledEmployeeTable = styled.div`
  width: 100%;
  .table-wrap {
    margin-bottom: 25px;
  }

  table {
    border: 1px solid rgb(220,224,233);
    border-collapse: collapse;
    border-radius: 2px 2px 0 0;
    border-spacing: 0;
    text-align: center;
    width: 100%;
    font-size: 14px;

    th {
      width: 25%;
    }

    th, td {
      border: 1px solid rgb(220,224,233);
      border-collapse: collapse;
      padding: 15px 20px;
    }

    td {
      &.td-name,
      &.td-position {
        text-transform: capitalize;
      }
    }
  }

  .no-data {
    text-align: center;
    margin: 0;
    padding: 70px 15px;
    border: 1px solid rgb(220, 224, 233);
    border-top: none;
  }

  .pagination {
    ul {
      display: flex;
      list-style-type: none;
      justify-content: center;

      li {
        padding: 3px 8px;
        margin: 0 5px;
        background-color: #ddd;
        color: white;
        border-radius: 2px;
        width: 15px;
        text-align: center;
        height: 18px;
        line-height: 16px;
        cursor: pointer;
        transition: all 0.2s ease;
        font-size: 13px;

        &:hover {
          background-color: #b3afaf;
        }
        
        &.active {
          background-color: #329252;

          &:hover {
            background-color: #2a7744;
          }

        }
      }
    }
  }
`;