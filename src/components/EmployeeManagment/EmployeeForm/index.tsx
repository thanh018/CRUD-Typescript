import React from 'react';
import Title from '../../Title/index';
import Button from '../../Button/index';
import Input from '../../Input/index';
import ErrorMessage from '../../ErrorMessage/index';
import { StyledEmployeeForm } from './styled';

type formType = {
  [key: string]: string
}

type errorsType = {
  [key: string]: string
}

interface IEmloyeeForm {
  formData: formType;
  errors: errorsType;
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  submitForm: () => void;
  closeEmployee: () => void;
}

const EmployeeForm = (props: IEmloyeeForm) => {
  const {
    formData,
    errors,
    handleInput,
    submitForm,
    closeEmployee
  } = props;
  return (
      <StyledEmployeeForm>
        <Title
          text={
            `${formData && formData.id ? 
              'Edit an employee' : 'New employee'}`
          }
        />
        <Button
          className="close-btn"
          onClick={closeEmployee}
          text="Close"
        />
        <form>
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Alex"
              value={formData.name}
              onChange={handleInput}
            />
            <ErrorMessage
              errors={errors}
              name="name"
            />
          </div>
          <div>
            <Input
              type="text"
              name="email"
              placeholder="Example@example.com"
              value={formData.email}
              onChange={handleInput}
            />
            <ErrorMessage
              errors={errors}
              name="email"
            />
          </div>
          <div>
            <Input
              type="text"
              name="position"
              placeholder="Software Engineer"
              value={formData.position}
              onChange={handleInput}
            />
            <ErrorMessage
              errors={errors}
              name="position"
            />
          </div>
        </form>
        <div className="button-wrap">
          <Button
            className="primary"
            onClick={submitForm}
            text="Save"
          />
        </div>
      </StyledEmployeeForm>
  );
}
export default EmployeeForm;