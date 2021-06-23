// ==UserScript==
// @name         walmart.checkout
// @namespace    http://tampermonkey.net/
// @version      2021061901
// @description  try to take over the world!
// @author       You
// @match        https://www.walmart.com/checkout/*
// @match        https://www.walmart.com/cart/*
// @icon         https://www.google.com/s2/favicons?domain=walmart.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

var idVar = setInterval(function() {
    var button;

    var urlstring = String(document.location.href);
    if (urlstring.includes("walmart.com/cart")) {
        button = document.querySelector('[data-automation-id="cart-pos-proceed-to-checkout"]');
        button.click()
    }
    if (urlstring.includes("walmart.com/checkout/#/fulfillment")) {
        button = document.querySelector('[aria-label="Continue to Delivery Address"]');
        button.click()
    }

    if (urlstring.includes("walmart.com/checkout/#/shipping-address")) {
        button = document.querySelector('[aria-label="Continue to Payment Options"]');
        button.click()
    }

    if (urlstring.includes("walmart.com/checkout/#/payment")) {
        button = document.querySelector('[aria-label="Review Your Order"]');
        setTimeout(function(){ button.click(); }, 1000);
    }

},1000);

})();
