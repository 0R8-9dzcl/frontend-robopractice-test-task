import { Table } from 'antd';
import React, { useState } from 'react';
import { getUsersData } from '../api/api';
import 'antd/dist/antd.css';
import columns from '../table/columns';
import newUsersData from '../table/row';

const App = () => {
  const [userData, setUsersData] = useState([]);
  React.useEffect(() => {
    getUsersData()
      .then((res) => {
        const data = newUsersData(res);
        setUsersData(data);
      })
      .catch(err => console.log(err));
  }, []);

  return <Table columns={columns} dataSource={userData} bordered />;
};

export default App;
