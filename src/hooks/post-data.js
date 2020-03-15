import { useState, useEffect } from 'react';
import PostService from '../services/post.service';

export default function usePostData(postId) {
  const [postData, setPostData] = useState({});

  useEffect(() => {
    (async () => {
      if (postId == null) return;
      const post = await PostService.getPostById(postId);
      setPostData(post);
    })();
  }, [postId]);

  return [postData, setPostData];
}
