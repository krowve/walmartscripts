// ==UserScript==
// @name         walmart.monitor.ps5
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
    ITEMID: "363472942",
    PAGETITLE: "Sony PlayStation 5 Video Game Console - Walmart.com - Walmart.com",
    PRICEMIN: "400",
    PRICEMAX: "600"
}

var ITEM2 = {
    ITEMID: "493824815",
    PAGETITLE: "Sony PlayStation 5, Digital Edition - Walmart.com - Walmart.com",
    PRICEMIN: "300",
    PRICEMAX: "500"
}

var ITEMS = [ITEM1, ITEM2];

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
    var errortitle = document.title;
    if (errortitle.includes("Error Page")) {
        var URL = String(document.URL);
        if (URL.includes("363472942")) {
            nexturl =  "https://www.walmart.com/ip/493824815"
        } else {
            nexturl =  "https://www.walmart.com/ip/363472942";
        }
        console.log(nexturl);
        setTimeout(function(){ window.location = nexturl; }, 1000);
    };
}


},INTERVALTIME);
})();
