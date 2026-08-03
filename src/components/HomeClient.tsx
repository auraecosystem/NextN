"use client";

import React, { useEffect, useState } from 'react';

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
        <button onClick={fetchPost} disabled={loading} aria-busy={loading}>
          {loading ? 'Loading…' : 'Refetch sample post'}
        </button>
      </div>

      {error && (
        <div role="alert" style={{ color: 'crimson' }}>
          Error: {error}
        </div>
      )}

      {post ? (
        <article style={{ border: '1px solid #e6eef8', padding: 12, borderRadius: 6 }}>
          <h4 style={{ marginTop: 0 }}>{post.title}</h4>
          <p style={{ color: '#334155' }}>{post.body}</p>
          <small style={{ color: '#64748b' }}>Post ID: {post.id} • Author: {post.userId}</small>
        </article>
      ) : (
        !loading && !error && <div style={{ color: '#94a3b8' }}>No post available.</div>
      )}
    </div>
  );
}
