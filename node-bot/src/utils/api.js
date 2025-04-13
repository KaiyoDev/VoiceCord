const axios = require('axios');

async function sendCommand(command) {
  try {
    const response = await axios.post(process.env.PYTHON_API_URL, { command });
    return response.data;
  } catch (error) {
    throw new Error('Lỗi khi gọi API Python: ' + error.message);
  }
}

module.exports = { sendCommand };