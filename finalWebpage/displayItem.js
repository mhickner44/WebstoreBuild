//were going to switch it and display the item display page when 
//we click on the item on the inventory page

//items link
blueJeans = document.getElementById("blueJeans");
tanShorts=document.getElementById("tanShorts");
//inventory div and itemdisplay div
bottomItems = document.getElementById("inventory");
displayItem = document.getElementById("displayItem");
//interchangeable information
image1= document.getElementById("image1");
image2= document.getElementById("image2");
image3= document.getElementById("image3");
itemTitle= document.getElementById("itemTitle");
Price= document.getElementById("Price");
pdescription= document.getElementById("pDescription");


//item listeners
blueJeans.addEventListener("click", blueJeansDisplay);
tanShorts.addEventListener("click",tanShortsDisplay);

// store the URL for the file we want to get info from
requestURL  = 'https://mhickner44.github.io/WebstoreBuild/finalWebpage/items.json';
request = new XMLHttpRequest();  // build something that can go out and request files from the web
request.open('GET', requestURL); // build the GET request

request.responseType ='json';
request.send();  //send the GET request, but it takes some time to get back






function blueJeansDisplay() {
    jsonStuff = request.response; //this is the data, so let's store it in a variable
    console.log(jsonStuff);
    theItem=jsonStuff['items'];
    
    bottomItems.style.display="none";
    displayItem.style.display="initial";

image1.src=theItem[0].image1;
pdescription.innerHTML=theItem[0].pdescription;
 
}

function tanShortsDisplay(){

    jsonStuff = request.response; //this is the data, so let's store it in a variable
    console.log(jsonStuff);
    theItem=jsonStuff['items'];

    bottomItems.style.display="none";
    displayItem.style.display="initial";
    
    image1.src=theItem[1].image1;
pdescription.innerHTML=theItem[1].pdescription;
}

