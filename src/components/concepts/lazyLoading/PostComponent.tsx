import React from 'react';

interface PostProps {
  title: string;
  body: string;
  img: string;
  id:number;
}

const PostComponent: React.FC<PostProps> = ({ title, body, img,id }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md my-4">
      <p style={{textAlign:'left'}} >{id} )</p>
      <h2 className="text-lg font-semibold">{title}</h2>
      <img
        src={img}
        alt={title}
        loading="lazy"
        className="w-full h-64 object-cover mt-2 rounded"
      />
      <p className="mt-2">{body}</p>
    </div>
  );
};

export default PostComponent;
