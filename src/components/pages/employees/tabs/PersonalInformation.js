import React from 'react';
import { Form, Input, DatePicker, Card, List, Row, Col } from 'antd';
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

function PersonalInformation() {
  return (
    <div>
      <Form name='personal-information' layout={'vertical'}>
        <Row>
          <Col span={11}>
            <Form.Item name='name' label='Name'>
              <Input placeholder='name' prefix={<UserOutlined />} />
            </Form.Item>
          </Col>
          <Col span={1}></Col>
          <Col span={12}>
            <Form.Item name='email' label='Email' rules={[{ type: 'email' }]}>
              <Input placeholder='example@edw.com' prefix={<MailOutlined />} />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={11}>
            <Form.Item name='department' label='Department'>
              <Input placeholder='front end' prefix={<TeamOutlined />} />
            </Form.Item>
          </Col>
          <Col span={1}></Col>
          <Col span={12}>
            <Form.Item name='job' label='Job Title'>
              <Input
                placeholder='Front End Developer'
                prefix={<LaptopOutlined />}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={11}>
            <Form.Item name='cuntry' label='Country'>
              <Input placeholder='Romania' prefix={<GlobalOutlined />} />
            </Form.Item>
          </Col>
          <Col span={1}></Col>
          <Col span={12}>
            <Form.Item name='phoneNumber' label='Phone Number'>
              <Input placeholder='04627186471' prefix={<PhoneOutlined />} />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={11}>
            <Form.Item name='adress' label='Adress'>
              <Input placeholder='Str. Gh. Sontu 8' prefix={<HomeOutlined />} />
            </Form.Item>
          </Col>
          <Col span={1}></Col>
          <Col span={12}>
            <Form.Item name='teleWorkAdress' label='TeleWork Adress'>
              <Input placeholder='adress' prefix={<HomeOutlined />} />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={11}>
            <Form.Item name='cnp' label='CNP'>
              <Input placeholder='47217510851821421' />
            </Form.Item>
          </Col>
          <Col span={1}></Col>
          <Col span={12}>
            <Form.Item name='idSeries' label='Id Series'>
              <Input placeholder='XY 12345' />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={11}>
            <Form.Item name='idExpirationDate' label='Id Expiration Date'>
              <DatePicker format={'DD/MM/YYYY'} />
            </Form.Item>
          </Col>
          <Col span={1}></Col>
          <Col span={12}>
            <Form.Item name='healthHouse' label='Health House'>
              <Input placeholder='casa de asigurare' />
            </Form.Item>
          </Col>
        </Row>

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
                <Card title={item.name}>
                  <div>
                    <h4 style={{ display: 'inline-block' }}>
                      Birthday: <span> </span>
                    </h4>
                    <p style={{ display: 'inline-block' }}>{item.birthday}</p>
                  </div>
                  <div>
                    <h4 style={{ display: 'inline-block' }}>
                      CNP: <span> </span>
                    </h4>
                    <p style={{ display: 'inline-block' }}>{item.cnp}</p>
                  </div>
                </Card>
              </List.Item>
            )}
          />
        </Form.Item>
      </Form>
    </div>
  );
}

export default PersonalInformation;
