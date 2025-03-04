import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from '../components/Home';
import { Menu } from 'antd';
import BestPractices from '../pages/BestPractices';
import Concepts from '../pages/Concepts';

const AppRoutes: React.FC = () => {
  const location = useLocation(); // Get the current route

  return (
    <>
      <Menu mode="horizontal" theme="dark" selectedKeys={[location.pathname]}>
        <Menu.Item key="/react-bp">
          <Link to="/react-bp">Home</Link>
        </Menu.Item>
        <Menu.Item key="/react-bp/best-practices">
          <Link to="/react-bp/best-practices">Best Practices</Link>
        </Menu.Item>
        <Menu.Item key="/react-bp/concepts">
          <Link to="/react-bp/concepts">Concepts</Link>
        </Menu.Item>
      </Menu>

      <Routes>
        <Route path="/react-bp" element={<Home />} />
        <Route path="/react-bp/best-practices" element={<BestPractices />} />
        <Route path="/react-bp/concepts" element={<Concepts />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
