import { Button, Typography, Card } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '50px', textAlign: 'center',marginTop:'-30px' }}>
      <Title level={1}>React.js Best Practices</Title>
      <Paragraph>
        Welcome to the ultimate guide for writing clean, scalable, and efficient React applications. 
        Learn industry-standard best practices, patterns, and techniques to improve your React codebase.
      </Paragraph>

      <Card style={{ textAlign: 'left', marginTop: '20px' }}>
        <Title level={3}>What You'll Learn:</Title>
        <ul>
          <li>Component structure and reusability</li>
          <li>State management best practices</li>
          <li>Performance optimization techniques</li>
          <li>Folder structure and project organization</li>
          <li>Best practices for hooks and context API</li>
        </ul>
      </Card>

      <div style={{ marginTop: '20px' }}>
        <Link to="/react-bp/best-practices">
          <Button type="primary">Learn More</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
