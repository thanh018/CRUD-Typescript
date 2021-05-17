export type formType = {
  [key: string]: string
}

export type errorsType = {
  [key: string]: string
}

export const initErrors: errorsType = {
  name: '',
  email: '',
  position: '',
}

export const initFormData: formType = {
  name: '',
  email: '',
  position: '',
};

export const keysForm: Array<string> =
  ['name', 'email', 'position'];
