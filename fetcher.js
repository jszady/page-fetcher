const request = require('request');
const fs = require('fs');


const args = process.argv.slice(2);
const url = args[0];
const file = args[1];

request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile(file, body, (error) => {
    if(error)
    {
      return;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${file}`);
  });


});
