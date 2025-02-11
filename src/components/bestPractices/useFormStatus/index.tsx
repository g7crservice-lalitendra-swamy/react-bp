import React from "react";
import { useFormStatus } from "react-dom";
import { Input, Button, Card, Typography } from "antd";

const { Title } = Typography;

function LoadingIndicator() {
  const { pending } = useFormStatus();
  return pending ? <p style={{ color: "blue", fontWeight: "bold" }}>Processing...</p> : null;
}

export default function MyForm() {
  async function handleSubmit(formData: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate slow API
  }

  return (
    <Card style={{ maxWidth: 400, margin: "auto", padding: 20, boxShadow: "0px 4px 8px rgba(0,0,0,0.1)" }}>
      <Title level={3} style={{ textAlign: "center" }}>Register</Title>
      
      {/* ✅ Native Form is Required for useFormStatus() */}
      <form action={handleSubmit}>
        <label>Name</label>
        <Input name="name" placeholder="Enter your name" required />

        <label>Email</label>
        <Input name="email" type="email" placeholder="Enter your email" required />

        <label>Password</label>
        <Input.Password name="password" placeholder="Enter your password" required />

        <LoadingIndicator />

        <Button type="primary" htmlType="submit" block>
          Submit
        </Button>
      </form>
    </Card>
  );
}
