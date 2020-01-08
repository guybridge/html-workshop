
const catButton = document.getElementById("catButton");

// Add a "listener for the button"
catButton.addEventListener("click", (e)=>{
    
    // Fetch the random cat image from the API
    fetch("https://api.thecatapi.com/v1/images/search")
        .then(response => {
            return response.json();
        })
        .then(json => {
            // Log the json to the console for debugging purposes
            console.log(json[0].url);

            // Select the catImage
            let catImage = document.getElementById("catImage");

            // Set the new cat image
            catImage.src = json[0].url
            
        })
        .catch(error => {
            console.log(error);
        })

});

