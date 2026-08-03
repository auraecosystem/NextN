export const metadata = {
  title: 'Home',
  description: 'Nextn — Home page',
};

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

// Server component — typed async function that fetches sample data
export default async function Home(): Promise<JSX.Element> {
  // Fetch a sample post from a public placeholder API. This demonstrates a server-side
  // data fetch in a Next.js app router page component.
  let post: Post | null = null;
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', { next: { revalidate: 60 } });
    if (res.ok) {
      post = (await res.json()) as Post;
    }
  } catch (err) {
    // ignore network errors for this example — render fallback UI below
    post = null;
  }

  return (
    <html lang="en">
      <body>
        <div style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial', margin: 0, padding: 0 }}>
          <header style={{ background: '#0f172a', color: 'white', padding: '1rem 1.25rem' }}>
            <h1 style={{ margin: 0, fontSize: '1.25rem' }}>Nextn</h1>
          </header>

          <main style={{ padding: '1.25rem', maxWidth: 880, margin: '0 auto' }}>
            <section aria-labelledby="welcome-heading">
              <h2 id="welcome-heading">Welcome</h2>
              <p>This page is a typed async server component that demonstrates metadata, data fetching, and an accessible layout.</p>
            </section>

            <section aria-labelledby="sample-post-heading" style={{ marginTop: '1.25rem' }}>
              <h3 id="sample-post-heading">Sample post (fetched server-side)</h3>
              {post ? (
                <article style={{ border: '1px solid #e6eef8', padding: '1rem', borderRadius: 6 }}>
                  <h4 style={{ marginTop: 0 }}>{post.title}</h4>
                  <p style={{ color: '#334155' }}>{post.body}</p>
                  <small style={{ color: '#64748b' }}>Post ID: {post.id} • Author: {post.userId}</small>
                </article>
              ) : (
                <div role="status" aria-live="polite" style={{ color: '#94a3b8' }}>
                  <p>Could not load sample post. Showing fallback content.</p>
                </div>
              )}
            </section>
          </main>

          <footer style={{ borderTop: '1px solid #e6eef8', padding: '0.75rem 1.25rem', textAlign: 'center', color: '#94a3b8' }}>
            <small>© {new Date().getFullYear()} Nextn</small>
          </footer>
        </div>
      </body>
    </html>
  );
}
