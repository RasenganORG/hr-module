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

function PersonalInformation({ data }) {
  const [form] = Form.useForm();
  form.setFieldsValue(data);

  const formInputsList = [
    {
      firstCol: (
        <Form.Item name='name' label='Name'>
          <Input placeholder={data.name} prefix={<UserOutlined />} />
        </Form.Item>
      ),
      secondCol: (
        <Form.Item name='email' label='Email' rules={[{ type: 'email' }]}>
          <Input placeholder={data.email} prefix={<MailOutlined />} />
        </Form.Item>
      ),
    },
    {
      firstCol: (
        <Form.Item name='department' label='Department'>
          <Input placeholder={data.department} prefix={<TeamOutlined />} />
        </Form.Item>
      ),
      secondCol: (
        <Form.Item name='jobTitle' label='Job Title'>
          <Input placeholder={data.jobTitle} prefix={<LaptopOutlined />} />
        </Form.Item>
      ),
    },
    {
      firstCol: (
        <Form.Item name='country' label='Country'>
          <Input placeholder={data.country} prefix={<GlobalOutlined />} />
        </Form.Item>
      ),
      secondCol: (
        <Form.Item name='phoneNumber' label='Phone Number'>
          <Input placeholder={data.phoneNumber} prefix={<PhoneOutlined />} />
        </Form.Item>
      ),
    },
    {
      firstCol: (
        <Form.Item name='adress' label='Adress'>
          <Input placeholder={data.adress} prefix={<HomeOutlined />} />
        </Form.Item>
      ),
      secondCol: (
        <Form.Item name='teleWorkAdress' label='TeleWork Adress'>
          <Input
            placeholder={data.teleWorkAdress}
            prefix={<CompassOutlined />}
          />
        </Form.Item>
      ),
    },
    {
      firstCol: (
        <Form.Item name='cnp' label='CNP'>
          <Input placeholder={data.cnp} />
        </Form.Item>
      ),
      secondCol: (
        <Form.Item name='idSeries' label='Id Series'>
          <Input placeholder={data.idSeries} />
        </Form.Item>
      ),
    },
    {
      // firstCol: (
      //   <Form.Item name='idExpirationDate' label='Id Expiration Date'>
      //     <DatePicker format={'DD/MM/YYYY'} />
      //   </Form.Item>
      // ),
      firstCol: null,
      secondCol: (
        <Form.Item name='healthHouse' label='Health House'>
          <Input placeholder={data.healthHouse} value={'dwhabfaj'} />
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

  return (
    <div>
      <Form name='personal-information' layout={'vertical'} form={form}>
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
