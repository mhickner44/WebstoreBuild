//were going to switch it and display the item display page when 
//we click on the item on the inventory page

//items link
blackHeels = document.getElementById("blackHeels");
sparklyHeels = document.getElementById("sparklyHeels");
whiteShoes = document.getElementById("whiteShoes");
//inventory div and itemdisplay div
inventory = document.getElementById("inventory");
displayItem = document.getElementById("displayItem");
//interchangeable information
image1 = document.getElementById("image1");

itemTitle = document.getElementById("itemTitle");
Price = document.getElementById("Price");
pdescription = document.getElementById("pDescription");


//item listeners
blackHeels.addEventListener("click", blackHeelsDisplay);
sparklyHeels.addEventListener("click", sparklyHeelsDisplay);
whiteShoes.addEventListener("click", whiteShoesDisplay);

// store the URL for the file we want to get info from
requestURL = 'https://mhickner44.github.io/WebstoreBuild/finalWebpage/womensItems.json';
request = new XMLHttpRequest();  // build something that can go out and request files from the web
request.open('GET', requestURL); // build the GET request

request.responseType = 'json';
request.send();  //send the GET request, but it takes some time to get back



function blackHeelsDisplay() {

   jsonStuff = request.response; //this is the data, so let's store it in a variable
   console.log(jsonStuff);
   theItem = jsonStuff['items'];

   inventory.style.display = "none";
   displayItem.style.display = "initial";


   //set the details
   image1.src = theItem[3].image1;
   

   itemTitle.innerHTML = theItem[3].itemTitle;
   Price.innerHTML = theItem[3].Price;
   pdescription.innerHTML = theItem[3].pdescription;
}

function sparklyHeelsDisplay() {

   jsonStuff = request.response; //this is the data, so let's store it in a variable
   console.log(jsonStuff);
   theItem = jsonStuff['items'];

   inventory.style.display = "none";
   displayItem.style.display = "initial";


   //set the details
   image1.src = theItem[5].image1;
   

   itemTitle.innerHTML = theItem[5].itemTitle;
   Price.innerHTML = theItem[5].Price;
   pdescription.innerHTML = theItem[5].pdescription;
}

function whiteShoesDisplay() {

   jsonStuff = request.response; //this is the data, so let's store it in a variable
   console.log(jsonStuff);
   theItem = jsonStuff['items'];

   inventory.style.display = "none";
   displayItem.style.display = "initial";


   //set the details
   image1.src = theItem[4].image1;
  

   itemTitle.innerHTML = theItem[4].itemTitle;
   Price.innerHTML = theItem[4].Price;
   pdescription.innerHTML = theItem[4].pdescription;
}


