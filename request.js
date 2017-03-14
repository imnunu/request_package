// require `request` and the Node `fs` (filesystem) module
var request = require('request');
var fs = require('fs');
console.log('Downloading image...');
request.get('https://sytantris.github.io/http-examples/future.jpg')               // Note 1
       .on('error', function (err) {                                   // Note 2
         throw err;
       })
       .on('response', function (response) {                           // Note 3
         console.log('Response Status Message: ', response.statusMessage, 'content-type', response.headers['content-type'], '\nDownload complete.');
       })
       .pipe(fs.createWriteStream('./future.jpg'));               // Note 4

// Notes:
// 1. `request.get` is equivalent to `request()`
// 2. `request.on('error', callback)` handles any error
// 3. `request.on('response, callback)` handles the response
// 4. What is happening here?

// console.log('Downloading image...');
// console.log('Download complete.');