//were going to switch it and display the item display page when 
//we click on the item on the inventory page

//items link
noOneCaresWomansTop= document.getElementById("noOneCaresWomansTop");
blueShirt= document.getElementById("blueShirt");
cokeTop= document.getElementById("cokeTop");
//inventory div and itemdisplay div
inventory = document.getElementById("inventory");
displayItem = document.getElementById("displayItem");
//interchangeable information
image1 = document.getElementById("image1");

itemTitle = document.getElementById("itemTitle");
Price = document.getElementById("Price");
pdescription = document.getElementById("pDescription");


//item listeners
noOneCaresWomansTop.addEventListener("click",noOneCaresDisplay);
blueShirt.addEventListener("click",blueShirtDisplay );
cokeTop.addEventListener("click",cokeTopDisplay);

// store the URL for the file we want to get info from
requestURL = 'https://mhickner44.github.io/WebstoreBuild/finalWebpage/womensItems.json';
request = new XMLHttpRequest();  // build something that can go out and request files from the web
request.open('GET', requestURL); // build the GET request

request.responseType = 'json';
request.send();  //send the GET request, but it takes some time to get back


function noOneCaresDisplay() {
    jsonStuff = request.response; //this is the data, so let's store it in a variable
    console.log(jsonStuff);
    theItem = jsonStuff['items'];
 
    inventory.style.display = "none";
    displayItem.style.display = "initial";
 
    //set the details
    image1.src = theItem[8].image1;
    image2.src = theItem[8].image2;
   
    itemTitle.innerHTML = theItem[8].itemTitle;
    Price.innerHTML = theItem[8].Price;
    pdescription.innerHTML = theItem[8].pdescription;
 
 }
 
 function blueShirtDisplay() {
 
    jsonStuff = request.response; //this is the data, so let's store it in a variable
    console.log(jsonStuff);
    theItem = jsonStuff['items'];
 
    inventory.style.display = "none";
    displayItem.style.display = "initial";
   
 
    //set the details
    image1.src = theItem[6].image1;
    image2.src = theItem[6].image2;
    
    itemTitle.innerHTML = theItem[6].itemTitle;
    Price.innerHTML = theItem[6].Price;
    pdescription.innerHTML = theItem[6].pdescription;
 }
 
 function cokeTopDisplay() {
    jsonStuff = request.response; //this is the data, so let's store it in a variable
    console.log(jsonStuff);
    theItem = jsonStuff['items'];
 
    inventory.style.display = "none";
    displayItem.style.display = "initial";
 
    image1.src = theItem[7].image1;
    image2.src = theItem[7].image2;
    
    itemTitle.innerHTML = theItem[7].itemTitle;
    Price.innerHTML = theItem[7].Price;
    pdescription.innerHTML = theItem[7].pdescription;
 }




