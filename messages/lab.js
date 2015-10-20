// Your JavaScript goes here...

//Referenced: http://www.w3schools.com/json/json_http.asp 
function parse() {
	var req = new XLMHttpRequest(); 
	var fileURL = "data.json"; 

	req.onreadystatechange = function() {
		if (req.readyState == 4 && req.status == 200) {
			parsedData = JSON.parse(req.responseText);
			print(parsedData); 
		}
	} 
}


function print(parsedData) {
	elem = document.getElementById("messages");
	for (count = 0; count < parsedData.length; count++) {
		
	}
}
