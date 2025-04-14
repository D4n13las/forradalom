/**
 * Létrehoz egy új div elemet a megadott osztálynévvel.
 * @param {string} osztalyNev - Az osztály neve, amelyet a div elemhez rendelünk.
 * @returns {HTMLDivElement} - A létrehozott div elem.
 */
const divLetrehoz = (osztalyNev) => { // osztálynév alapján div-et hozunk létre
    const div = document.createElement('div'); // új div elem létrehozása
    div.className = osztalyNev; // az osztálynév beállítása a div-hez
    return div; // visszatérünk a létrehozott div-vel
}

// A fő tároló div létrehozása
const kontenerDiv = divLetrehoz('container'); // container osztályú div létrehozása
document.body.appendChild(kontenerDiv); // hozzáadjuk a container div-et a body-hoz

// A táblázatot tartalmazó div létrehozása
const tablaDiv = divLetrehoz('table'); // table osztályú div létrehozása

// Az űrlapot tartalmazó div létrehozása
const urlapDiv = divLetrehoz('form'); // form osztályú div létrehozása

// A container div-hez hozzáadjuk a táblázatot és az űrlapot
kontenerDiv.appendChild(tablaDiv); // a táblázat div hozzáadása a containerhez
kontenerDiv.appendChild(urlapDiv); // az űrlap div hozzáadása a containerhez