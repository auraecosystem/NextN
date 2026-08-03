export const metadata = {
  title: 'Home',
  description: 'Nextn — Home page',
};

import HomeClient from '../components/HomeClient';
import styles from './page.module.css';

// Server component — keeps metadata server-side and renders a client component
export default function Home(): JSX.Element {
  return (
    <html lang="en">
      <body>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1 className={styles.siteTitle}>Nextn</h1>
          </header>

          <main className={styles.main}>
            <section aria-labelledby="welcome-heading">
              <h2 id="welcome-heading">Welcome</h2>
              <p>
                This page uses a client component for interactive behavior and data fetching. Metadata is
                exported from the server component for optimal SEO.
              </p>
            </section>

            <section aria-labelledby="interactive-heading" style={{ marginTop: '1.25rem' }}>
              <h3 id="interactive-heading">Interactive sample post (client-side)</h3>
              <HomeClient />
            </section>
          </main>

          <footer className={styles.footer}>
            <small>© {new Date().getFullYear()} Nextn</small>
          </footer>
        </div>
      </body>
    </html>
  );
}
