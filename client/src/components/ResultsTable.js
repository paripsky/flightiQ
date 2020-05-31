import React from 'react';

import { Table, Space } from 'antd';

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: 'Origin',
    dataIndex: 'origin',
    key: 'origin'
  },
  {
    title: 'Destination',
    dataIndex: 'destination',
    key: 'destination'
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a href="/">Reschedule</a>
        <a href="/">Delete</a>
      </Space>
    )
  }
];

const ResultsTable = ({ data = [] }) => {
  return <Table columns={columns} dataSource={data} />;
};

export default ResultsTable;
