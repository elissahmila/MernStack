import React, { useState } from 'react';

import Dachbord from '../component/Dachbord';
import { Form } from 'react-router-dom';


const Main = () => {
  const [refreshState, setRefreshState] = useState(false);

  const refresh = () => {
    setRefreshState(!refreshState);
  };

  return (
    <div>
      <Form refresh={refresh} />
      <Dachbord refreshState={refreshState} />
    </div>
  );
}

export default Main;
