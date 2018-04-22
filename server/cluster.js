const cluster = require('cluster');
// CPUs is usually 4 or 8
const CPUs = require('os').cpus().length;

// Master populates the workers
if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Populate workers
  for (let i = 0; i < CPUs; i++) {
    cluster.fork();
  }

  //Check if work id has died
  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });

} else {
  console.log(`Worker ${process.pid} started`);

  // Workers run surver.js
  require('./server');
}
