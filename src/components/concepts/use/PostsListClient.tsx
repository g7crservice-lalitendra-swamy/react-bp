// src/components/PostsListClient.tsx
'use client'; // Ensures it's a Client Component

import React from 'react';
import { List, Typography, Card } from 'antd';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostsListClientProps {
  posts: Post[];
}

const PostsListClient: React.FC<PostsListClientProps> = ({ posts }) => {
  return (
    <Card title="Posts" style={{ maxWidth: 800, margin: '20px auto', padding: 20 }}>
      <List
        dataSource={posts}
        renderItem={(post) => (
          <List.Item key={post.id}>
            <Card title={post.title} bordered={false}>
              <Typography.Paragraph>{post.body}</Typography.Paragraph>
            </Card>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default PostsListClient;
