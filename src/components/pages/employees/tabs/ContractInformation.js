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

function ContractInformation({ data }) {
  const [form] = Form.useForm();
  form.setFieldsValue(data);
  const formInputsList = [
    {
      firstCol: (
        <Form.Item name='contractType' label='Contract Type'>
          <Input placeholder={data.contractType} prefix={<TeamOutlined />} />
        </Form.Item>
      ),
      secondCol: (
        <Form.Item name='contractNumber' label='Contract Number'>
          <Input
            placeholder={data.contractNumber}
            prefix={<LaptopOutlined />}
          />
        </Form.Item>
      ),
    },
    {
      firstCol: (
        <Form.Item name='contractStartDate' label='Contract Start Date'>
          <DatePicker
            format={'DD/MM/YYYY'}
            value={
              data.contractStartDate != null
                ? new Date(data.contractStartDate).toLocaleDateString()
                : null
            }
            prefix={<GlobalOutlined />}
          />
        </Form.Item>
      ),
      secondCol: (
        <Form.Item name='contractEndDate' label='Contract End Date'>
          <DatePicker
            format={'DD/MM/YYYY'}
            value={
              data.contractEndDate != null
                ? new Date(data.contractEndDate).toLocaleDateString()
                : null
            }
            prefix={<GlobalOutlined />}
          />
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
        <Form.Item name='probationExpirationDate' label='Probation End Date'>
          <DatePicker
            format={'DD/MM/YYYY'}
            prefix={<CompassOutlined />}
            value={
              data.probationExpirationDate != null
                ? new Date(data.probationExpirationDate).toLocaleDateString()
                : null
            }
          />
        </Form.Item>
      ),
      secondCol: (
        <Form.Item
          name='contractExpirationDate'
          label='Contract Expiration Date'
        >
          <DatePicker
            format={'DD/MM/YYYY'}
            value={
              data.contractExpirationDate != null
                ? new Date(data.contractExpirationDate).toLocaleDateString()
                : null
            }
          />
        </Form.Item>
      ),
    },
    {
      firstCol: (
        <Form.Item name='ssm' label='SSM'>
          <DatePicker
            format={'DD/MM/YYYY'}
            value={
              data.ssm != null ? new Date(data.ssm).toLocaleDateString() : null
            }
          />
        </Form.Item>
      ),
      secondCol: (
        <Form.Item name='laborMedicine' label='Labor Medicine'>
          <DatePicker
            format={'DD/MM/YYYY'}
            value={
              data.laborMedicine != null
                ? new Date(data.laborMedicine).toLocaleDateString()
                : null
            }
          />
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

  console.log(new Date(data.probationExpirationDate));

  return (
    <div>
      <Form name='contract-information' layout={'vertical'} form={form}>
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
