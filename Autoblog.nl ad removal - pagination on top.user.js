// ==UserScript==
// @name           Autoblog.nl ad removal / pagination on top
// @include        https://www.autoblog.nl/*
// @grant          none
// @version        1.0.8
// @namespace      https://github.com/maarten-v/userscripts/
// @updateURL      https://github.com/maarten-v/userscripts/raw/master/Autoblog.nl%20ad%20removal%20-%20pagination%20on%20top.user.js
// @author         Maarten Vliegenthart
// @require        https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// ==/UserScript==

// fade branded content
$('p.entry-meta:contains("advertorial"),p.entry-meta:contains("Branded content")').parents('article').css('opacity',0.5)

//remove sidebar
$('aside').remove();

// copy pagination to top
$('div.pagination').clone().prependTo($('main'))
