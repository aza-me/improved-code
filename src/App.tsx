import Card from '@/components/Card/Card';
import { useEffect, useState } from 'react';
import { PostModel } from '@/app/model/PostModel';
import { postsService } from '@/app/api';

function App() {
  const [posts, setPosts] = useState<PostModel[]>([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const { data: posts } = await postsService.getPosts();

      setPosts(posts);
    } catch {
      alert('Error');
    }
  };

  const analyticsTrackClick = (url: string) => {
    // sending clicked link url to analytics
    console.log(url);
  };

  return (
    <div>
      {posts.map((post) => (
        <Card post={post} onClick={analyticsTrackClick} />
      ))}
    </div>
  );
}

export default App;
