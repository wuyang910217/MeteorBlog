
import React from 'react';

const AppLayout = ({content = () => null }) => (
  <div>
    {content()}
  </div>
);

export default Layout;
