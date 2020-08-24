var http = require('http');

function handle_incoming_request(req, res) {
	console.log("INCOMING REQUEST: " + req.method + " " + req.url);
	res.writeHead(200, { "Content-Type" : "application/json"});

	res.end(JSON.stringify( {error:null }) + "\n");
	
	// failure responeses will look like this:
	{ error: " missing data",
			message: " You must include a last name for the user"}

	// Success respone will usually have a "data" object
	{ error: null,
			data: {
				user: {
					fist_name: "Kiem",
						lastname: " Nguyen Duc",
						email: "lukekiem@gmail.com"
				}
			}
	}
		
}

var s = http.createServer(handle_incoming_request);
s.listen(8081);

