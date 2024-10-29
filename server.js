const fs = require('fs');
const path = require('path');

module.exports.handler = async (event) => {
  const filePath = path.join(__dirname, 'client/build', 'index.html');
  const fileContent = fs.readFileSync(filePath, 'utf8');

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: fileContent,
  };
};
