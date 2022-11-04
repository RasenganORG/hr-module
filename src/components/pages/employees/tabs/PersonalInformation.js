import React from 'react';
import { Form, Input, DatePicker, List } from 'antd';
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
import CardEmployee from './CardEmployee';

function PersonalInformation() {
  const formInputsList = [
    {
      firstCol: (
        <Form.Item name='name' label='Name'>
          <Input placeholder='name' prefix={<UserOutlined />} />
        </Form.Item>
      ),
      secondCol: (
        <Form.Item name='email' label='Email' rules={[{ type: 'email' }]}>
          <Input placeholder='example@edw.com' prefix={<MailOutlined />} />
        </Form.Item>
      ),
    },
    {
      firstCol: (
        <Form.Item name='department' label='Department'>
          <Input placeholder='front end' prefix={<TeamOutlined />} />
        </Form.Item>
      ),
      secondCol: (
        <Form.Item name='jobTitle' label='Job Title'>
          <Input
            placeholder='Front End Developer'
            prefix={<LaptopOutlined />}
          />
        </Form.Item>
      ),
    },
    {
      firstCol: (
        <Form.Item name='country' label='Country'>
          <Input placeholder='Romania' prefix={<GlobalOutlined />} />
        </Form.Item>
      ),
      secondCol: (
        <Form.Item name='phoneNumber' label='Phone Number'>
          <Input placeholder='04627186471' prefix={<PhoneOutlined />} />
        </Form.Item>
      ),
    },
    {
      firstCol: (
        <Form.Item name='adress' label='Adress'>
          <Input placeholder='Str. Gh. Sontu 8' prefix={<HomeOutlined />} />
        </Form.Item>
      ),
      secondCol: (
        <Form.Item name='teleWorkAdress' label='TeleWork Adress'>
          <Input placeholder='adress' prefix={<CompassOutlined />} />
        </Form.Item>
      ),
    },
    {
      firstCol: (
        <Form.Item name='cnp' label='CNP'>
          <Input placeholder='47217510851821421' />
        </Form.Item>
      ),
      secondCol: (
        <Form.Item name='idSeries' label='Id Series'>
          <Input placeholder='XY 12345' />
        </Form.Item>
      ),
    },
    {
      firstCol: (
        <Form.Item name='idExpirationDate' label='Id Expiration Date'>
          <DatePicker format={'DD/MM/YYYY'} />
        </Form.Item>
      ),
      secondCol: (
        <Form.Item name='healthHouse' label='Health House'>
          <Input placeholder='casa de asigurare' />
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
            dataSource={[
              {
                name: 'John Doe',
                birthday: '1/1/2001',
                cnp: '89374893278759',
              },
            ]}
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
  return (
    <div>
      <Form name='personal-information' layout={'vertical'}>
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

export default PersonalInformation;
