let axios = require('axios');

let check = async (ctx) =>
  await axios.head('http://' + ctx.ip + ':8888', { cors: true }).then((res) => {
    return res.status;
  });

let getHost = (data) => data.split('\n').map((ip, key) => check);

export default async function handler(req, res) {
  let { body, query, status, headers } = req;
  let { ip } = req.query || req.body;
  if (ip) {
    console.log('check ip: ${ip}');
    let status = await check({ ip, port: 8888 });
    console.log(ip);
    res.status(200).body(status);
  } else {
    res.status(200).json({ ...req });
  }
}
