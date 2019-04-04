// ==UserScript==
// @name           Buienradar header en ads removal
// @include        https://www.buienradar.nl/*
// @grant          none
// @version        1.0.0
// @namespace      https://github.com/maarten-v/userscripts/
// @updateURL      https://github.com/maarten-v/userscripts/raw/master/Buienradar%20header%20and%20ad%20removal.user.js
// @author         Maarten Vliegenthart
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js
// ==/UserScript==

$('#header').remove();
$('div.page').css('background','none');
$('.spec-block').remove();
