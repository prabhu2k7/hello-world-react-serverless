// handler.js
'use strict';
const fs = require('fs');
const path = require('path');

module.exports.hello = async (event) => {
  try {
    // Read the HTML file
    const htmlContent = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html',
      },
      body: htmlContent,
    };
  } catch (error) {
    console.error('Error reading HTML file:', error);
    return {
      statusCode: 500,
      body: 'An error occurred while loading the page.',
    };
  }
};
