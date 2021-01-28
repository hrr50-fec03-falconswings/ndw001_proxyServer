let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');

let app = express();
let port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
  res.send('Hello World')
});

app.listen(port, () => {
  console.log('here at port 8080');
});



