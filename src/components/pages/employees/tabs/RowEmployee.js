import { Row, Col, Form } from 'antd';
import React from 'react';

function RowEmployee({ firstCol, secondCol }) {
  return (
    <Row>
      <Col span={11}>{firstCol}</Col>
      <Col span={1}></Col>
      <Col span={12}>{secondCol}</Col>
    </Row>
  );
}

export default RowEmployee;
