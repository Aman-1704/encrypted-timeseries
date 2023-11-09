const express = require('express');
const expressWebSocket = require('express-ws');
const connectDB = require('./config/database');
const emitterRoutes = require('./routes/emitterRoutes');
const listenerRoutes = require('./routes/listenerRoutes');

const app = express();
expressWebSocket(app);

connectDB();

app.use(express.json());

app.use('/emitter', emitterRoutes);
app.use('/listener', listenerRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});