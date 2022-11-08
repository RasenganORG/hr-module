import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Tabs } from 'antd';
import PersonalInformation from './tabs/PersonalInformation';
import ContractInformation from './tabs/ContractInformation';
import { getEmployee } from '../../../store/slices/employees/employeesSlice';

function Employee() {
  const { employeeId } = useParams();
  const { employee, isLoading } = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  const items = [
    {
      label: 'Personal Information',
      key: 'personal-information',
      children: <PersonalInformation data={employee.personalInformation} />,
    },
    {
      label: 'Contract Information',
      key: 'contract-information',
      children: <ContractInformation data={employee.contractInformation} />,
    },
  ];

  useEffect(() => {
    dispatch(getEmployee(employeeId));
  }, [employeeId]);

  return employee.id === employeeId && <Tabs items={items} centered />;
}

export default Employee;
