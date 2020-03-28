const app = require('./app');



const port = 3331;
app.listen(port, () => {
  console.log(`Listen in port: ${port}`);
});