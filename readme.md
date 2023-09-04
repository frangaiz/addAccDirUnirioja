# Cambiar Accesos Directos en unirioja.es

Este es un script para TamperMonkey para añadir nuevas entradas de menú en el menú de accesos 
directos de la web de unirioja.es. Y, añadido en una nueva versión, también para quitar 
accesos directos que aparecen en la página web original y que no se usan. 

Para lograrlo hay que

1. Instalar TamperMonkey como extensión del navegador
   - de Firefox ([TamperMonkey](https://addons.mozilla.org/es/firefox/addon/tampermonkey/?utm_source=addons.mozilla.org)) 
   - de Google Chrome ([TamperMonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo))
   - de Edge ([TamperMonkey](https://www.bing.com/ck/a?!&&p=f0de5d052d8fff23JmltdHM9MTY5Mzc4NTYwMCZpZ3VpZD0zZmRlYzYwZC1hN2FkLTZhMDgtMDEyMy1kN2ZjYTY4NjZiMjgmaW5zaWQ9NTIwNw&ptn=3&hsh=3&fclid=3fdec60d-a7ad-6a08-0123-d7fca6866b28&psq=ampermonket+edge&u=a1aHR0cHM6Ly9taWNyb3NvZnRlZGdlLm1pY3Jvc29mdC5jb20vYWRkb25zL2RldGFpbC90YW1wZXJtb25rZXkvaWlrbWtqbXBhYWRhb2JhaG1sZXBlbG9lbmRuZGZwaGQ&ntb=1))
2. Acceder a la extensión (depende de cada navegador) y en la opción "Agregar nuevo script" copiar y pegar el script que aparece más abajo, adaptando los accesos directos a las necesidades de cada uno (ver pto. 4). Guardar (menú Archivo -> Guardar)
3. En este script se configura la ejecución del código para cualquier URL de www.unirioja.es (https://www.unirioja.es/*)
4. Los nuevos ítems del menú se configuran en la estructura de datos `newAccesosDirectos`, especificando para cada entrada su etiqueta visible (`label`) y su dirección (`href`)
5. Los accesos directos que se deseen quitar se configuran en el array `accesosDirectosAQuitar`, incluyendo en él los textos de los accesos directos a quitar

**DISCLAIMER**

El script depende del HTML de la página (localiza el punto de inserción de los nuevos elementos de 
menú en actual DOM de la página usando como referencia unas clases CSS). Si el HTML cambia debido a 
un rediseño o versionado de la web, el script dejará de funcionar. Por favor, avísame 
[por email](email:francisco.garcia@unirioja.es) si detectas tan catastrófico suceso y trataré de 
parchearlo.

## Edición del script. Añadir, o quitar, más accesos directos

Si quieres añadir nuevos ítems al script una vez configurado este, accede a la extensión del 
TamperMonkey en el navegador, entra en "Dashboard" y edita el script llamado 
"Add New Menu Items to UR". Procede como se indica en el anterior punto 4 para añadir 
más opciones al menú, o quitar alguna de las que hayas añadido antes.

Y si lo que quieres es cambiar los accesos directos a quitar de la página web original, procede 
como se indica en el anterior punto 5. 

## El código del script

``` Javascript
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

    // Especifica para cada nueva entrada de menú un objeto {} con dos propiedades:
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

    // Especifica las etiquetas visibles de las entradas de menú que se quieren quitar (array)
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
                    menuCache[menuText] = menu
                }
            }
            return menu;
        }
    })();

    // Llamadas a las funciones que cambian los menús
    removeItemsFromMenu('Accesos directos', accesosDirectosAQuitar);
    addItemsToMenu('Accesos directos', newAccesosDirectos);

    function addItemsToMenu(menuText, newItems) {
        let menu = findMenu(menuText)

        if (! menu) {
            alertMenuNotFound(menuText)
            return
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
            alertMenuNotFound(menuText)
            return
        }

        let lis = menu?.getElementsByTagName("li");
        if (lis) {
            [...lis].forEach(l => { if (itemsToRemove.includes(l.innerText))
                                      l.remove();
                                  })
        }
    }

    function alertMenuNotFound(menuText) {
        console.error("No he podido encontrar el menú '"+menuText+"' para modificar sus opciones")
        // alert("No he podido encontrar el menú '"+menuText+"' para modificar sus opciones")
    }
})()
```

