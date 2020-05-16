//were going to switch it and display the item display page when 
//we click on the item on the inventory page

//items link
turfShoes = document.getElementById("turfShoes");
brownShoes = document.getElementById("brownShoes");
runningShoes = document.getElementById("runningShoes");
//inventory div and itemdisplay div
inventory = document.getElementById("inventory");
displayItem = document.getElementById("displayItem");
//interchangeable information
image1 = document.getElementById("image1");
image2 = document.getElementById("image2");
image3 = document.getElementById("image3");
itemTitle = document.getElementById("itemTitle");
Price = document.getElementById("Price");
pdescription = document.getElementById("pDescription");


//item listeners
turfShoes.addEventListener("click", turfShoesDisplay);
brownShoes.addEventListener("click", brownShoesDisplay);
runningShoes.addEventListener("click",runningShoesDisplay);

// store the URL for the file we want to get info from
requestURL = 'https://mhickner44.github.io/WebstoreBuild/finalWebpage/items.json';
request = new XMLHttpRequest();  // build something that can go out and request files from the web
request.open('GET', requestURL); // build the GET request

request.responseType = 'json';
request.send();  //send the GET request, but it takes some time to get back






function turfShoesDisplay() {
    jsonStuff = request.response; //this is the data, so let's store it in a variable
    console.log(jsonStuff);
    theItem = jsonStuff['items'];

    inventory.style.display = "none";
    displayItem.style.display = "initial";

    //set the details
    image1.src = theItem[3].image1;
    image2.src = theItem[3].image2;
   image3.src=theItem[3].image3;

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
    image3.src=theItem[4].image3; 
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
    image3.src=theItem[5].image3;
    itemTitle.innerHTML = theItem[5].itemTitle;
    Price.innerHTML = theItem[5].Price;
    pdescription.innerHTML = theItem[5].pdescription;
}