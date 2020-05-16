turfShoes = document.getElementById("turfShoes");
brownShoes = document.getElementById("brownShoes");
runningShoes = document.getElementById("runningShoes");
blueJeans = document.getElementById("blueJeans");
tanShorts = document.getElementById("tanShorts");
tanPants = document.getElementById("tanPants");
greyShirt= document.getElementById("greyShirt");
stripedShirt= document.getElementById("stripedShirt");
collaredShirt= document.getElementById("collaredShirt");

inventory = document.getElementById("inventory");
displayItem = document.getElementById("displayItem");

image1 = document.getElementById("image1");
image2 = document.getElementById("image2");
image3 = document.getElementById("image3");
itemTitle = document.getElementById("itemTitle");
Price = document.getElementById("Price");
pdescription = document.getElementById("pDescription");


turfShoes.addEventListener("click", turfShoesDisplay);
brownShoes.addEventListener("click", brownShoesDisplay);
runningShoes.addEventListener("click",runningShoesDisplay);
blueJeans.addEventListener("click", blueJeansDisplay);
tanShorts.addEventListener("click", tanShortsDisplay);
tanPants.addEventListener("click",tanPantsDisplay);
greyShirt.addEventListener("click",greyShirtDisplay );
stripedShirt.addEventListener("click",stripedShirtDisplay );
collaredShirt.addEventListener("click",collaredShirtDisplay);


// store the URL for the file we want to get info from
requestURL = 'https://mhickner44.github.io/WebstoreBuild/finalWebpage/items.json';
request = new XMLHttpRequest();  // build something that can go out and request files from the web
request.open('GET', requestURL); // build the GET request

request.responseType = 'json';
request.send();  //send the GET request, but it takes some time to get back

function blueJeansDisplay() {
    jsonStuff = request.response; //this is the data, so let's store it in a variable
    console.log(jsonStuff);
    theItem = jsonStuff['items'];

    inventory.style.display = "none";
    displayItem.style.display = "initial";

    //set the details
    image1.src = theItem[0].image1;
    image2.src = theItem[0].image2;
   
    itemTitle.innerHTML = theItem[0].itemTitle;
    Price.innerHTML = theItem[0].Price;
    pdescription.innerHTML = theItem[0].pdescription;

}

function tanShortsDisplay() {

    jsonStuff = request.response; //this is the data, so let's store it in a variable
    console.log(jsonStuff);
    theItem = jsonStuff['items'];

    inventory.style.display = "none";
    displayItem.style.display = "initial";
   

    //set the details
    image1.src = theItem[1].image1;
    image2.src = theItem[1].image2;
    
    itemTitle.innerHTML = theItem[1].itemTitle;
    Price.innerHTML = theItem[1].Price;
    pdescription.innerHTML = theItem[1].pdescription;
}

function tanPantsDisplay() {
    jsonStuff = request.response; //this is the data, so let's store it in a variable
    console.log(jsonStuff);
    theItem = jsonStuff['items'];

    inventory.style.display = "none";
    displayItem.style.display = "initial";

    image1.src = theItem[2].image1;
    image2.src = theItem[2].image2;
    
    itemTitle.innerHTML = theItem[2].itemTitle;
    Price.innerHTML = theItem[2].Price;
    pdescription.innerHTML = theItem[2].pdescription;
}


function greyShirtDisplay() {
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

function stripedShirtDisplay() {

    jsonStuff = request.response; //this is the data, so let's store it in a variable
    console.log(jsonStuff);
    theItem = jsonStuff['items'];

    inventory.style.display = "none";
    displayItem.style.display = "initial";
   

    //set the details
    image1.src = theItem[7].image1;
    image2.src = theItem[7].image2;
    
    itemTitle.innerHTML = theItem[7].itemTitle;
    Price.innerHTML = theItem[7].Price;
    pdescription.innerHTML = theItem[7].pdescription;
}

function collaredShirtDisplay() {
    jsonStuff = request.response; //this is the data, so let's store it in a variable
    console.log(jsonStuff);
    theItem = jsonStuff['items'];

    inventory.style.display = "none";
    displayItem.style.display = "initial";

    image1.src = theItem[8].image1;
    image2.src = theItem[8].image2;
    
    itemTitle.innerHTML = theItem[8].itemTitle;
    Price.innerHTML = theItem[8].Price;
    pdescription.innerHTML = theItem[8].pdescription;
}



function turfShoesDisplay() {
    jsonStuff = request.response; //this is the data, so let's store it in a variable
    console.log(jsonStuff);
    theItem = jsonStuff['items'];

    inventory.style.display = "none";
    displayItem.style.display = "initial";

    //set the details
    image1.src = theItem[3].image1;
    image2.src = theItem[3].image2;
   
    itemTitle.innerHTML = theItem[3].itemTitle;
    Price.innerHTML = theItem[3].Price;
    pdescription.innerHTML = theItem[3].pdescription;

}

function brownShoesDisplay() {

    jsonStuff = request.response; //this is the data, so let's store it in a variable
    console.log(jsonStuff);
    theItem = jsonStuff['items'];

    inventory.style.display = "none";
    displayItem.style.display = "initial";
   

    //set the details
    image1.src = theItem[4].image1;
    image2.src = theItem[4].image2;
    
    itemTitle.innerHTML = theItem[4].itemTitle;
    Price.innerHTML = theItem[4].Price;
    pdescription.innerHTML = theItem[4].pdescription;
}

function runningShoesDisplay() {
    jsonStuff = request.response; //this is the data, so let's store it in a variable
    console.log(jsonStuff);
    theItem = jsonStuff['items'];

    inventory.style.display = "none";
    displayItem.style.display = "initial";

    image1.src = theItem[5].image1;
    image2.src = theItem[5].image2;
    
    itemTitle.innerHTML = theItem[5].itemTitle;
    Price.innerHTML = theItem[5].Price;
    pdescription.innerHTML = theItem[5].pdescription;
}