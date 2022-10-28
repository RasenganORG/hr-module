import React from 'react';
import { useParams } from 'react-router-dom';
import { Tabs } from 'antd';
import PersonalInformation from './tabs/PersonalInformation';
import ContractInformation from './tabs/ContractInformation';

const items = [
  {
    label: 'Personal Information',
    key: 'personal-information',
    children: <PersonalInformation />,
  },
  {
    label: 'Contract Information',
    key: 'contract-information',
    children: <ContractInformation />,
  },
];

function Employee() {
  const { employeeId } = useParams();
  return <Tabs items={items} centered />;
}

export default Employee;
