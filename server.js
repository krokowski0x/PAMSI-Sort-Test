const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('dist'));

// app.get('/arrays', async (request, response) => {
//   try {
//     let xs = { len: 10000 };
//     let s = { len: 50000 };
//     let m = { len: 100000 };
//     let l = { len: 500000 };
//     let xl = { len: 1000000 };
//     let arrays = { xs, s, m, l, xl };
//     arrays = setup(arrays);
//     response.send({arrays});
//   } catch (err) {
//     response.status(400).send(err);
//   }
// });

app.listen(port, () => console.log('Sort Test app is running on port 3000!'));
