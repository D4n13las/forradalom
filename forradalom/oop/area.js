/**
 *Area osztály elemet hoz létre egy konténerben
 * @class
 */
class Area {
    #div; //privát változó tárolásához
    /**
     * Létrehoz egy új div elemet a megadott osztálynévvel, és elhelyezi a konténerben
     * @constructor
     * @param {string} className - Az új div elem osztályneve
     */
    constructor(osztalyNev) { // osztálynév alapján div-et hozunk létre
        let kontenerDiv = document.querySelector('.containeroop'); // megkeressük a fő container div-et
        if (!kontenerDiv) { // ha nem létezik, létrehozzuk
            kontenerDiv = document.createElement('div'); // új div létrehozása
            kontenerDiv.className = 'containeroop'; // osztálynév beállítása
            document.body.appendChild(kontenerDiv); // hozzáadjuk a body-hoz
            this.#div = document.createElement('div'); // új div elem létrehozása
         this.#div.className = osztalyNev; // az osztálynév beállítása a div-hez
         kontenerDiv.appendChild(this.#div); // hozzáadjuk a container div-hez
        }
 
    }
    /**
     * A div getter metódusa, amely visszaadja a privát div elemet.
     * @returns {HTMLDivElement} - A létrehozott div elem.
     */
    get div(){ // getter a privát div eléréséhez
     return this.#div; // visszatérünk a privát div-vel
    }
}
 
 /**
  * A Table osztály az Area osztályból származik, és egy táblázatot hoz létre.
  */
 class Table extends Area {
     /**
      * Létrehoz egy új Table példányt.
      * @param {string} cssClass - Az osztály neve, amelyet a táblázat div-hez rendelünk.
      */
     constructor(cssClass) { // osztálynév alapján táblázatot hozunk létre
        super(cssClass); // meghívjuk az Area osztály konstruktorát
        const table = document.createElement('table'); // új táblázat elem létrehozása
        this.div.appendChild(table); // a táblázat hozzáadása a div-hez

        const thead = document.createElement('thead'); // thead elem létrehozása
        table.appendChild(thead); // thead hozzáadása a táblázathoz

        const theadRow = document.createElement('tr'); // fejléc sor létrehozása
        thead.appendChild(theadRow); // fejléc sor hozzáadása a thead-hez

        const theadCells = ['Forradalom', 'Évszám', 'Sikeres']; // fejléc cellák tartalma
        for (const cellContent of theadCells) { // végigmegyünk a cellák tartalmán
            const thcell = document.createElement('th'); // új th elem létrehozása
            thcell.innerText = cellContent; // cella tartalmának beállítása
            theadRow.appendChild(thcell); // cella hozzáadása a fejléc sorhoz
        }

        const tbody = document.createElement('tbody'); // tbody elem létrehozása
        table.appendChild(tbody); // tbody hozzáadása a táblázathoz
     }
 }

 /**
  * A Form osztály az Area osztályból származik, és egy űrlapot hoz létre.
  */
 class Form extends Area {
    /**
     * Létrehoz egy új Form példányt.
     * @param {string} cssClass - Az osztály neve, amelyet az űrlap div-hez rendelünk.
     */
    constructor(cssClass) { // osztálynév alapján űrlapot hozunk létre
        super(cssClass); // meghívjuk az Area osztály konstruktorát
        const form = document.createElement('form'); // új form elem létrehozása
        this.div.appendChild(form); // az űrlap hozzáadása a div-hez

        const fieldElementList = [ // mezők listája
            { fieldid: 'forradalom', fieldLabel: 'forradalom'}, // forradalom mező
            { fieldid: 'evszam', fieldLabel: 'évszám'}, // évszám mező
            { fieldid: 'sikeres', fieldLabel: 'sikeres', type: 'select', options: ["",'igen', 'nem'] } // sikeres mező legördülő menüvel
        ];

        for (const fieldElement of fieldElementList) { // végigmegyünk a mezők listáján
            const field = divLetrehoz('field'); // új field div létrehozása
            form.appendChild(field); // field hozzáadása az űrlaphoz

            const label = document.createElement('label'); // új label elem létrehozása
            label.htmlFor = fieldElement.fieldid; // label összekapcsolása az input vagy select mezővel
            label.textContent = fieldElement.fieldLabel; // label szövegének beállítása
            field.appendChild(label); // label hozzáadása a field-hez

            if (fieldElement.type === 'select') { // ha a mező típusa legördülő menü
                const select = document.createElement('select'); // új select elem létrehozása
                select.id = fieldElement.fieldid; // select azonosítójának beállítása
                for (const optionText of fieldElement.options) { // végigmegyünk az opciók listáján
                    const option = document.createElement('option'); // új option elem létrehozása
                    option.value = optionText; // opció értékének beállítása
                    option.textContent = optionText; // opció szövegének beállítása
                    select.appendChild(option); // opció hozzáadása a select-hez
                }
                field.appendChild(select); // select hozzáadása a field-hez
            } else { // ha a mező típusa szövegmező
                const input = document.createElement('input'); // új input mező létrehozása
                input.id = fieldElement.fieldid; // input mező azonosítójának beállítása
                field.appendChild(input); // input mező hozzáadása a field-hez
            }

            field.appendChild(document.createElement('br')); // sortörés hozzáadása
        }

        const button = document.createElement('button'); // új gomb létrehozása
        button.textContent = 'hozzáadás'; // gomb szövegének beállítása
        form.appendChild(button); // gomb hozzáadása az űrlaphoz
    }
}