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