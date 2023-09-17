import React, { useState } from 'react';
import Dachbord from '../components/Dachbord';
import Form from '../components/Form';




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
