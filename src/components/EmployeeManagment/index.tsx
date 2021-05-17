import React, {
  useState,
  useEffect
} from 'react';
import Modal from 'react-modal';
import * as _ from 'lodash';
import { useToasts } from 'react-toast-notifications'
import EmployeeTable from './EmployeeTable/index';
import EmployeeForm from './EmployeeForm/index';
import Spinner from '../Spinner/index';
import Title from '../Title/index';
import Button from '../Button/index';
import {
  StyledEmployeeManagement,
  StyledModal
} from './styled';
import {
  fetchListApi,
  getDetailApi,
  deleteItemApi,
  createItemApi,
  editItemApi,
} from '../../api/index';
import {
  initErrors,
  initFormData,
  errorsType,
  keysForm,
} from './constant';
import {
  CREATED_SUCCESS,
  EDITED_SUCCESS,
  DELETED_SUCCESS,
  ITEM_PER_PAGE,
  NOT_EMPTY,
  INCORRECT_EMAIL,
  NO_DATA_CHANGE,
} from '../../constant/index';
import {
  getTotalPages,
  isCorrectEmail
} from '../../helpers/index'

const EmployeeManagement = () => {
  const { addToast } = useToasts();
  // Notification for API errors
  const showErrorNotification = (text: string) =>
    addToast(text, {
      appearance: 'error',
      autoDismiss: true,
    });
  // Notification for Action successfully
  const showSuccessNotification = (text: string) =>
    addToast(text, {
      appearance: 'success',
      autoDismiss: true,
    });

  // A Number of Employee of 1 page
  const [employeeList, setEmployeeList] = useState([]);
  // All of employees
  const [total, setTotal] = useState(0);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  // Data of form edit / create employee
  const [formData, setFormData] = useState(initFormData);
  // Origin Detail of an employee
  const [originDetailEmployee, setOriginDetailEmployee] = useState(initFormData);
  // Store errors of fields when validate form
  const [errors, setErrors] = useState(initErrors);
  // Loading for spinner when wait to the API response the data
  const [loading, setLoading] = useState(false);
  // Open and Close the Popup
  const [isOpen, setIsOpen] = useState(false);

  // Fetch employees in a page
  const fetchEmployeeList = (page = 1) => {
    setLoading(true);
    fetchListApi(page < 1 ? 1 : page)
      .then(res => {
        // List employee per a page
        const list = _.get(res, 'data.list', []);
        // Total All of the employee of all the page
        const total = _.get(res, 'data.total', 0);
        setCurrentPageIndex(page);
        setTotal(total);
        setEmployeeList(list);
        setLoading(false);
      })
      .catch((error) => {
        // Notification error of API
        showErrorNotification(error.messageContent);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchEmployeeList();
    // No need dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getDetailEmployee = async (id:string) => {
    setIsOpen(true);
    setLoading(true);
    getDetailApi(id)
      .then(res => {
        // Original infomation of a employee
        setOriginDetailEmployee(res.data);
        setFormData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        showErrorNotification(error.messageContent);
        setLoading(false);
      });
  };

  const deleteEmployee = async (id:string) => {
    setLoading(true);
    deleteItemApi(id)
      .then(res => {
        if (!_.isEmpty(res.data)) {
          showSuccessNotification(DELETED_SUCCESS);
          // Current page, there is only an employee
          // After deleled this employee =>
          // Go to the previous page
          if (employeeList.length === 1) {
            fetchEmployeeList(currentPageIndex - 1);
          } else {
            // Others case: keep being current page
            fetchEmployeeList(currentPageIndex);
          }
          setLoading(false);
        }
      })
      .catch((error) => {
        showErrorNotification(error.messageContent);
        setLoading(false);
      });
  };

  // Get errors if email is not correct
  const checkEmail = (value: string) => {
    // Error when Email is empty
    if (value.trim() === '')
      setErrors({
        ...errors,
        email: NOT_EMPTY('email')
      });
    // Error when Email is not correct
    else {
      const isEmailCorrect = isCorrectEmail(value);
      setErrors({
        ...errors,
        email: isEmailCorrect ? '' : INCORRECT_EMAIL
      });
    }
  }

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    // Get errors for email
    if (name === 'email') {
      checkEmail(value);
    } else {
      // Other fields: name or position
      setErrors({
        ...errors,
        [name]: value.trim() ? '' : NOT_EMPTY(name)
      });
    }
  };

  const submitForm = () => {
    const id = _.get(formData, 'id', '');
    if (id) {
      // No changes when edit a employee
      if (_.isEqual(originDetailEmployee, formData)) {
        addToast(NO_DATA_CHANGE, {
          appearance: 'warning',
          autoDismiss: true,
        });
        return;
      }
    }
    // Store errors for form fields
    let errorsTemp: errorsType = {};
    for (let key of keysForm) {
      if (key === 'email') {
        errorsTemp[key] =
          !formData[key].trim().length ?
          NOT_EMPTY(key) : !isCorrectEmail(formData[key]) ? 
          INCORRECT_EMAIL : '';
      } else {
        errorsTemp[key] = formData[key].length ? '' : NOT_EMPTY(key);
      }
    }

    setErrors(errorsTemp);

    // Check if or not have any errors
    const isErrors = Object.values(errorsTemp).some((val) => val !== '');
    if (isErrors)
      return;

    const saveEmp = () => {
      setLoading(true);
      // Edit an empoyloyee
      if (id) {
        editItemApi(formData)
          .then(res => {
            if (!_.isEmpty(res.data)) {
              // Show notification if edited successfully
              showSuccessNotification(EDITED_SUCCESS);
              // Get latest employee list in the CURRENT page
              fetchEmployeeList(currentPageIndex);
              setLoading(false);
              closeEmployee();
            }
          })
          .catch((error) => {
            showErrorNotification(error.messageContent);
            setLoading(false);
          });
      } else {
        // New employee
        createItemApi(formData)
          .then(res => {
            if (!_.isEmpty(res.data)) {
              showSuccessNotification(CREATED_SUCCESS);
              setLoading(false);
              const lastPageIndex = getTotalPages(total, ITEM_PER_PAGE);
              // If the number of page increases 1 after create an employee
              // This new employee will be displayed the next page
              if (total % ITEM_PER_PAGE === 0) {
                fetchEmployeeList(lastPageIndex + 1);
              } else {
                // Go to last page after created a new employee
                fetchEmployeeList(lastPageIndex);
              }
              closeEmployee();
            }
          })
          .catch((error) => {
            showErrorNotification(error.messageContent);
            setLoading(false);
          });
      }
    };
    saveEmp();
  };

  // CLOSE THE POPUP + RESET BACK INIT DATA
  const closeEmployee = () => {
    setIsOpen(false); // Turn off Popup
    setFormData(initFormData); // Reset data of form
    setErrors(initErrors); // Reset the errors
    setLoading(false); // Turn off Loading
  };

  return (
    <Spinner loading={loading}>
      <StyledEmployeeManagement>
        <Title text="Employee Management" />
        <div className="new-wrap">
          <Button
            className="secondary"
            onClick={() => setIsOpen(true)}
            text="New"
          />
        </div>
        <EmployeeTable
          employeeList={employeeList}
          total={total}
          currentPageIndex={currentPageIndex}
          getDetailEmployee={getDetailEmployee}
          deleteEmployee={deleteEmployee}
          fetchEmployeeList={fetchEmployeeList}
        />

        <StyledModal isOpen={isOpen} >
          <div className="modal-inner">
            <EmployeeForm
              formData={formData}
              errors={errors}
              handleInput={handleInput}
              submitForm={submitForm}
              closeEmployee={closeEmployee}
            />
          </div>
        </StyledModal>
      </StyledEmployeeManagement>
    </Spinner>

  )
}

Modal.setAppElement("#root");
export default EmployeeManagement;