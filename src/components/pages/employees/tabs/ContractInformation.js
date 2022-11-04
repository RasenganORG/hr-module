import React from 'react';
import { Form, Input, DatePicker, List, Checkbox } from 'antd';
import {
  UserOutlined,
  IdcardOutlined,
  HistoryOutlined,
  HomeOutlined,
  MailOutlined,
  PhoneOutlined,
  TeamOutlined,
  CompassOutlined,
  LaptopOutlined,
  GlobalOutlined,
} from '@ant-design/icons';
import RowEmployee from './RowEmployee';

function ContractInformation() {
  const formInputsList = [
    {
      firstCol: (
        <Form.Item name='contractType' label='Contract Type'>
          <Input placeholder='full time' prefix={<TeamOutlined />} />
        </Form.Item>
      ),
      secondCol: (
        <Form.Item name='contractNumber' label='Contract Number'>
          <Input placeholder='1234' prefix={<LaptopOutlined />} />
        </Form.Item>
      ),
    },
    {
      firstCol: (
        <Form.Item name='contractStartDate' label='Contract Start Date'>
          <DatePicker prefix={<GlobalOutlined />} />
        </Form.Item>
      ),
      secondCol: (
        <Form.Item name='contractEndDate' label='Contract End Date'>
          <DatePicker prefix={<GlobalOutlined />} />
        </Form.Item>
      ),
    },
    {
      firstCol: (
        <Form.Item name='taxExempt' label='Tax Exempt'>
          <Checkbox />
        </Form.Item>
      ),
      secondCol: (
        <Form.Item name='salary' label='Salary'>
          <Input placeholder='XY 12345' />
        </Form.Item>
      ),
    },
    {
      firstCol: (
        <Form.Item name='probationEndDate' label='Probation End Date'>
          <DatePicker prefix={<CompassOutlined />} />
        </Form.Item>
      ),
      secondCol: (
        <Form.Item name='contractExpDate' label='Contract Expiration Date'>
          <DatePicker />
        </Form.Item>
      ),
    },
    {
      firstCol: (
        <Form.Item name='ssm' label='SSM'>
          <DatePicker format={'DD/MM/YYYY'} />
        </Form.Item>
      ),
      secondCol: (
        <Form.Item name='laborMedicine' label='Labor Medicine'>
          <DatePicker format={'DD/MM/YYYY'} />
        </Form.Item>
      ),
    },
    {
      firstCol: (
        <Form.Item name='history' label='Changes History'>
          <Input placeholder='history' prefix={<HistoryOutlined />} />
        </Form.Item>
      ),
      secondCol: (
        <Form.Item name='workState' label='Work State'>
          <Input placeholder='home' />
        </Form.Item>
      ),
    },
  ];

  return (
    <div>
      <Form name='contract-information' layout={'vertical'}>
        {formInputsList.map((elem, i) => (
          <RowEmployee
            firstCol={elem.firstCol}
            secondCol={elem.secondCol}
            key={i}
          />
        ))}
      </Form>
    </div>
  );
}

export default ContractInformation;
