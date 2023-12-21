
let button_fetch = document.getElementById("fetch_button");

let contain = document.getElementById("user_contain")

// function that fetch and display the user data

function fetch_data()
{
    // Use the fetch() function to make a GET request to the Reqres API
    fetch("https://reqres.in/api/users")

    // Check if the response is successful
    .then((response) => {

        if (response.ok){
        // Parse the response as JSON
            return response.json();
        }
        // Throw an error if the response is not successful
        else{
            throw new Error("something is wrong")
        }
    })
    // Clear the previous user data from the contain
    .then((data) =>{

        contain.innerHTML = "";

        // Loop through the data array and create elements for each user
        for (let user of data.data){

            // Create a div element for each user
            let userdiv = document.createElement("div");
            
            // Add some styles to the user div
            userdiv.style.margin = "auto";
            userdiv.style.border = "2px solid black";
            userdiv.style.padding = "1%";
            userdiv.style.width = "40% "
            userdiv.style.backgroundColor = "rgb(247, 205, 121)";
            userdiv.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
            userdiv.style.fontSize = "20px";

            // Create an image element for the user avatar
            let userimg = document.createElement("img");
            userimg.src = user.avatar;
            userimg.style.marginLeft = "30%"

            userdiv.appendChild(userimg);

            // Create a paragraph element for the user name
            let username = document.createElement("p");

             // Set the text content of the paragraph element to the user name
            username.textContent = `${user.first_name} ${user.last_name}`;
            username.style.marginLeft = "30%";
            username.style.color = "brown";
            
            // Append the paragraph element to the user div
            userdiv.appendChild(username);

            // Create a paragraph element for the user email
            let useremail = document.createElement("p");
            useremail.textContent = user.email
            useremail.style.marginLeft = "30%";

            // Append the paragraph element to the user div
            userdiv.appendChild(useremail);

            // Append the user div to the contain element
            contain.appendChild(userdiv);

        }
    })
    //  Handle any errors that may occur
    .catch((error) =>
    {
        console.error(error);

        // Display an error message in the contain element
        contain.innerHTML = `<p>something is wrong : ${error.message}</p>`

    })

}

// Add an event listener to the button element that calls the fetchData function when clicked
button_fetch.addEventListener("click", fetch_data);