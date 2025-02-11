import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Header style={{ color: 'white', fontSize: '20px' }}>React</Header>
        <Content style={{ padding: '20px' }}>
          <AppRoutes />
        </Content>
        <Footer style={{ textAlign: 'center' }}>© 2025 React</Footer>
      </Layout>
    </Router>
  );
};

export default App;