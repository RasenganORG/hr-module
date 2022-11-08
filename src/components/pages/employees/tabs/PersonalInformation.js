import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, DatePicker, List, Button } from 'antd';
import {
  UserOutlined,
  IdcardOutlined,
  HomeOutlined,
  MailOutlined,
  PhoneOutlined,
  TeamOutlined,
  CompassOutlined,
  LaptopOutlined,
  GlobalOutlined,
  EditOutlined,
} from '@ant-design/icons';
import RowEmployee from './utils/RowEmployee';
import CardEmployee from './utils/CardEmployee';
import moment from 'moment';
import { editEmployee } from '../../../../store/slices/employees/employeesSlice';

function PersonalInformation({ data }) {
  const dispatch = useDispatch();
  const { employee } = useSelector((state) => state.employees);
  const [showInput, setShowInput] = useState(false);
  const initialValues = {
    ...data,
    idExpirationDate: data.idExpirationDate
      ? moment(data.idExpirationDate, 'DD-MM-YYYY')
      : null,
  };

  const formInputsList = [
    {
      firstCol: (
        <Form.Item name='name' label='Name'>
          {showInput ? (
            <Input prefix={<UserOutlined />} />
          ) : (
            <Input prefix={<UserOutlined />} readOnly={true} />
          )}
        </Form.Item>
      ),
      secondCol: (
        <Form.Item name='email' label='Email' rules={[{ type: 'email' }]}>
          {showInput ? (
            <Input prefix={<MailOutlined />} />
          ) : (
            <Input prefix={<MailOutlined />} readOnly={true} />
          )}
        </Form.Item>
      ),
    },
    {
      firstCol: (
        <Form.Item name='department' label='Department'>
          {showInput ? (
            <Input prefix={<TeamOutlined />} />
          ) : (
            <Input prefix={<TeamOutlined />} readOnly={true} />
          )}
        </Form.Item>
      ),
      secondCol: (
        <Form.Item name='jobTitle' label='Job Title'>
          {showInput ? (
            <Input prefix={<LaptopOutlined />} />
          ) : (
            <Input prefix={<LaptopOutlined />} readOnly={true} />
          )}
        </Form.Item>
      ),
    },
    {
      firstCol: (
        <Form.Item name='country' label='Country'>
          {showInput ? (
            <Input prefix={<GlobalOutlined />} />
          ) : (
            <Input prefix={<GlobalOutlined />} readOnly={true} />
          )}
        </Form.Item>
      ),
      secondCol: (
        <Form.Item name='phoneNumber' label='Phone Number'>
          {showInput ? (
            <Input prefix={<PhoneOutlined />} />
          ) : (
            <Input prefix={<PhoneOutlined />} readOnly={true} />
          )}
        </Form.Item>
      ),
    },
    {
      firstCol: (
        <Form.Item name='adress' label='Adress'>
          {showInput ? (
            <Input prefix={<HomeOutlined />} />
          ) : (
            <Input prefix={<HomeOutlined />} readOnly={true} />
          )}
        </Form.Item>
      ),
      secondCol: (
        <Form.Item name='teleWorkAdress' label='TeleWork Adress'>
          {showInput ? (
            <Input prefix={<CompassOutlined />} />
          ) : (
            <Input prefix={<CompassOutlined />} readOnly={true} />
          )}
        </Form.Item>
      ),
    },
    {
      firstCol: (
        <Form.Item name='cnp' label='CNP'>
          {showInput ? <Input /> : <Input readOnly={true} />}
        </Form.Item>
      ),
      secondCol: (
        <Form.Item name='idSeries' label='Id Series'>
          {showInput ? <Input /> : <Input readOnly={true} />}
        </Form.Item>
      ),
    },
    {
      firstCol: (
        <Form.Item name='idExpirationDate' label='Id Expiration Date'>
          {showInput ? <DatePicker /> : <DatePicker readOnly={true} />}
        </Form.Item>
      ),
      secondCol: (
        <Form.Item name='healthHouse' label='Health House'>
          {showInput ? <Input bordered={true} /> : <Input readOnly={true} />}
        </Form.Item>
      ),
    },
    {
      firstCol: (
        <Form.Item name='peopleInSupport' label='People In Support'>
          <List
            grid={{
              gutter: 16,
              column: 3,
            }}
            dataSource={data.peopleInSupport}
            renderItem={(item) => (
              <List.Item>
                <CardEmployee item={item} />
              </List.Item>
            )}
          />
        </Form.Item>
      ),
      secondCol: null,
    },
  ];

  const handleFinish = (values) => {
    const data = {
      personalInformation: { ...values },
      id: employee.id,
    };
    console.log(values);
    dispatch(editEmployee(data));
  };

  return (
    <div>
      <Button
        shape={'circle'}
        type='primary'
        // style={{
        //   backgroundColor: showInput ? '#1890ff' : '#f0f2f5',
        //   color: showInput ? '#f0f2f5' : '#1890ff',
        // }}
        onClick={() => setShowInput(!showInput)}
      >
        <EditOutlined />
      </Button>
      <Form
        name='personal-information'
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

export default PersonalInformation;
