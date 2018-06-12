// ==UserScript==
// @name        Nu.nl remove header
// @namespace   https://github.com/maarten-v/userscripts/
// @include     https://nu*.nl/*
// @include     https://www.nu*.nl/*
// @version     1.0.0
// @namespace      https://github.com/maarten-v/userscripts/
// @updateURL      https://github.com/maarten-v/userscripts/raw/master/nu.nl%20remove%20header.js
// @author         Maarten Vliegenthart
// @description Removes useless pageheader from top of screen
// ==/UserScript==

let HeaderFoetsie = document.getElementsByClassName('webring');
while (HeaderFoetsie.length) {
    HeaderFoetsie[0].parentNode.removeChild(HeaderFoetsie[0]);
}

document.getElementById('header').remove();