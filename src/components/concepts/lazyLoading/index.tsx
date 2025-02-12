import React, { useEffect, useState, Suspense } from "react";
import "./style.css";



const PostComponent = React.lazy(() => import("./PostComponent"));

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  img: string;
}

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1); 
  const [loading, setLoading] = useState(false);
  const totalPosts = 100; 
  const [pageSize, setPageSize] = useState(5);

  // Fetch posts in batches of pageSize
  const fetchPosts = async (page: number, direction: "up" | "down") => {
    setLoading(true);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${pageSize}`
    );
    const data = await response.json();
    const postsWithImages = data.map((post: Post) => ({
      ...post,
      img: "https://res.cloudinary.com/dqdo29iis/image/upload/v1722786962/download.jpg",
    }));
    setPosts(postsWithImages);
    setLoading(false);

    // Adjust scroll position based on the direction
    if (page > 1) {
      if (direction === "down") {
        
        window.scrollTo({
          top: 10,
          behavior: "smooth",
        });
      } else if (direction === "up") {
        
        window.scrollTo({
          top: document.body.scrollHeight - window.innerHeight - 10,
          behavior: "smooth",
        });
      }
    }
  };

  // Fetch initial posts
  useEffect(() => {
    fetchPosts(page, "down");
  }, [page]);


  // Scroll event handler to detect scroll to top or bottom
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight &&
        !loading
      ) {
        if (page * pageSize < totalPosts) {
          setPage((prevPage) => {
            fetchPosts(prevPage + 1, "down");
            return prevPage + 1;
          });
        }
      } else if (window.scrollY === 0 && page > 1) {
        setPage((prevPage) => {
          fetchPosts(prevPage - 1, "up");
          return prevPage - 1;
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page, loading]);

  return (
    <>        
      <h1 className="text-2xl font-bold mb-4">
        Lazy Loaded Posts with Infinite Scroll, Page: {page}
      </h1>
      <div
        className="p-6"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              padding: "3px",
              flex: "0 1 30%",
              textAlign: "center",
              margin: "10px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Suspense fallback={<div>...</div>}>
              <PostComponent
                title={post.title}
                body={post.body}
                img={post.img}
                id={post.id}
              />
            </Suspense>
          </div>
        ))}
      </div>

      
      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <img
            style={{ height: "100px", width: "100px" }}
            src="loader.svg"
            alt="loader"
          />
        </div>
      )}

      {/* Page Indicator */}
      <div
        style={{
          marginTop: "20px",
          fontSize: "18px",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Page {page} of {Math.ceil(totalPosts / pageSize)}
      </div>
    </>
  );
}

export default App;
