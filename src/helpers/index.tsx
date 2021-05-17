import { REGEX_EMAIL } from './../constant/index';

// Get total pages from total employee and number of items per a page
export const getTotalPages = (totalItem: number, itemPerPage: number) => {
  if (!totalItem) return 0;
  const num1 = Math.floor(totalItem / itemPerPage);
  const num2 = totalItem / itemPerPage - Math.floor(totalItem / itemPerPage);
  const totalPage = num1 + (num2 > 0 ? 1 : 0);
  return totalPage;
}

// Check Email Correct Format
export const isCorrectEmail = (value: string) => {
  const newRegex = new RegExp(REGEX_EMAIL);
  return newRegex.test(value.trim());
};