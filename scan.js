var portscanner = require('portscanner');

let response = {};
let callback = (error, status) => {
  // Status is 'open' if currently in use or 'closed' if available
  response.push(status);
  console.log(status);

  return { status };
};
let services = {
  port: (host, port) =>
    portscanner.checkPortStatus(port, host, function (error, status) {
      // Status is 'open' if currently in use or 'closed' if available

      response.push({ host, port, status });
      console.log(status);
    }),
  inUse: (host, port) => portscanner.checkPortStatus,
};
// Checks the status of a single port
let portStatus = (host, port) => portscanner.checkPortStatus(port, host);

portStatus({ host: '188.134.65.67', port: 8888 });
// // Find the first available port. Asynchronously checks, so first port
// // determined as available is returned.
// portscanner.findAPortNotInUse(3000, 3010, '127.0.0.1', function (error, port) {
//   console.log('AVAILABLE PORT AT: ' + port);
// });

// // Find the first port in use or blocked. Asynchronously checks, so first port
// // to respond is returned.
// portscanner.findAPortInUse(3000, 3010, '127.0.0.1', function (error, port) {
//   console.log('PORT IN USE AT: ' + port);
// });

// // You can also pass array of ports to check
// portscanner.findAPortInUse(
//   [3000, 3005, 3006],
//   '127.0.0.1',
//   function (error, port) {
//     console.log('PORT IN USE AT: ' + port);
//   }
// );

// // And skip host param. Default is '127.0.0.1'
// portscanner.findAPortNotInUse(3000, 4000, function (error, port) {
//   console.log('PORT IN USE AT: ' + port);
// });

// // And use promises
// portscanner.findAPortNotInUse(3000, 4000).then(function (port) {
//   console.log('PORT IN USE AT: ' + port);
// });
