import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Form, List, Input } from 'antd';
import {
  getAllEmployees,
  reset,
} from '../../../store/slices/employees/employeesSlice';
import { useNavigate } from 'react-router-dom';
const { Search } = Input;

function Employees() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { employees } = useSelector((state) => state.employees);
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  const handleGoToEmployeePage = (id) => {
    dispatch(reset());
    navigate(`/employees/${id}`);
  };

  // get employees from api
  useEffect(() => {
    dispatch(getAllEmployees());
  }, []);

  // whenever we get the employees list from backend, store them in filteredEmployees
  useEffect(() => {
    setFilteredEmployees(employees);
  }, [employees]);

  const onChange = (event) => {
    const searchValue = event.target.value.toLowerCase();
    const newDataEmployees = employees.filter((employee) =>
      employee.personalInformation.name.toLowerCase().includes(searchValue)
    );
    setFilteredEmployees(newDataEmployees);
  };

  return (
    <div>
      <Search
        placeholder='input search text'
        allowClear
        enterButton='Search'
        size='large'
        onChange={onChange}
        // onSearch={onSearch}
      />
      {filteredEmployees.length > 0 && (
        <List
          dataSource={filteredEmployees}
          renderItem={(employee) => (
            <Form.Item>
              <Card
                title={employee.personalInformation.name}
                onClick={() => {
                  handleGoToEmployeePage(employee.id);
                }}
              >
                {employee.personalInformation.email}
              </Card>
            </Form.Item>
          )}
        />
      )}
    </div>
  );
}

export default Employees;
