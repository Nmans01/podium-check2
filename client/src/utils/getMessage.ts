const BASE_URL = 'http://localhost:3000/api';

export const getMessage = async () => {
  const response = await fetch(BASE_URL+'/message');
  const data = await response.json();
  return data;
};