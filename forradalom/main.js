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
// Táblázat létrehozása a táblázat div-en belül
const tableSim = document.createElement('table'); // új táblázat elem létrehozása
tablaDiv.appendChild(tableSim); // a táblázat hozzáadása a táblázat div-hez

// Táblázat fejléceinek létrehozása
const tableHead = document.createElement('thead'); // thead elem létrehozása
tableSim.appendChild(tableHead); // thead hozzáadása a táblázathoz
const tableHeadRow = document.createElement('tr'); // fejléc sor létrehozása
tableHead.appendChild(tableHeadRow); // fejléc sor hozzáadása a thead-hez

// Fejléc cellák létrehozása és hozzáadása
const theadCells = ['Forradalom', 'Évszám', 'Sikeres']; // fejléc cellák tartalma
for (const cellContent of theadCells) { // végigmegyünk a cellák tartalmán
    const thcell = document.createElement('th'); // új th elem létrehozása
    thcell.innerText = cellContent; // cella tartalmának beállítása
    tableHeadRow.appendChild(thcell); // cella hozzáadása a fejléc sorhoz
}

// Táblázat törzsének létrehozása
const tbody = document.createElement('tbody'); // tbody elem létrehozása
tableSim.appendChild(tbody); // tbody hozzáadása a táblázathoz