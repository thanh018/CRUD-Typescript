import React from 'react';
import { StyledEmployeeTable } from './styled';
import Button from '../../Button/index';
import { getTotalPages } from '../../../helpers/index';
import { ITEM_PER_PAGE } from '../../../constant/index';

interface IEmployee {
  id: string;
  name: string;
  email: string;
  position: string;
}

interface IEmployeeTableProps {
  employeeList: Array<IEmployee>;
  total: number;
  currentPageIndex: number;
  getDetailEmployee: (id: string) => void;
  deleteEmployee: (id: string) => void;
  fetchEmployeeList: (id: number) => void;
}

const renderPagination = (
  totalItems:number,
  currentPageIndex: number,
  fetchEmployeeList: Function) => {

  const totalPages = getTotalPages(totalItems, ITEM_PER_PAGE);

  let results = [];
  for (let i = 1; i <= totalPages; i++) {
    results.push(i);
  }
  return (
    <ul>
      {
        results.map(rs=>
          <li
            onClick={() => fetchEmployeeList(rs)}
            key={rs}
            className={`${currentPageIndex === rs ? 'active' : ''}`}
          >
            {rs}
          </li>
        )
      }
    </ul>
  );
} 

const EmployeeTable = (props: IEmployeeTableProps) => {
  const {
    employeeList,
    total,
    currentPageIndex,
    getDetailEmployee,
    deleteEmployee,
    fetchEmployeeList,
  } = props;
  return (
    <StyledEmployeeTable>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th className="th emp-name">Name</th>
              <th className="th emp-email">Email</th>
              <th className="th emp-postion">Position</th>
              <th className="th emp-action">Action</th>
            </tr>
          </thead>
          <tbody>
            {employeeList.length > 0 &&
              employeeList.map(({id, name, email, position})=>(
              <tr key={id}>
                <td className="td td-name">{name}</td>
                <td className="td td-email">{email}</td>
                <td className="td td-position">{position}</td>
                <td className="td td-action">
                  <Button
                    className="primary small mr-15"
                    onClick={() => getDetailEmployee(id)}
                    text="Edit"
                  />
                  <Button
                    className="danger small"
                    onClick={() => deleteEmployee(id)}
                    text="Delete"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!employeeList.length && <p className="no-data">No employee</p>}
      </div>
      <div className="pagination">
        {
          employeeList.length > 0 &&
          renderPagination(total, currentPageIndex, fetchEmployeeList)
        }
      </div>
    </StyledEmployeeTable>
  );
}
export default EmployeeTable;