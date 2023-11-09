const socket = new WebSocket('ws://localhost:3000/data');
const dataList = document.getElementById('dataList');

socket.addEventListener('message', (event) => {
  const data = JSON.parse(event.data);
  const listItem = document.createElement('li');
  listItem.textContent = `Name: ${data.name}, Origin: ${data.origin}, Destination: ${data.destination}, Timestamp: ${data.timestamp}`;
  dataList.appendChild(listItem);
});