import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, DatePicker, List, Checkbox, Button } from 'antd';
import {
  HistoryOutlined,
  TeamOutlined,
  PoundCircleOutlined,
  FieldNumberOutlined,
  EditOutlined,
} from '@ant-design/icons';
import RowEmployee from './utils/RowEmployee';
import moment from 'moment';
import { editEmployee } from '../../../../store/slices/employees/employeesSlice';

function ContractInformation({ data }) {
  const dispatch = useDispatch();
  const { employee } = useSelector((state) => state.employees);
  const [showInput, setShowInput] = useState(false);
  const initialValues = {
    ...data,
    contractStartDate: data.contractStartDate
      ? moment(data.contractStartDate, 'DD-MM-YYYY')
      : null,
    contractEndDate: data.contractEndDate
      ? moment(data.contractEndDate, 'DD-MM-YYYY')
      : null,
    probationExpirationDate: data.probationExpirationDate
      ? moment(data.probationExpirationDate, 'DD-MM-YYYY')
      : null,
    contractExpirationDate: data.contractExpirationDate
      ? moment(data.contractExpirationDate, 'DD-MM-YYYY')
      : null,
    ssm: data.ssm ? moment(data.ssm, 'DD-MM-YYYY') : null,
    laborMedicine: data.laborMedicine
      ? moment(data.laborMedicine, 'DD-MM-YYYY')
      : null,
  };

  const formInputsList = [
    {
      firstCol: (
        <Form.Item name='contractType' label='Contract Type'>
          {showInput ? (
            <Input prefix={<TeamOutlined />} />
          ) : (
            <Input prefix={<TeamOutlined />} readOnly={true} />
          )}
        </Form.Item>
      ),
      secondCol: (
        <Form.Item name='contractNumber' label='Contract Number'>
          {showInput ? (
            <Input prefix={<FieldNumberOutlined />} />
          ) : (
            <Input prefix={<FieldNumberOutlined />} readOnly={true} />
          )}
        </Form.Item>
      ),
    },
    {
      firstCol: (
        <Form.Item name='contractStartDate' label='Contract Start Date'>
          {showInput ? <DatePicker /> : <DatePicker readOnly={true} />}
        </Form.Item>
      ),
      secondCol: (
        <Form.Item name='contractEndDate' label='Contract End Date'>
          {showInput ? <DatePicker /> : <DatePicker readOnly={true} />}
        </Form.Item>
      ),
    },
    {
      firstCol: (
        <Form.Item name='taxExempt' label='Tax Exempt' valuePropName='checked'>
          {showInput ? <Checkbox /> : <Checkbox readOnly={true} />}
        </Form.Item>
      ),
      secondCol: (
        <Form.Item name='salary' label='Salary'>
          {showInput ? (
            <Input prefix={<PoundCircleOutlined />} />
          ) : (
            <Input prefix={<PoundCircleOutlined />} readOnly={true} />
          )}
        </Form.Item>
      ),
    },
    {
      firstCol: (
        <Form.Item name='probationExpirationDate' label='Probation End Date'>
          {showInput ? <DatePicker /> : <DatePicker readOnly={true} />}
        </Form.Item>
      ),
      secondCol: (
        <Form.Item
          name='contractExpirationDate'
          label='Contract Expiration Date'
        >
          {showInput ? <DatePicker /> : <DatePicker readOnly={true} />}
        </Form.Item>
      ),
    },
    {
      firstCol: (
        <Form.Item name='ssm' label='SSM'>
          {showInput ? <DatePicker /> : <DatePicker readOnly={true} />}
        </Form.Item>
      ),
      secondCol: (
        <Form.Item name='laborMedicine' label='Labor Medicine'>
          {showInput ? <DatePicker /> : <DatePicker readOnly={true} />}
        </Form.Item>
      ),
    },
    {
      firstCol: (
        <Form.Item name='history' label='Changes History'>
          {showInput ? (
            <Input prefix={<HistoryOutlined />} />
          ) : (
            <Input prefix={<HistoryOutlined />} readOnly={true} />
          )}
        </Form.Item>
      ),
      secondCol: (
        <Form.Item name='workState' label='Work State'>
          {showInput ? <Input /> : <Input readOnly={true} />}
        </Form.Item>
      ),
    },
  ];

  const handleFinish = (values) => {
    const data = {
      contractInformation: {
        ...values,
        contractStartDate: values.contractStartDate
          ? moment(values.contractStartDate).format('DD-MM-YYYY')
          : null,
        contractEndDate: values.contractEndDate
          ? moment(values.contractEndDate).format('DD-MM-YYYY')
          : null,
        probationExpirationDate: values.probationExpirationDate
          ? moment(values.probationExpirationDate).format('DD-MM-YYYY')
          : null,
        contractExpirationDate: values.contractExpirationDate
          ? moment(values.contractExpirationDate).format('DD-MM-YYYY')
          : null,
        ssm: values.ssm ? moment(values.ssm).format('DD-MM-YYYY') : null,
        laborMedicine: values.laborMedicine
          ? moment(values.laborMedicine).format('DD-MM-YYYY')
          : null,
      },
      id: employee.id,
    };
    console.log(data);
    dispatch(editEmployee(data));
  };

  return (
    <div>
      <Button
        shape={'circle'}
        type='primary'
        onClick={() => setShowInput(!showInput)}
      >
        <EditOutlined />
      </Button>
      <Form
        name='contract-information'
        layout={'vertical'}
        initialValues={initialValues}
        onFinish={handleFinish}
      >
        {formInputsList.map((elem, i) => (
          <RowEmployee
            firstCol={elem.firstCol}
            secondCol={elem.secondCol}
            key={i}
          />
        ))}
        {showInput && (
          <Button type='primary' htmlType='submit'>
            Save
          </Button>
        )}
      </Form>
    </div>
  );
}

export default ContractInformation;
