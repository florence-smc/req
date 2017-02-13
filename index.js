// // require `request` and the Node `fs` (filesystem) module
// var request = require('request');
// var fs = require('fs');

// request.get('https://sytantris.github.io/http-examples')               // Note 1
//        .on('error', function (err) {                                   // Note 2
//          throw err; 
//        })
//        .on('response', function (response) {                           // Note 3
//          console.log('Response Status Code: ', response.statusCode);
//        })
//        .pipe(fs.createWriteStream('./downloaded.html'));               // Note 4

// // Notes:
// // 1. `request.get` is equivalent to `request()`
// // 2. `request.on('error', callback)` handles any error
// // 3. `request.on('response, callback)` handles the response
// // 4. What is happening here?



// chaining request methods
var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
			 .on('error', function(err) {
			 		console.log('Error: ', err)
			 }) 
			 .on('response', function(response) {
			 	console.log('Reponse Status Code: ', response.statusCode, response.statusMessage);
			 	console.log(response.headers['content-type']);
			 	// console.log('Download complete.');
			 })
			 .pipe(fs.createWriteStream('./future.jpg'));

console.log('Downloading image...');