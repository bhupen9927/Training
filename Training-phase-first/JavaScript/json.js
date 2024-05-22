
    // Define a JavaScript object
    var person = {
        "name": "bhuppi",
        "age": 24,
        "city": "New York"
    };

    // Convert JavaScript object to JSON string
    var jsonStr = JSON.stringify(person);
    console.log("JSON String:", jsonStr);

    // Parse JSON string back to JavaScript object
    var parsedObj = JSON.parse(jsonStr);
    console.log("Parsed Object:", parsedObj);
