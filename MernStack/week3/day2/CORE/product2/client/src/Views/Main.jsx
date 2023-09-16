import React, { useState } from 'react';
import Form from './Form';
import Dachbord from './Dachbord';

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
