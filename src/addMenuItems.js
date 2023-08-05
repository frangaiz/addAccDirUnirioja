// ==UserScript==
// @name         Add New Menu Items to UR
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Añade nuevas entradas en el menú de accesos directos de la web de unirioja
// @author       Francisco José García Izquierdo
// @match        https://www.unirioja.es/*
// @icon         https://www.unirioja.es/favicon.ico
// @grant        none
// ==/UserScript==

(() => {
    // window.addEventListener("DOMContentLoaded", () => addItemsToMenu('Accesos/**/ directos'));

    // Especifica para cada nuevo acceso directo un objeto {} con dos propiedades:
    //   - su etiqueta visible (label)
    //   - y su dirección (href)
    const newAccesosDirectos = [
        {
            label: 'App TFG-TFM',
            href: 'https://sede.unirioja.es/portal/apps/tfe'
        },
        {
            label: 'Portal de servicios',
            href: 'https://www.unirioja.es/portal'
        },
    ];

    addItemsToMenu('Accesos directos', newAccesosDirectos);

    function addItemsToMenu(menuText, newItems) {
        let menus = document.querySelectorAll("li.menu-item.menu-item-type-custom.menu-item-object-custom.menu-item-has-children")
        if (menus.length) {
            let dest = [...menus].filter(m => m.innerText === menuText)[0];
            dest = dest?.getElementsByTagName("ul");
            if (dest) {
                let newItemsHTML = newItems.reduce((html, m) => html + `<li class="menu-item menu-item-type-post_type menu-item-object-page">` +
                  `<a href="${m.href}" class="elementor-sub-item">${m.label}</a></li>`, '')
                dest[0].innerHTML += newItemsHTML;
            }
        } else {
            alert("No he podido encontrar el punto donde anclar las nuevas opciones del menú")
        }
    }
})()