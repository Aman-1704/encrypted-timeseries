var http = require('http');
const express = require('express');
const expressWebSocket = require('express-ws');
const connectDB = require('./config/database');
const emitterRoutes = require('./routes/emitterRoutes');
const listenerRoutes = require('./routes/listenerRoutes');
const app = express();
expressWebSocket(app)
var server = http.createServer(app);

const io = require('socket.io')(server);

;

connectDB();

app.use(express.json());

// For using the file in assets folder.
app.use(express.static('./assets'));

// Setting up the view engine
app.set('view engine','ejs');
app.set('views','./views');

const dataList = [];

io.on('connection', (socket) => {
  socket.on('timeseriesData', (data) => {
    dataList.push(data);
    // Broadcast data to connected clients
    io.emit('dataUpdate', dataList);
  });
});



app.use('/emitter', emitterRoutes);
app.use('/listener', listenerRoutes);

app.get('/', (req, res) => {
    res.render('index', { data: dataList });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});