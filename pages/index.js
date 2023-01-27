import axios from 'axios';
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
// let isOnline = require('is-online');
let {
  checkPortStatus,
  findAPortInUse,
  findAPortNotInUse,
} = require('portscanner');

export default function Home({ ctx }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Status</title>
      </Head>
      <main>
        <section className={styles.footer}>Loading...</section>

        <div></div>
      </main>
    </div>
  );
}
