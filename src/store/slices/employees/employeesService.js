import axios from 'axios';

const API_EMPLOYEE_URL = 'http://localhost:8083/api/employee/';

const getEmployee = async (id) => {
  const response = await axios.get(`${API_EMPLOYEE_URL}${id}`);

  return response.data;
};

const employeesService = {
  getEmployee,
};

export default employeesService;
