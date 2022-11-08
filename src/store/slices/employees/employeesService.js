import axios from 'axios';

const API_EMPLOYEE_URL = 'http://localhost:8083/api/employee/';
const API_EMPLOYEES_URL = 'http://localhost:8083/api/employees/';

const getAllEmployees = async (id) => {
  const response = await axios.get(`${API_EMPLOYEES_URL}`);

  return response.data;
};

const getEmployee = async (id) => {
  const response = await axios.get(`${API_EMPLOYEE_URL}${id}`);

  return response.data;
};

const editEmployee = async (data) => {
  console.log({ data });
  const response = await axios.put(`${API_EMPLOYEE_URL}${data.id}`, data);

  console.log('response.data', response.data);
};

const employeesService = {
  getAllEmployees,
  getEmployee,
  editEmployee,
};

export default employeesService;
