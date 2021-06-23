// ==UserScript==
// @name         walmart.monitor
// @namespace    http://tampermonkey.net/
// @version      2021061901
// @description  try to take over the world!
// @author       You
// @match        https://www.walmart.com/*
// @icon         https://www.google.com/s2/favicons?domain=walmart.com
// @grant        none
// ==/UserScript==

// Change this value to lengthen or shorten the time between refreshes
var INTERVALTIME = 5000;
// set to 0 to not play sound
var AUDIO = "1";
// change URL for a different sound file
// enable popups in your browser for the sound to play
var AUDIOURL = "https://www.myinstants.com/media/sounds/wrong-answer-sound-effect.mp3";

var ITEM1 = {
    ITEMID: "381307598",
    PAGETITLE: "EVGA GeForce RTX 3060 XC Gaming 12G Graphic Card - Walmart.com - Walmart.com",
    PRICEMIN: "400",
    PRICEMAX: "700"
}

var ITEM2 = {
    ITEMID: "556784521",
    PAGETITLE: "EVGA GeForce RTX 3080 FTW3 Ultra Gaming Graphic Cards, Black - Walmart.com - Walmart.com",
    PRICEMIN: "800",
    PRICEMAX: "1100"
}

var ITEM3 = {
    ITEMID: "804934537",
    PAGETITLE: "EVGA GeForce RTX 3060 Ti FTW3 Ultra Gaming, 08G-P5-3667-KR, 8GB GDDR6, iCX3 Cooling, ARGB LED, Metal Backplate - Walmart.com - Walmart.com",
    PRICEMIN: "500",
    PRICEMAX: "700"
}

var ITEM4 = {
    ITEMID: "645698577",
    PAGETITLE: "EVGA GeForce RTX 3090 FTW3 Ultra Gaming Graphic Card, Black - Walmart.com - Walmart.com",
    PRICEMIN: "1900",
    PRICEMAX: "2100"
}

var ITEM5 = {
    ITEMID: "912221235",
    PAGETITLE: "EVGA GeForce RTX 3070 FTW3 Ultra Gaming Graphic Cards, Black - Walmart.com - Walmart.com",
    PRICEMIN: "600",
    PRICEMAX: "800"
}

var ITEM6 = {
    ITEMID: "457626349",
    PAGETITLE: "EVGA GeForce RTX 3070 XC3 ULTRA GAMING 8GB Graphic Card - Walmart.com - Walmart.com",
    PRICEMIN: "600",
    PRICEMAX: "900"
}


var ITEMS = [ITEM1, ITEM2, ITEM3, ITEM4, ITEM5, ITEM6];
//var ITEMS = [ITEM2, ITEM3, ITEM5, ITEM6];
//var ITEMS = [ITEM2, ITEM4, ITEM5, ITEM6];

(function() {

var idVar = setInterval(function() {

var pagetitle = String(document.title);
for (var i = 0; i < ITEMS.length; i++) {
    if (pagetitle.includes(ITEMS[i].PAGETITLE)) {
        console.log(ITEMS[i]);
        var ATC = "0";
        var price = document.querySelector('[class="price-characteristic"]').innerText;
        price = price.replace(/,/g, "");
        console.log(price);
        if ((parseInt(price) > parseInt(ITEMS[i].PRICEMIN)) && (parseInt(price) < parseInt(ITEMS[i].PRICEMAX))) {
            console.log(price + " is in range");
            if (document.body.innerHTML.search("Out of stock") > 0) {
                ATC = "0";
                console.log(ATC);
            } else {
                ATC = "1";
                console.log(ATC);
            }
        } else {
            console.log(price + " is out of range");
        }
        var nexturl = "";
        if (ATC == "1") {
            console.log(ATC);
            nexturl = "https://affil.walmart.com/cart/buynow?items=" + ITEMS[i].ITEMID;
            console.log(nexturl);
            if (AUDIO = "1") { window.open(AUDIOURL);}
            window.location = nexturl;
        }

        if (i + 1 < ITEMS.length) {
            nexturl = "https://www.walmart.com/ip/" + ITEMS[i+1].ITEMID;
            console.log(nexturl);
            setTimeout(function(){ window.location = nexturl; }, 1000);
        } else {
            nexturl = "https://www.walmart.com/ip/" + ITEMS[0].ITEMID;
            console.log(nexturl);
            setTimeout(function(){ window.location = nexturl; }, 1000);
        }
}
}


},INTERVALTIME);
})();
