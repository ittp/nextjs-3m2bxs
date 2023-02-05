import axios from 'axios';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {
  Row,
  Form,
  Input,
  InputNumber,
  Col,
  Space,
  ConfigProvider,
} from 'antd';
import DataTable from 'antd-data-table';
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

// // const dns = require('dns');
// import * as dns from 'node-dns';
// dns.lookupService('127.0.0.1', 22, (err, hostname, service) => {
//   console.log(hostname, service);
//   // Prints: localhost ssh
// });

export default function Home({ ctx }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Status</title>
      </Head>
      <main>
        <section className={styles.footer}>Loading...</section>

        <div>1</div>
      </main>
    </div>
  );
}
