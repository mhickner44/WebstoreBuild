//were going to switch it and display the item display page when 
//we click on the item on the inventory page

//items link
lightBluePants= document.getElementById("lightBluePants");
blackPants= document.getElementById("blackPants");
blueJeans= document.getElementById("blueJeans");
//inventory div and itemdisplay div
inventory = document.getElementById("inventory");
displayItem = document.getElementById("displayItem");
//interchangeable information
image1 = document.getElementById("image1");

itemTitle = document.getElementById("itemTitle");
Price = document.getElementById("Price");
pdescription = document.getElementById("pDescription");


//item listeners
lightBluePants.addEventListener("click",lightBluePantsDisplay);
blackPants.addEventListener("click",blackPantsDisplay);
blueJeans.addEventListener("click",blueJeansDisplay);

// store the URL for the file we want to get info from
requestURL = 'https://mhickner44.github.io/WebstoreBuild/finalWebpage/womensItems.json';
request = new XMLHttpRequest();  // build something that can go out and request files from the web
request.open('GET', requestURL); // build the GET request

request.responseType = 'json';
request.send();  //send the GET request, but it takes some time to get back




function lightBluePantsDisplay() {

   jsonStuff = request.response; //this is the data, so let's store it in a variable
   console.log(jsonStuff);
   theItem = jsonStuff['items'];

   inventory.style.display = "none";
   displayItem.style.display = "initial";
  

   //set the details
   image1.src = theItem[0].image1;
   
   
   itemTitle.innerHTML = theItem[0].itemTitle;
   Price.innerHTML = theItem[0].Price;
   pdescription.innerHTML = theItem[0].pdescription;
}

function blackPantsDisplay() {

   jsonStuff = request.response; //this is the data, so let's store it in a variable
   console.log(jsonStuff);
   theItem = jsonStuff['items'];

   inventory.style.display = "none";
   displayItem.style.display = "initial";
  

   //set the details
   image1.src = theItem[1].image1;

   
   itemTitle.innerHTML = theItem[1].itemTitle;
   Price.innerHTML = theItem[1].Price;
   pdescription.innerHTML = theItem[1].pdescription;
}

function blueJeansDisplay() {

   jsonStuff = request.response; //this is the data, so let's store it in a variable
   console.log(jsonStuff);
   theItem = jsonStuff['items'];

   inventory.style.display = "none";
   displayItem.style.display = "initial";
  

   //set the details
   image1.src = theItem[2].image1;
  
   
   itemTitle.innerHTML = theItem[2].itemTitle;
   Price.innerHTML = theItem[2].Price;
   pdescription.innerHTML = theItem[2].pdescription;
}