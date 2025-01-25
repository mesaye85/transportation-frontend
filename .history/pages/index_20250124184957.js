import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Transportation Management</title>
        <meta name="description" content="Manage trucks, drivers, and schedules" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the Transportation Management System</h1>
        <p className={styles.description}>
          Select a feature to begin managing your transportation logistics.
        </p>

        <div className={styles.grid}>
          <a href="/trucks" className={styles.card}>
            <h2>Trucks &rarr;</h2>
            <p>Manage your fleet of trucks.</p>
          </a>

          <a href="/drivers" className={styles.card}>
            <h2>Drivers &rarr;</h2>
            <p>View and manage driver details.</p>
          </a>

          <a href="/schedules" className={styles.card}>
            <h2>Schedules &rarr;</h2>
            <p>Assign and manage driver schedules.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Transportation Management System &copy; 2025</p>
      </footer>
    </div>
  );
}
