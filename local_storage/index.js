
 // This function stores the user's name and age in Local Storage

function storeData() {
  // get the input values
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  
  if (name && age){

    // store them in local storage
  localStorage.setItem("name", name);
  localStorage.setItem("age", age);

  // display a confirmation message
  alert("Data stored successfully!");

  }
  else{
    alert("Please enter your name and age!")
  }
}

// This function retrieves and displays the stored data from Local Storage
function display() {

  var table = document.getElementById("table");

  if (localStorage.length > 0){

    table.textContent = "";

    var tr = document.createElement("tr");

    var td1 = document.createElement("td");

    var td2 = document.createElement("td");

    // get the name and age from local storage
    var name = localStorage.getItem("name");
    var age = localStorage.getItem("age");

    td1.textContent = name;
    td2.textContent = age;

    // append the table data to the table row
    tr.appendChild(td1);
    tr.appendChild(td2);

    // append the table row to the table
    table.appendChild(tr);
  }
  else{
    table.innerHTML = "No data available !"
  }

}
