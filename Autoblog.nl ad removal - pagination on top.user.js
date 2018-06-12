// ==UserScript==
// @name           Autoblog.nl ad removal / pagination on top
// @include        https://www.autoblog.nl/*
// @grant          none
// @version        1.0.0
// @namespace      https://github.com/maarten-v/userscripts/
// @updateURL      https://github.com/maarten-v/userscripts/
// @author         Maarten Vliegenthart
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js
// ==/UserScript==

var url = location.pathname;
var split = url.split('/');
if(split[1] == "nieuws" || split[1]=='archive') {
    // doe niets met 't artikel, nieuwsitem
} else {
	jQuery('.background').css('margin','0 auto');
}

$('#right').remove();

document.getElementById('sitepicker').remove();
$('.ab_content_wrapper').prepend($('.ab_navigation'));