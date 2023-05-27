import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.log('Error fetching post:', error);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="layer">
      <div className="wrapper">
        <div className="container">
          <h1>{post.name}</h1>
          <p>{post.email}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;