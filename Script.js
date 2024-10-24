// ==UserScript==
// @name         FAB (Modèles + Textures)
// @version      0.0.1
// @description  Téléchargement du modèle et des textures
// @author       Jules
// @include      /^https?://(www\.)?fab\.com/.*
// @run-at       document-start
// @grant        unsafeWindow
// @grant        GM_download
// ==/UserScript==
//               https://discord.gg/ERy5pE3RRp

var boutonCree = false;

(function() {
    'use strict';
    var window = unsafeWindow;

    function ajoutBoutonTelechargement() {
        console.log("bouton")
        var p = document.evaluate("//div[@class='fabkit-Surface-root fabkit-Surface--emphasis-background-elevated-low-transparent fabkit-scale--gutterX-spacing-8 fabkit-scale--gutterY-spacing-8 fabkit-Stack-root fabkit-scale--gapX-spacing-3 fabkit-scale--gapY-spacing-3 fabkit-Stack--column ny_JIXbd']", document, null, 9, null).singleNodeValue;
        if(p && !boutonCree) {
            var bouton = document.createElement("button");
            var texte = document.createElement("span");

            bouton.setAttribute("class", "telechargement-Modele-Textures fabkit-Button-root fabkit-Button--md fabkit-Button--secondary fabkit-Button--fullWidth");
            texte.setAttribute("class", "fabkit-Button-label");

            texte.innerHTML = "Telecharger le model";

            p.appendChild(bouton);
            bouton.appendChild(texte);

            boutonCree = true;
        } else {
            setTimeout(ajoutBoutonTelechargement, 3000);
        }
    }

    setTimeout(ajoutBoutonTelechargement, 1000);
})();
