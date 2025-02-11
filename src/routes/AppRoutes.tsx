import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from '../components/Home';
import { Menu } from 'antd';
import BestPractices from '../pages/BestPractices';

const AppRoutes: React.FC = () => {
  const location = useLocation(); // Get the current route

  return (
    <>
      <Menu mode="horizontal" theme="dark" selectedKeys={[location.pathname]}>
        <Menu.Item key="/">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="/best-practices">
          <Link to="/best-practices">Best Practices</Link>
        </Menu.Item>
        <Menu.Item key="/concepts">
          <Link to="/concepts">Concepts</Link>
        </Menu.Item>
      </Menu>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/best-practices" element={<BestPractices />} />
        <Route path="/concepts" element={<Home />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
