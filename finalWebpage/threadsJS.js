//make banner a slideshow
leftButton = document.getElementById("leftButton");
rightBUtton = document.getElementById("rightButton");

//listener
leftButton.addEventListener("click", goLeftClick);
rightButton.addEventListener("click", goRightClick);

var images = ['threadsImages/twoGuys.jpg',
    'threadsImages/peopleLounging.jpg',
    'threadsImages/manInRoad.jpg'];
var imgs = [];

for (var i = 0; i < images.length; i++) {

    imgs[i] = new Image();
    imgs[i] = images[i];
}


var i = 0;
function goRightClick() {

    if (i == 2) {
        //disable button 
        bannerImage.src = imgs[i];
        rightButton.disabled;
    } else {
        rightButton.enabled;
        bannerImage.src = imgs[i];
        i++;
    }
}

function goLeftClick() {
    rightButton.enabled;
    if (i == 0) {
        leftButton.disabled
        bannerImage.src = imgs[i];
    } else {
        leftButton.enabled;
        i--;
        bannerImage.src = imgs[i];
    }
}



//didnt work how i want it to loop 
/*
var i = 0;
function goRightClick() {
    if (i == 2) {
        i == 0;
        bannerImage.src = imgs[i];

    } else {

        bannerImage.src = imgs[i];
        i++;
    }

}
function goLeftClick() {
    if (i == 0) {
        i = 2;
        bannerImage.src = imgs[i];
    } else {
        i--;
        bannerImage.src = imgs[i];
    }

}

*/

