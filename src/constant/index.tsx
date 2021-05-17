export const BASE_URL = 'https://609e1e8533eed80017957b45.mockapi.io/users';

// A NUMBER OF EMPLOYEES ON A PAGE
export const ITEM_PER_PAGE = 5;

// MESSAGE FOR FORM VALIDATION
export const INCORRECT_EMAIL = 'Email is not correct';
export const NOT_EMPTY = (field: string) => `${field} must not be empty`;

// REGEX FOR CHECK EMAIL
export const REGEX_EMAIL = /^([A-Za-z0-9.]){1,40}@([A-Za-z0-9.]){1,40}$/;

// MESSAGE FOR NOTIFICATION: CREATE, UPDATE, DELETE
// AND NO CHANGE DATA OF DETAIL EMPLOYEE
export const CREATED_SUCCESS = 'Created an employee successfully';
export const EDITED_SUCCESS = 'Edited an employee successfully';
export const DELETED_SUCCESS = 'Deleted an emloyee successfully';
export const NO_DATA_CHANGE = 'NO data changes';
