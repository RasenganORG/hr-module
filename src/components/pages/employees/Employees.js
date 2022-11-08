import React, { useEffect } from 'react';
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
  const handleGoToEmployeePage = (id) => {
    dispatch(reset());
    navigate(`/employees/${id}`);
  };

  useEffect(() => {
    dispatch(getAllEmployees());
  }, []);

  console.log(employees);

  return (
    <div>
      <Search
        placeholder='input search text'
        allowClear
        enterButton='Search'
        size='large'
        // onSearch={onSearch}
      />
      {employees.length > 0 && (
        <List
          dataSource={employees}
          renderItem={(employee) => (
            <Form.Item>
              <Card
                title={employee.personalInformation.name}
                onClick={() => {
                  console.log(employee.id);
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
