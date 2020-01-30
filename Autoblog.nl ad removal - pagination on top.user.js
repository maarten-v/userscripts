// ==UserScript==
// @name           Autoblog.nl ad removal / pagination on top
// @include        https://www.autoblog.nl/*
// @grant          none
// @version        1.0.5
// @namespace      https://github.com/maarten-v/userscripts/
// @updateURL      https://github.com/maarten-v/userscripts/raw/master/Autoblog.nl%20ad%20removal%20-%20pagination%20on%20top.user.js
// @author         Maarten Vliegenthart
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js
// ==/UserScript==

// fade branded content
$('p.entry-meta:contains("Branded content")').parents('article').css('opacity',0.5)

$('aside').remove();

// remove sitepicker
document.getElementById('sitepicker').remove();

// copy navigation to top
$('.ab_navigation').clone().prependTo($('.ab_content_wrapper').first())
