// Vízszintes elválasztó létrehozása, hogy a HTML-ben könnyen elkülöníthető legyen az OOP és a sima rész
const elvalaszto = document.createElement('hr'); // elválasztó elem létrehozása
document.body.appendChild(elvalaszto); // elválasztó hozzáadása a body-hoz

// Táblázatot tartalmazó div létrehozása az Area osztály segítségével
const tabla = new Area('table'); // table osztályú div létrehozása

// Űrlapot tartalmazó div létrehozása az Area osztály segítségével
const urlap = new Area('form'); // form osztályú div létrehozása