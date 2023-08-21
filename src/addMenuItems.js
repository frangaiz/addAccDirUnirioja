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
        {
            label: 'Portal de la Investigación',
            href: 'https://investigacion.unirioja.es/investigadores'
        },
        {
            label: 'G.I.I.',
            href: 'https://www.unirioja.es/grados-y-dobles-grados/grado-en-ingenieria-informatica/'
        },
    ];

    // Especifica las etiquetas visibles de los accesos directos que se quieren quitar (array)
    const accesosDirectosAQuitar = [
        'Dialnet',
        'Perfil del contratante',
    ]

    const findMenu = (function () {
        let menuCache = {}
        return function(menuText) {
            let menu = menuCache[menuText]
            if (!menu) {
                let menus = document.querySelectorAll("li.menu-item.menu-item-type-custom.menu-item-object-custom.menu-item-has-children")
                if (menus.length) {
                    menu = [...menus].filter(m => m.innerText === menuText)[0];
                }
            }
            return menu;
        }
    })();

    removeItemsFromMenu('Accesos directos', accesosDirectosAQuitar);
    addItemsToMenu('Accesos directos', newAccesosDirectos);
    /*
        window.addEventListener("DOMContentLoaded", () => {
            addItemsToMenu('Accesos directos', newAccesosDirectos);
            removeItemsFromMenu('Accesos directos', accesosDirectosAQuitar
        });
    */

    function addItemsToMenu(menuText, newItems) {
        let menu = findMenu(menuText)
        if (! menu) {
            alert("No he podido encontrar el punto de donde eliminar las opciones del menú")
        }
        let dest = menu?.getElementsByTagName("ul");
        if (dest) {
            let newItemsHTML = newItems.reduce((html, m) => html + `<li class="menu-item menu-item-type-post_type menu-item-object-page">` +
                  `<a href="${m.href}" class="elementor-sub-item">${m.label}</a></li>`, '')
            dest[0].innerHTML += newItemsHTML;
        }
    }


    function removeItemsFromMenu(menuText, itemsToRemove) {
        let menu = findMenu(menuText)
        if (! menu) {
            alert("No he podido encontrar el punto de donde eliminar las opciones del menú")
        }
        let lis = menu?.getElementsByTagName("li");
        if (lis) {
            [...lis].forEach(l => { if (itemsToRemove.includes(l.innerText))
                                      l.remove();
                                  })
        }
    }
})()