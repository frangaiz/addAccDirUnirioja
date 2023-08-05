# Ampliar Accesos Directos en unirioja.es

Este es un script para TamperMonkey para añadir nuevas entradas de menú en el menú de accesos 
directos de la web de unirioja.es.

Para lograrlo hay que

1. Instalar TamperMonkey como extensión del navegador
   - de Firefox ([TamperMonkey](https://addons.mozilla.org/es/firefox/addon/tampermonkey/?utm_source=addons.mozilla.org)) 
   - de Google Chrome ([TamperMonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo))
2. Acceder a la extensión (depende de cada navegador) y en la opción "Agregar nuevo script" copiar y pegar el script que aparece más abajo, adapatando los accesos directos a las necesidades de cada uno (ver pto. 4). Guardar (menú Archivo -> Guardar)
3. En este script se configura la ejecución del código para cualquier URL de www.unirioja.es (https://www.unirioja.es/*)
4. Los nuevos items del menú se configuran en la estructura de datos `newAccesosDirectos`, especificando para cada entrada su etiqueta visible (`label`) y su dirección (`href`)

**DISCLAIMER**

El script depende del HTML de la página (localiza el punto de inserción de los nuevos elementos de 
menú en actual DOM de la página usando como referencia unas clases CSS). Si el HTML cambia debido a 
un rediseño o versionado de la web, el script dejará de funcionar. Por favor, avísame 
[por email](email:francisco.garcia@unirioja.es) si detectas tan catastrófico suceso y trataré de 
parchearlo.

## Edición del script. Añadir más entradas al menú

Si quieres añadir nuevos items al script una vez configurado este, accede a la extensión del TamperMonkey en el navegador, entra en "Dashboard" y edita el script llamado "Add New Menu Items to UR". Procede como se indica en el anterior punto 4 para añadir más opciones al menú, o quitar alguna de las que hayas añadido antes

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
```
