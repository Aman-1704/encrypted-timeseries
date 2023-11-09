const listenerService = require('../services/listenerService');

const handleEncryptedData = (socket) => {
  socket.on('encryptedData', async (encryptedData) => {
    try {
      await listenerService.processEncryptedData(encryptedData);
      // Broadcast real-time data to frontend
      // ...
    } catch (error) {
      console.error(error);
    }
  });
};

module.exports = {
  handleEncryptedData,
};