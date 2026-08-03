"use client";

import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';
import FetchButton from './FetchButton';
import LoadingSpinner from './LoadingSpinner';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function HomeClient(): JSX.Element {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPost = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = (await res.json()) as Post;
      setPost(data);
    } catch (err: any) {
      setError(err?.message ?? 'Failed to load');
      setPost(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div>
      <div style={{ marginBottom: 12 }}>
        <FetchButton onClick={fetchPost} loading={loading}>
          {loading ? (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <LoadingSpinner /> Loading…
            </span>
          ) : (
            'Refetch sample post'
          )}
        </FetchButton>
      </div>

      {error && (
        <div role="alert" style={{ color: 'crimson' }}>
          Error: {error}
        </div>
      )}

      {post ? (
        <PostCard post={post} />
      ) : (
        !loading && !error && <div style={{ color: '#94a3b8' }}>No post available.</div>
      )}
    </div>
  );
}
