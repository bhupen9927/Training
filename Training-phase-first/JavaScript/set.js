  let demo;
        function newWindow(){
           
            let url="https://youtube.com/leelawebdev";
            let windowOpen= window.open(url,'','width=400,height=400');
            console.log(windowOpen,"aaaaaaaaaa")
          
        
            setTimeout(() => {
                // closeWindow()
                console.log(windowOpen)
                window.close();
                document.write("Time is up");
            },5000);
        }

// Define a function to be executed
    function sayHello() {
      var outputDiv = document.getElementById('output');
      outputDiv.innerHTML += 'Hello!<br>';
    }

    // Call setInterval to execute the function every 2 seconds
    setInterval(sayHello, 2000);