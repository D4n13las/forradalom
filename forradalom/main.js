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

 // Űrlap létrehozása az űrlap div-en belül
 const formSim = document.createElement('form'); // új form elem létrehozása
 urlapDiv.appendChild(formSim); // az űrlap hozzáadása az űrlap div-hez
 
 // Űrlap mezők definiálása
 const fieldElementList = [ // mezők listája
     { fieldid: 'forradalom', fieldLabel: 'forradalom' }, // név mező
     { fieldid: 'evszam', fieldLabel: 'evszam' }, // születési év mező
     { fieldid: 'sikeres', fieldLabel: 'sikeres' } // irányítószám mező
 ];
 
 // Mezők létrehozása és hozzáadása az űrlaphoz
 for (const fieldElement of fieldElementList) { // végigmegyünk a mezők listáján
     const field = divLetrehoz('field'); // új field div létrehozása
     formSim.appendChild(field); // field hozzáadása az űrlaphoz
 
     const label = document.createElement('label'); // új label elem létrehozása
     label.htmlFor = fieldElement.fieldid; // label összekapcsolása az input mezővel
     label.textContent = fieldElement.fieldLabel; // label szövegének beállítása
     field.appendChild(label); // label hozzáadása a field-hez
 
     if (fieldElement.fieldid === 'sikeres') { // ha a mező azonosítója "sikeres"
         const select = document.createElement('select'); // új select elem létrehozása
         select.id = fieldElement.fieldid; // select azonosítójának beállítása
 
         const options = ["",'igen', 'nem']; // legördülő menü opciói
         for (const optionText of options) { // végigmegyünk az opciók listáján
             const option = document.createElement('option'); // új option elem létrehozása
             option.value = optionText; // opció értékének beállítása
             option.textContent = optionText; // opció szövegének beállítása
             select.appendChild(option); // opció hozzáadása a select-hez
         }
 
         field.appendChild(select); // select hozzáadása a field-hez
     } else { // ha nem a "sikeres" mező
         const input = document.createElement('input'); // új input mező létrehozása
         input.id = fieldElement.fieldid; // input mező azonosítójának beállítása
         field.appendChild(input); // input mező hozzáadása a field-hez
     }
 
     field.appendChild(document.createElement('br')); // sortörés hozzáadása
 }
 
 // Hozzáadás gomb létrehozása és hozzáadása az űrlaphoz
 const buttonFormSim = document.createElement('button'); // új gomb létrehozása
 buttonFormSim.textContent = 'hozzáadás'; // gomb szövegének beállítása
 formSim.appendChild(buttonFormSim); // gomb hozzáadása az űrlaphoz