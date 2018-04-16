const cluster = require('cluster');
const CPUs = require('os').cpus().length;

if (cluster.isMaster) {
  // Create a worker for each CPU
  for (let i = 0; i < CPUs; i ++)
    cluster.fork();
} else {
  console.log('I\'m a new worker!');
  require('./server');
}
