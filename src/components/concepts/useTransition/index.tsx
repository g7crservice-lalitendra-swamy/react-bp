import { useState, useTransition } from "react";
import { Form, Input, Button, message } from "antd";
import React from "react";

const UseTransitionExample = () => {
  const [post, setPost] = useState({ title: "", body: "" });
  const [isPending, startTransition] = useTransition();
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async () => {
    startTransition(() => {
      setSuccessMessage(""); 
    });

    try {
      

      startTransition(async() => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...post, userId: 1 }),
          });
    
          if (!response.ok) {
            throw new Error("Failed to submit post");
          }
          setPost({ title: "", body: "" }); 
        setSuccessMessage("Post submitted successfully!");
      });
    } catch (error) {
      message.error("Failed to submit post. Try again.");
    }   
  };

  return (
    <Form onFinish={handleSubmit} style={{ width: 400, margin: "auto" }}>
      <Form.Item label="Title" name="title" rules={[{ required: true }]}>
        <Input
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          disabled={isPending}
        />
      </Form.Item>

      <Form.Item label="Body" name="body" rules={[{ required: true }]}>
        <Input.TextArea
          rows={4}
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          disabled={isPending}
        />
      </Form.Item>

      <Button type="primary" htmlType="submit" disabled={isPending}>
        {isPending ? "Submitting..." : "Submit Post"}
      </Button>

      {successMessage && <p style={{ color: "green", marginTop: 10 }}>{successMessage}</p>}
    </Form>
  );
};

export default UseTransitionExample;
