// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const test_port = require('test-port');

// const { netCheck } = require('ping-net-check');
// netCheck({
//   timeout: 3000,
//   host: 'example.com',
// }).then((value) => console.log(value));
import axios from 'axios';

async function ping(url) {
  let ports = ['8888', '4545'];

  try {
    await axios.get(url, { timeout: 5000 });
  } catch (error) {
    // Log the error and continue. A ping failure should
    // not prevent the job from running.
    console.error('Ping failed: ' + error);
  }
}

export default (req, res) => {
  // Open Chrome DevTools to step through the debugger!
  // debugger;
  // let isGET = req.method === 'GET';
  // let isPOST = req.method === 'POST';
  // let isJSON = req.headers['Accept'] === 'application/json';
  // // let isManyRequest = req.body.isPrototypeOf()
  // let config = isGET ? req.query : req.body;
  // let response;
  // let host = 'ya.ru';
  // let check = axios.get(host).then((response) => response.status);7
  // console.log(check);



  let host = '85.21.168.227',
    port = 5445;
  let status = axios
    .get('http://' + host + ':' + port, { cors: false })
    .then((res) => res);
  console.log(status);
  let response = [];
  res.status(200).json({ ...status.headers });
};

// Check if google.com accepts connections to port 8080
