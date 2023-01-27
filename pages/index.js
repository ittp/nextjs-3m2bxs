import Head from 'next/head';
import styles from '../styles/Home.module.css';

let config = {
  baseURL: process.env.API_URL,
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer ${process.env.API_TOKEN}',
  },
};




export function Items(data) {
  return data.map((item, key) => {
    let html = <div>{item.ip}</div>;

    return html;
  });
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <section className={styles.footer}>Loading...</section>

        <div></div>
      </main>
    </div>
  );
}
