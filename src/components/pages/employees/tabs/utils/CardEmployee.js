import React from 'react';
import { Card } from 'antd';

function CardEmployee({ item }) {
  return (
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
  );
}

export default CardEmployee;
