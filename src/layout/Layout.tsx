import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  const { count } = useSelector((state: any) => state.userStore);
  return (
    <div>
      {count}
      <Outlet />
    </div>
  );
};

export default Layout;
