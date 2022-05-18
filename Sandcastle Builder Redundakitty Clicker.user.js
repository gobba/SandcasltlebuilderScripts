// ==UserScript==
// @name         Sandcastle Builder Redundakitty Clicker
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Taken from https://www.reddit.com/r/SandcastleBuilder/comments/ocjafr/updated_redundakitty_timerautoclicker/
// @author       Gobba
// @match        http://castle.chirpingmustard.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @downloadURL	 https://github.com/gobba/SandcasltlebuilderScripts/raw/main/Sandcastle%20Builder%20Redundakitty%20Clicker.user.js
// ==/UserScript==

(function() {
    'use strict';


	var chance = prompt("Percent chance of redundakitty auto-click? (1-100)","33");
	var triedclick = 0;
	var rand;
	setInterval(
		function() {
			if (Molpy.Redacted.location > 0) {
				document.title = "! kitten !";
				if (triedclick != 1) {
					rand = Math.floor((Math.random()*100)+1);
					if (rand <= chance) {
						Molpy.Redacted.onClick(0);
						triedclick = 0;
					} else {
						triedclick = 1;
					}
				}
			} else {
				document.title = Molpy.Redacted.toggle - Molpy.Redacted.countup;
				if (triedclick != 0) {
					triedclick=0;
				}
			}
		}, 1000);

})();
